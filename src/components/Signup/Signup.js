import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase';
import './Signup.css'

function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const register =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                auth.user.updateProfile({
                    displayName:username,
                }).then(history.push('/'))
            }
        }).catch(err => alert(err))

    }


    return (
        <div className='signup'>
            <Link to='/'>
                <img alt='' className='signup_logo' src="https://i.imgur.com/u68vO4W.png" />
            </Link>
            <div className='signup_container'>
                <h1>Sign Up</h1>
                <form className='signup_form'>
                    <h4>E-mail</h4>
                    <input type='email' value={email} onChange= {e=> setEmail(e.target.value)} />

                    <h4>Password</h4>
                    <input type='password' value={password} minlength="4"onChange= {e=> setPassword(e.target.value)}/>

                    <h4>User Name</h4>
                    <input type='text' value={username} minlength="4" onChange= {e=> setUsername(e.target.value)} />
                </form>
            
                <button className='signup_registerButton' onClick={register}>Create an Account</button>
                
                
            </div>
            <div>
                <Link to='/login'>
                    <p className='signup_loginSwitch'>Sign in instead</p>
                </Link>
            </div>
        </div>
    )
}

export default Signup
