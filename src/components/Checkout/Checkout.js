import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div>
                    <h1 className='checkout_title'>
                        Your Shopping Basket
                    </h1>
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
