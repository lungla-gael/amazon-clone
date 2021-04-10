import moment from "moment"
import CheckoutProduct from "../checkout/CheckoutProduct"
import "./Order.css"

const Order = ({ order }) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Da YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id = {item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                />
            ))}
        </div>
    )
}

export default Order
