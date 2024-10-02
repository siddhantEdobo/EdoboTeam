// import { createAsyncThunk } from "@reduxjs/toolkit";
// import OtpGeneration from "../../api/OtpGeneration";
// import { APIWebUserAccount } from "../../../api/common";

// // Async function for generating OTP
// export const generateOtpThunk = createAsyncThunk(
//   "auth/generateOtp",
//   async (mobile_no, { rejectWithValue }) => {
//     try {
//       const result = await OtpGeneration(mobile_no);
//       if (result.success) {
//         return result;
//       } else {
//         return rejectWithValue(result.message);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Async function for registering user account
// export const registerAccount = createAsyncThunk(
//   "auth/register",
//   async ({ name, email, gender, age, token }, { rejectWithValue }) => {
//     try {
//       const payload = { full_name: name, email, gender, age_range: age };
//       const response = await APIWebUserAccount(payload, token);
//       if (response.data.success) {
//         return response.data;
//       } else {
//         return rejectWithValue(response.data.message);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
