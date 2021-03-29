import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../../state/StateProvider'
import "./Product.css"

const Product = ({ id, title, image, price, rating}) => {
    const [{ basket }, dispactch] = useStateValue()

    console.log("this is the basket ", basket);

    const addToBasket= () => {
        // dispatch the item into the data layer   \
        dispactch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
 
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <p>
                        {Array(rating).fill().map(() => ( <StarIcon className="star_icon"/>))}                       
                    </p>
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
