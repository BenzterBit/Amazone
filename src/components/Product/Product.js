import React from 'react'
import './Product.css'
import GetStars from './GetStars'

function Product({title,image,price,rating}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    <GetStars rating={rating}/>
                </div>
            </div>
                <img alt='' src={image}/>
                <button>Add to Basket</button>
            
            
        </div>
    )
}

export default Product
