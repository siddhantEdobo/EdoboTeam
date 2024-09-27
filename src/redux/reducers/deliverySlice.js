import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCards: [], // Make sure this is initialized as an empty array
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    toggleCardSelection: (state, action) => {
      const index = action.payload;
      const isSelected = state.selectedCards.includes(index); // Always check if `selectedCards` is an array
      if (isSelected) {
        state.selectedCards = state.selectedCards.filter((i) => i !== index);
      } else {
        state.selectedCards.push(index);
      }
    },
  },
});

export const { toggleCardSelection } = deliverySlice.actions;
export default deliverySlice.reducer;
