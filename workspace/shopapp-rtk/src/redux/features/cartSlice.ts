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

    },
    increment: (state, action: PayloadAction<number>) => {

    },
    clearCart: (state) => {
        state.items = [];
        state.total = 0;
        state.quantity = 0;
    }
  }
});

export const { addToCart, increment, clearCart } = cartSlice.actions;

export default cartSlice.reducer;