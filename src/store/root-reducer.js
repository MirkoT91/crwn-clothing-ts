import { combineReducers } from "redux";
//@ts-ignore
import { userReducer } from "./user/user.reducers.tsx";
//@ts-ignore
import { categoriesReducer } from "./categories/categories.reducer.tsx";
//@ts-ignore
import { cartReducer } from "./cart/cart.reducer.tsx";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})