import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type CartItem from '../../models/CartItem'

export interface CartState {
    items: CartItem[],
    total: number,
    quantity: number
}   

const initialState:CartState = {
    items: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
        state.total += action.payload.price ;
        state.quantity += 1;
    },
    increment: (state, action: PayloadAction<number>) => {
        state.items.forEach(item => {
            if(item.id === action.payload) {
                item.qty += 1;
                item.amount = item.price * item.qty;
                state.total = state.items.map(item => item.amount).reduce((a,b) => a + b, 0);
                state.quantity += 1;
            }
        })
    },
    clearCart: (state) => {
        state.items = [];
        state.total = 0;
        state.quantity = 0;
    }
  }
});

// dispatch(addToCart({id: 2, title: "", ..}))
// dispatch(clearCart())
// dispatch(increment(3));
// no longer you use like dispatch({type:'ADD_TO_CART', payload: {...}})

export const { addToCart, increment, clearCart } = cartSlice.actions;

export default cartSlice.reducer;