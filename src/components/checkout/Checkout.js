import "./Checkout.css"
import checkout_banner from "../../resources/checkout_banner.jpeg"
import Subtotal from "../subtotal/Subtotal"

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={checkout_banner} className="checkout_ad" alt=""/>

                <div className="checkout_title">
                    <h2>Your Shopping basket</h2>                    
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
