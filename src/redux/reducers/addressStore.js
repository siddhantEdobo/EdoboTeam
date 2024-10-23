import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addressData: {},
  },
  reducers: {
    setAddressData: (state, action) => {
      state.addressData = action.payload;
    },
  },
});

export const { setAddressData } = addressSlice.actions;
export default addressSlice.reducer;
