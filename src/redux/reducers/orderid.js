import { createSlice } from "@reduxjs/toolkit";

const orderId = createSlice({
  name: "orderId",
  initialState: {
    orderId: null,
  },
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
  },
});
export const { setOrderId } = orderId.actions;
export default orderId.reducer;
