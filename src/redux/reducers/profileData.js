import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  mobNumber: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setMobNumber: (state, action) => {
      state.mobNumber = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setUserName,
  setEmail,
  setMobNumber,
} = accountSlice.actions;

export default accountSlice.reducer;
