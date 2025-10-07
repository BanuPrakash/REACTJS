import type CartItem from "../models/CartItem"

// type Action = {
//     type: string,
//     payload: any
// }

type Action = {
   type: 'ADD_TO_CART',
   payload: CartItem 
} | {
   type: 'INCREMENT',
   payload: number 
} | {
   type: 'CLEAR_CART'
}

type CartState  = {
    items: CartItem[],
    total: number,
    quantity: number
}

export default function cartReducer(state: CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const item = {...action.payload}; // copy of payload
            return {
                items: [...state.items, item],
                total: state.total + item.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;

    }
}