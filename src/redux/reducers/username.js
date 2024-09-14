import { createSlice } from "@reduxjs/toolkit";

// userReducer.js
const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserNamee: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserNamee } = userSlice.actions;

export default userSlice.reducer;
