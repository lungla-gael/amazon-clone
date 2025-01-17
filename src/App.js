import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Orders from './components/orders/Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './state/StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51Id3I7DnovDX30VrSEsqIn62Ny3zNAvwN9zWCLPyaIrb3TlLBeu62swm7bqAUPnP8xYANxKJj5KP4UZBbC32yleJ00bA31UFrR")

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    // it will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("The User is ", authUser);

      if (authUser) {
        // the user just logged in or the was already logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        }) 
      }
    })
  }, [])

  return (

    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
