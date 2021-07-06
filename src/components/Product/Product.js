import React from 'react'
import './Product.css'
import GetStars from './GetStars'
import { useStateValue } from '../StateProvider/StateProvider'
import { ACTIONS } from '../StateProvider/reducer'

function Product({id,title,image,price,rating}) {
    const [dispatch] = useStateValue()
    function addToBasket(){
        dispatch({ type:ACTIONS.ADD_TO_BASKET , 
            payload: {
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
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
                <button onClick={addToBasket}>Add to Basket</button>
            
            
        </div>
    )
}

export default Product
