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
        // If the product already exists, we start incrementing from the current quantity
        existingProduct.quantity += 1;
      } else {
        // Add new product to cart with quantity set to 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      console.log("product", productId);
      const existingProduct = state.items.find((item) => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Decrement quantity if more than 1
        } else {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }
    },
    // Reducer to set cart items from API response
    setCartItems: (state, action) => {
      state.items = action.payload; // Set the cart items with data from API
    },
    // Reducer to remove an item by ID
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { addToCart, decrementQuantity, setCartItems, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
