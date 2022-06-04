// @ts-ignore
import { CartItem } from "./cart.types.tsx";
// @ts-ignore
import { setCartItems, setIsCartOpen } from "./cart.action.tsx";
import { AnyAction } from "redux";


export type  CartState = {
  readonly isCartOpen :  boolean;
  readonly cartItems :  CartItem[];
};

export const  CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
  };
  
  export const cartReducer = (
    state= CART_INITIAL_STATE,  
    action = {} as AnyAction
    ) => {

      if(setIsCartOpen.match(action)) {
        return {
          ...state,
          isCartOpen: action.payload,
        };
      }

      if(setCartItems.match(action)) {
        return {
          ...state,
          cartItems: action.payload,
        };
      }

      return state;
   
  };