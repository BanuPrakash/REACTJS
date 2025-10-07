import { createContext, useReducer } from "react";
import type CartItem from "../models/CartItem";
import cartReducer from "../reducers/cartReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type ContextType = {
    items: CartItem[],
    total: number,
    quantity: number,
    addToCart: (item:CartItem) => void,
    checkout: () => void,
    increment: (id:number) => void
}

// centralized placeholder, to avoid props drill
// IN JS: export const cartContext = createContext();
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    quantity: 0,
    addToCart: (item:CartItem) => {},
    checkout: () => {},
    increment: (id:number) =>{}
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
   let navigate = useNavigate();
  let [state, dispatch] = useReducer(cartReducer, initialState);
  
  function addToCart(item:CartItem) {
    dispatch({type:'ADD_TO_CART', payload: item});
  }

  function checkout() {
    // on login, store email in session storage
    // window.sessionStorage.setItem("email", "banu@gmail.com")
    let email = window.sessionStorage.getItem('email');
    let order = {
      "customer": {"email": email},
      items: state.items,
      orderDate: new Date()
    };

    axios.post("http://localhost:1234/orders", order)
    .then(response => {
      console.log(response.data);
       dispatch({type:'CLEAR_CART'});
       navigate("/");
    })
   
  }

  function increment(id: number) {
    dispatch({type:'INCREMENT', payload: id})
  }
  return (
    <CartContext.Provider value={{...state, addToCart, checkout, increment}}>
        {children}
    </CartContext.Provider>
  )
}
