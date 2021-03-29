import "./CheckoutProduct.css"
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from "../../state/StateProvider"

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />
            <div className="checkoutProduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutProduct_price">
                   <small>$
                       <strong>
                           {price}
                       </strong>
                   </small>
                </p>
                <div className="checkoutProduct_rating">
                    <p>
                        {Array(rating).fill().map(() => ( <StarIcon className="star_icon"/>))}                       
                    </p>
                </div>
                <button onClick={removeFromBasket}> Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
