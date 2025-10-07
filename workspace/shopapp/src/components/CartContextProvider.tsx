import { createContext, useReducer } from "react";
import type CartItem from "../models/CartItem";
import cartReducer from "../reducers/cartReducer";
type ContextType = {
    items: CartItem[],
    total: number,
    quantity: number,
    addToCart: (item:CartItem) => void,
    checkout: () => void
}

// centralized placeholder, to avoid props drill
// IN JS: export const cartContext = createContext();
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    quantity: 0,
    addToCart: (item:CartItem) => {},
    checkout: () => {}
});

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}

type Props = {
    children: React.ReactNode
}

export default function CartContextProvider({children}: Props) {
    
  let [state, dispatch] = useReducer(cartReducer, initialState);
  
  function addToCart(item:CartItem) {
    dispatch({type:'ADD_TO_CART', payload: item});
  }

  function checkout() {
    dispatch({type:'CLEAR_CART'})
  }

  return (
    <CartContext.Provider value={{...state, addToCart, checkout}}>
        {children}
    </CartContext.Provider>
  )
}
