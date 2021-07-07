import React, {useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

import { auth } from './firebase';
import { useStateValue } from './components/StateProvider/StateProvider';
import { ACTIONS } from './components/StateProvider/reducer';

function App() {
  const [,dispatch] = useStateValue();
  useEffect(()=>{
    if(auth){
      auth.onAuthStateChanged(user=> {
        if(user){
          dispatch({type:ACTIONS.SET_USER, payload:user})
        }else{
          dispatch({type:ACTIONS.SET_USER, payload:null})  
        }
      })
    }
  },[])
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/signup">
              <Signup />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
