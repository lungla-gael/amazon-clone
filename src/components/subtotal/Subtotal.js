import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../state/StateProvider"
import { getBasketTotal } from "../../state/reducer"
import { useHistory } from "react-router"

const Subtotal = () => {
    const history = useHistory()
    const [{ basket }, dispactch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): 
                                <strong>
                                    {` ${value}`}
                                </strong> 
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparators={true}
                prefix={"$"}
            />

            <button onClick={e => history.push("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
