import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import CartIcon from '../../components/cart-icon/cart-icon.component.tsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
// @ts-ignore
import { selectIsCartOpen } from '../../store/cart/cart.selector.tsx';
// @ts-ignore
import { selectCurrentUser } from '../../store/user/user.selector.tsx';
// @ts-ignore
import { signOutStart } from '../../store/user/user.action.tsx';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  // @ts-ignore
} from './navigation.styles.tsx';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;