import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
  deliveryInstructions: [],
  tip: 0,
  coupon: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (!item) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalItems += 1;
        state.totalPrice += action.payload.price;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice -= item.price;
        } else {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
          state.totalItems -= 1;
          state.totalPrice -= item.price;
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload.id
        );
      }
    },
    setDeliveryInstructions: (state, action) => {
      const instruction = action.payload;
      if (state.deliveryInstructions.includes(instruction)) {
        state.deliveryInstructions = state.deliveryInstructions.filter(
          (item) => item !== instruction
        );
      } else {
        state.deliveryInstructions.push(instruction);
      }
    },
    setTip: (state, action) => {
      state.tip = action.payload;
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      state.totalPrice -= (state.totalPrice * action.payload.discount) / 100;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setDeliveryInstructions,
  setTip,
  applyCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;
