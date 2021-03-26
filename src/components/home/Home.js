import "./Home.css"
import banner from "../../resources/amazon_banner.jpeg"
import Product from "../product/Product"

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={banner} alt=""/>
            </div>

            <div className="home_row">
                <Product />
                <Product />
            </div>
            <div className="home_row">
                
            </div>
            <div className="home_row">
                
            </div>
        </div>
    )
}

export default Home
