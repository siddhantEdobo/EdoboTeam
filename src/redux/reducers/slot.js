// deliverySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  selectedTimeSlot: null,
  deliveryOption: null, // Add this to track the delivery option
};

const SlotSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTimeSlot: (state, action) => {
      state.selectedTimeSlot = action.payload;
    },
    setDeliveryOption: (state, action) => {
      state.deliveryOption = action.payload;
      if (action.payload === "Slot") {
        state.isSlotMenuOpen = true; // Open slot menu when Slot is selected
      } else {
        state.isSlotMenuOpen = false; // Close slot menu for other options
      }
    },
    clearDeliverySlot: (state) => {
      state.selectedDate = null;
      state.selectedTimeSlot = null;
      // state.deliveryOption = null;
    },
    confirmDeliverySlot: (state, action) => {
      state.isSlotMenuOpen = false;
      // Close the slot menu after confirmation
    },
  },
});

export const {
  setSelectedDate,
  setSelectedTimeSlot,
  setDeliveryOption,
  clearDeliverySlot,
  confirmDeliverySlot,
} = SlotSlice.actions;

export default SlotSlice.reducer;
