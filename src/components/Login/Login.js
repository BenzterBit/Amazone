import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                console.log(auth)
                history.push('/')
            }
        }).catch(err => alert(err))

    }

    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                history.push('/')
            }

        }).catch(err => alert(err))

    }
    return (
        <div className='login'>
            <Link to='/'>
                <img alt='' className='login_logo' src="https://i.imgur.com/u68vO4W.png" />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form className='login_form'>
                    <h4>E-mail</h4>
                    <input type='email' value={email} onChange= {e=> setEmail(e.target.value)} />

                    <h4>Password</h4>
                    <input type='password' value={password} onChange= {e=> setPassword(e.target.value)}/>
                    <button type='submit' className='login_signInButton' onClick={signin}>Login</button>
                </form>
                <button className='login_registerButton' onClick={register}>Create an Account</button>
            </div>

            
        </div>
    )
}

export default Login
