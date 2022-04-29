import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <div className="arrow">&#10094; </div>
            <span className="quantity">{quantity}</span>
            <div className="arrow">&#10095;</div>                        
            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
    
}

export default CheckoutItem;