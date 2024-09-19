import { createSlice } from "@reduxjs/toolkit";

const gpsAdd = createSlice({
  name: "gpsAdd",
  initialState: {
    add: null,
  },
  reducers: {
    addData: (state, action) => {
      state.add = action.payload;
    },
  },
});
export const { addData } = gpsAdd.actions;

export default gpsAdd.reducer;
