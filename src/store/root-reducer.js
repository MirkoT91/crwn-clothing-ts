import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducers.tsx";
import { categoriesReducer } from "./categories/categories.reducer.tsx";
import { cartReducer } from "./cart/cart.reducer.tsx";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})