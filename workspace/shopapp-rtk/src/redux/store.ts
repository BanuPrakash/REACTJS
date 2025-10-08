import { configureStore, ReducerType } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import profileReducer from "./features/profileSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

// function doTask() {
//     return {
//         "id": 1,
//         "title": "Task 1",
//         "price": 100
//     }
// }
    
// type MyType = ReturnType<typeof doTask>;

// let data: MyType = {
//     "id": 1,
//     "title": "Task 1",
//     "price": 100
// }

// instead of createStore we use configureStore from redux toolkit
const store = configureStore({
    // root reducer
    reducer: {
       cart: cartReducer,
       profile: profileReducer
    },
    // devTools: false
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;