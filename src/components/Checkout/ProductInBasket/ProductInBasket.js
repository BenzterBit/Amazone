import React from 'react'
import GetStars from '../../Product/GetStars'
import { ACTIONS } from '../../StateProvider/reducer'
import { useStateValue } from '../../StateProvider/StateProvider'
import './ProductInBasket.css'

function ProductInBasket({id, image, title, price, rating}) {
    const [dispatch] = useStateValue()

    const removeFromBasket=() =>{
        dispatch({type:ACTIONS.REMOVE_FROM_BASKET , payload:{id}})
    }
    return (
        <div className='productInBasket'>
            <img className='productInBasket_image' src={image} alt=''/>
            <div className='productInBasket_info'>
                <p className='productInBasket_title'>{title}</p>
                <p className='productInBasket_price'><small>Rs.</small><strong>{price}</strong></p>
                <div className='productInBasket_rating'>
                    <GetStars rating={rating}/>
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default ProductInBasket
