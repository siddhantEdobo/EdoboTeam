import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appliedWalletAmount: 0,
  availableBalance: 260, // Example balance, you can fetch this from an API if needed
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    applyWalletAmount: (state, action) => {
      state.appliedWalletAmount = action.payload;
    },
    removeWalletAmount: (state) => {
      state.appliedWalletAmount = 0;
    },
  },
});

export const { applyWalletAmount, removeWalletAmount } = walletSlice.actions;
export default walletSlice.reducer;
