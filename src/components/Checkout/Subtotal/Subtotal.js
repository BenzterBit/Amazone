import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider/StateProvider'

function Subtotal() {
<<<<<<< HEAD
    const [{basket},] = useStateValue()
=======
    const [{basket}] = useStateValue()
>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7

    const calcPrice = (basket) =>{
        return basket?.reduce((amount,item)=> item.price+amount, 0);
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value)=> (
                    <>
                    <p>
                        Subtotal ({basket?.length} items): <strong> {value}</strong> 
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox'/> This order contains a gift 
                    </small>
                    </>
                )}
                decimalScale={2}
                value={calcPrice(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"Rs."}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
