import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to hold products in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if product exists
      } else {
        state.items.push({ ...product, quantity: 1 }); // Add new product to cart
      }
    },
    // New reducer to set cart items from API response
    setCartItems: (state, action) => {
      state.items = action.payload; // Set the cart items with data from API
    },
  },
});

export const { addToCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
