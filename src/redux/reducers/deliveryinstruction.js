// instructionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const instructionSlice = createSlice({
  name: 'instruction',
  initialState: {
    userInstruction: []
  },
  reducers: {
    addInstruction: (state, action) => {
      if (!state.userInstruction.includes(action.payload)) {
        state.userInstruction.push(action.payload);
      }
    },
    removeInstruction: (state, action) => {
      state.userInstruction = state.userInstruction.filter(
        (item) => item.title !== action.payload.title
      );
    }
  }
});

export const { addInstruction, removeInstruction } = instructionSlice.actions;

export default instructionSlice.reducer;
