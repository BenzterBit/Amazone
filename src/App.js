import React, {useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login'
<<<<<<< HEAD
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider/StateProvider';
import { ACTIONS } from './components/StateProvider/reducer';
=======

>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7

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
<<<<<<< HEAD
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
=======
        <Route path="/login">
          <Login/>
          </Route>
        <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
