import { useStateValue } from "../../state/StateProvider"
import CheckoutProduct from "../checkout/CheckoutProduct"
import { Link, useHistory } from 'react-router-dom'
import "./Payment.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../state/reducer"
import axios from "../../axios"
import { db } from "../../firebase"

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
        // generate the special stripe secret which will allow us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({    
                method: "post",
                // Stripe expects the total in a currency's subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log("THE SECRET IS >>>>>>>> ", clientSecret);

    const handleSubmit = async (event) => {
        // do stripe stuff 
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
        //  payment Intent = payment confirmation

            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace("./orders")
        })
    }

    const handleChange = event => {
        // listen to changes in card element
        // and display any errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout ({
                        <Link to="/checkout">
                            {basket?.length} items
                        </Link>
                    })
                </h1>

                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Bepele block 5</p>
                        <p>Bonaberi, Douala</p>
                    </div>
                </div>
                
                {/* Payment section - review items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id = {item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparators={true}
                                    prefix={"$"}
                                />
                            </div>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </form>
                    </div>

                    {/* Errors */}
                    {error && <div>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Payment
