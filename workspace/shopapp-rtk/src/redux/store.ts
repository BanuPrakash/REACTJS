import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import profileReducer from "./features/profileSlice";

// instead of createStore we use configureStore from redux toolkit
const store = configureStore({
    // root reducer
    reducer: {
       cart: cartReducer,
       profile: profileReducer
    },
    // devTools: false
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;