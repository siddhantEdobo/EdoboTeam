import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTip: 0, // Initially no tip selected
};

const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    selectTip: (state, action) => {
      state.selectedTip = action.payload;
    },
    removeTip: (state) => {
      state.selectedTip = 0;
    },
  },
});

export const { selectTip, removeTip } = tipSlice.actions;
export default tipSlice.reducer;
