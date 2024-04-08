import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';

const initialState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += action.payload.count;
      } else if (action.payload.count > 1) {
        state.items.push({
          ...action.payload,
        });
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
    clearItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      state.items.filter((obj) => obj.id !== findItem.id);
    },
    clearAllItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, minusItem, removeItem, clearItem, clearAllItems } = cartSlice.actions;

export default cartSlice.reducer;
