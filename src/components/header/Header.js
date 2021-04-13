import './Header.css'
import logo from '../../resources/amazon.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../state/StateProvider'
import { auth } from '../../firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className='header_logo'
                    src={logo}
                    alt =""
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello {user? user?.email.slice(0,user?.email.indexOf("@")) : "Guest"}
                        </span>
                        <span className="header_optionLineTwo">
                            {user? "Sing Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">
                            {/* The question mark is known as optopnal chaining in case of an error */}
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
