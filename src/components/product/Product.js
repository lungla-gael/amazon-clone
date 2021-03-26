import StarIcon from '@material-ui/icons/Star'
import "./Product.css"

const Product = ({ title, image, price, rating}) => {
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
                        {Array(rating).fill().map((_, i) => ( <StarIcon className="star_icon"/>))}                       
                    </p>
                </div>
            </div>

            <img src={image} alt="" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
