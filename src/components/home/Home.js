import "./Home.css"
import banner_image from "../../resources/amazon_banner.jpeg"
import lean_startup_image from '../../resources/lean_startup.jpeg'
import basics_image from '../../resources/basics.jpg'
import beauty_image from '../../resources/beauty.jpg'
import tv_image from '../../resources/tv.jpg'
import shop_image from '../../resources/shop.jpg'
import fit_image from '../../resources/fit.jpg'
import Product from "../product/Product"

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={banner_image} alt=""/>
            </div>

            <div className="home_row">
                <Product 
                          id="56565"
                          title="The Lean Startup is a new approach being adopted across the globe, 
                                changing the way companies are built and new products are launched." 
                          price={29.99} 
                          image={lean_startup_image} 
                          rating={5}/>
                <Product 
                          id="56565"
                          title="The Nerd Fitness “Stuck in the House” Game · 
                                 Walk the complete perimeter of your house or apartment, reverse, and do it again. " 
                          price={309.99} 
                          image={fit_image} 
                          rating={4}/>
            </div>
            <div className="home_row">
                <Product 
                          id="56565"
                          title="That's 27.9 percent of the expected ecommerce revenue worldwide in 2021, which stands at $2.7 trillion.
                                 The second-most popular online shopping category is toys, hobby, and DIY." 
                          price={39.0} 
                          image={shop_image} 
                          rating={3}/>
                <Product 
                          id="56565"
                          title="Amazon Basics · Home Improvement · 
                                Bathroom Hardware · Cabinet Hardware · Cords and Power Management · " 
                          price={95.0} 
                          image={basics_image} 
                          rating={5}/>
                <Product 
                          id="56565"
                          title="We rounded up the best 
                                new beauty products that launched this month, including hair, skin-care, and makeup items." 
                          price={9.0} 
                          image={beauty_image} 
                          rating={4}/>            
            </div>
            <div className="home_row">
                <Product 
                          id="56565"
                          title="Find a TV in your budget that fits perfectly • Get it for the lowest price! • 
                                Detailed reviews and helpful knowledge • Find your new TV now!" 
                          price={309.99} 
                          image={tv_image} 
                          rating={2}/>                
            </div>
        </div>
    )
}

export default Home
