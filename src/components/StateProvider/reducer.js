export const initialState = {
    basket: []
}

export const ACTIONS = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET:'REMOVE_FROM_BASKET'
}

export const reducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket,action.payload]
            }
        case ACTIONS.REMOVE_FROM_BASKET:
             const index = state.basket.findIndex(item => item.id ===action.payload.id)
             let newBasket = [...state.basket]
             if(index>=0){
                newBasket.splice(index,1)
             }else{
                 console.warn(`the product ${action.payload.id} is not in the basket`)
             }
             return {
                 ...state, basket: newBasket
             }
            
                
        default:
            return state;
    }
}