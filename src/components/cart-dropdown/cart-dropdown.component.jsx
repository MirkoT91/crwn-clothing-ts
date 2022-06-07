import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component.tsx';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector.tsx';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;