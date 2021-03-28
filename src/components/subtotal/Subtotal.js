import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../state/StateProvider"

const Subtotal = () => {
    const [{ basket }, dispactch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): 
                                <strong> 
                                    ${basket
                                        .map(item => item.price)
                                        .reduce((total, price) => total + price, 0)}
                                </strong> 
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparators={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
