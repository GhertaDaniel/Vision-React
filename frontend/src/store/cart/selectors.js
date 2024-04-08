export const selectCartItemsById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
