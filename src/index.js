import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useInRouterContext } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';

import './index.scss';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>
);