import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import {auth} from '../../firebase';

function Header() {
<<<<<<< HEAD
    const [{basket,user},] = useStateValue();

    const handleAuth = ()=>{
        if(user){
            auth.signOut();
        }
    }
=======
    const [{basket}] = useStateValue()
>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7

    return (
        <div className='header'>
            <Link to='/'>
<<<<<<< HEAD
                <img alt='' className='header_logo' src="https://i.imgur.com/u68vO4W.png" />
=======
                <img alt ='' className='header_logo' src="https://i.imgur.com/u68vO4W.png" />
>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>


            </div>

            <div className="header_nav">
<<<<<<< HEAD
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionLineOne">Hello {user?user.email:'Guest'}</span>
                        <span className="header_optionLineTwo">{user?'Sign Out':'Sign in'}</span>
=======
                <Link to='/login'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">Sign in</span>
>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
                
            </div>


            
        </div>
    )
}

export default Header
