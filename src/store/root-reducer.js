import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducers";

export const rootReduer = combineReducers({
    user: userReducer,
})