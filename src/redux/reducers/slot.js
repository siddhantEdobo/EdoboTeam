import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryType: null,
  selectSlot: null,
  selectedDate: null, // Initially null; we will set it when needed
};

const deliverySlot = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDeliveryType: (state, action) => {
      state.deliveryType = action.payload;

      // Reset selectSlot and selectedDate if deliveryType is 0 (Pickup) or 1 (Express Delivery)
      if (action.payload === 0 || action.payload === 1) {
        state.selectSlot = null; // Clear selected slot
        state.selectedDate = null; // Clear selected date
      } else {
        // Set the selected date to today if delivery type is 2 (Slot Delivery) or 3 (Pickup)
        if (action.payload === 2 || action.payload === 3) {
          state.selectedDate = new Date().toISOString(); // Store current date
        }
      }
    },
    setSelectSlot: (state, action) => {
      // Only allow setting selectSlot if delivery type is 2 (Slot Delivery)
      if (state.deliveryType === 2) {
        state.selectSlot = action.payload;
      }
    },
    setSelectedDate: (state, action) => {
      // Only allow setting selectedDate if delivery type is 2 (Slot Delivery)
      if (state.deliveryType === 2) {
        state.selectedDate = action.payload; // Store as string
      }
    },
  },
});

export const { setDeliveryType, setSelectSlot, setSelectedDate } =
  deliverySlot.actions;

export default deliverySlot.reducer;
