import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupons",
  initialState: {
    appliedCoupon: null, // This will hold the currently applied coupon object
  },
  reducers: {
    addCoupon: (state, action) => {
      state.appliedCoupon = action.payload; // Replace the previous coupon with the new one
    },
    removeCoupon: (state) => {
      state.appliedCoupon = null; // Remove the currently applied coupon
    },
  },
});

export const { addCoupon, removeCoupon } = couponSlice.actions;

export default couponSlice.reducer;
