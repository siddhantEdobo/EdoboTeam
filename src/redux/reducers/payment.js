import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    paymentMethod: null, // initial payment method state
  },
  reducers: {
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload; // updating the selected payment method
    },
  },
});

export const { setPaymentMethod } = paymentSlice.actions;
export default paymentSlice.reducer;
