import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { addReducer } from "./addressSlice";

const rootReducer = combineReducers({
    cartData: cartReducer,
    addData: addReducer,
})

export default rootReducer;