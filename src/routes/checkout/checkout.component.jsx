import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="checkout-item-container">
            
            {cartItems.map((item) => {
                console.log(item);
                <div key={item.id}>
                <h1>{item.name}</h1>
                </div>
            })
            }
        </div>

    )
}

export default Checkout;
