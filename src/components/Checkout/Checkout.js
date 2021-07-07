import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'
import ProductInBasket from './ProductInBasket/ProductInBasket'

function Checkout() {
    const [{basket,user}] = useStateValue()
    
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div>
                    <h1 className='checkout_title'>
                        {user?user.displayName + "'s":"Your"} Shopping Basket
                    </h1>

                    {basket.map(item => (
                        <ProductInBasket id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating}/>
                    ))}
                    
                    
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
