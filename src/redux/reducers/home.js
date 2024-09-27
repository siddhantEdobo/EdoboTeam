import { createSlice } from "@reduxjs/toolkit";

const home = createSlice({
  name: "home",
  initialState: {
    pincode: "",
  },
  reducers: {
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
  },
});

export const { setPincode } = home.actions;
export default home.reducer;
