import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);

    return (
        <div>
            <h1>I am the checkout page</h1>
            <div>
            
                {cartItems.map((cartItem) => {
                    const { id, name, imageUrl, quantity} = cartItem;
                    return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <span>{quantity}</span>
                        <span>decrement</span>
                        <span onClick= {() => addItemToCart(cartItem)}>increment</span>
                    </div>
                )
                })
            }
            </div>
        </div>

    )
}

export default Checkout;
