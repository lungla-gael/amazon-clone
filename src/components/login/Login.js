import "./Login.css"
import logo from "../../resources/amazon.png"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import { auth } from "../../firebase"

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [passsword, setPassword] = useState("")

    const signIn = e => {
        // prevent from refresshing
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, passsword)
            .then((auth) => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        // prevent from refresshing
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, passsword)
            .then((auth) => {
                // it successfully created a new user wth email and password
                console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
             <img src={logo} className="login_logo"/>
            </Link>

            <div className="login_container"> 
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} 
                                        onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={passsword}
                                            onChange={e => setPassword(e.target.value)}/>

                    <button className="loginSignin_button" 
                            type="submit"
                            onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By Signing in you agree to AMAZON FAKE CLONE Conditions of use
                    & Sale. Please see our Privacy Notice, our Cookies 
                    Notice and our Interest based ads.
                </p>

                <button 
                    onClick={register}
                    className="loginRegister_button">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
