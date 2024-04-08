import { configureStore } from '@reduxjs/toolkit';
import glasses from './glasses';
import cart from './cart/cart';
import auth from './auth/auth';

export const store = configureStore({
  reducer: {
    glasses,
    cart,
    auth,
  },
});
