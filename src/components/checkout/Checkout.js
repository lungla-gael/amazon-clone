import "./Checkout.css"
import checkout_banner from "../../resources/checkout_banner.jpeg"
import Subtotal from "../subtotal/Subtotal"
import { useStateValue } from "../../state/StateProvider"
import CheckoutProduct from "./CheckoutProduct"

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={checkout_banner} className="checkout_ad" alt=""/>

                <div className="checkout_title">
                    <h2>Your Shopping basket</h2>                    
                </div>

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

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
