import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIWebLogin, APIWebOTP, APIWebUserAccount } from "../../../api/common";

// Thunk for generating OTP
export const generateOtp = createAsyncThunk(
  "auth/generateOtp",
  async (mobileNo, { rejectWithValue }) => {
    try {
      const payload = { mobile_no: mobileNo };
      const response = await APIWebLogin(payload);
      if (response.ok && response.data.success) {
        const { otp, ref_id } = response.data.data;
        return { otp, refId: ref_id, message: "OTP sent successfully" };
      } else {
        return rejectWithValue(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

// Thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ otp, refId }, { rejectWithValue }) => {
    try {
      const payload = { otp, ref_id: refId };
      const response = await APIWebOTP(payload);
      if (response.ok && response.data.success) {
        const { token, phone_number } = response.data.data;
        return { token, phoneNumber: phone_number, message: "OTP verified" };
      } else {
        return rejectWithValue(
          response.data.message || "OTP verification failed"
        );
      }
    } catch (error) {
      console.log(error, "ddddddddd");
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

// Thunk for submitting registration details
export const submitRegistration = createAsyncThunk(
  "auth/submitRegistration",
  async ({ name, email, gender, age, token }, { rejectWithValue }) => {
    try {
      const payload = { full_name: name, email, gender, age_range: age };
      const response = await APIWebUserAccount(payload, token);
      if (response.ok && response.data.success) {
        return {
          message: "Registration successful",
          userData: response.data.data,
        };
      } else {
        return rejectWithValue(response.data.message || "Registration failed");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);

// Thunk for getting the user's pincode from geolocation
export const fetchPincodeFromLocation = createAsyncThunk(
  "auth/fetchPincodeFromLocation",
  async (_, { rejectWithValue }) => {
    try {
      if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const response = await fetch(
                  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_API_KEY`
                );
                const data = await response.json();

                if (data.status === "OK" && data.results.length > 0) {
                  const result = data.results[0]; // Fetch the first result
                  const addressComponents = result.address_components;

                  // Find postal code from the address components
                  const pincodeComponent = addressComponents.find((component) =>
                    component.types.includes("postal_code")
                  );

                  if (pincodeComponent) {
                    const pincode = pincodeComponent.long_name;
                    localStorage.setItem("userPincode", pincode);
                    resolve(pincode);
                  } else {
                    reject("Pincode not found in address components.");
                  }
                } else {
                  reject("No results found in geocode response.");
                }
              } catch (error) {
                reject("Error fetching pincode: " + error.message);
              }
            },
            (error) => {
              reject("Error getting user location: " + error.message);
            }
          );
        });
      } else {
        return rejectWithValue("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      return rejectWithValue(error.message || "An unknown error occurred.");
    }
  }
);

// Thunk for getting the user's pincode from a selected place
export const fetchPincodeFromPlace = createAsyncThunk(
  "auth/fetchPincodeFromPlace",
  async (placeData, { rejectWithValue }) => {
    try {
      const { pincode, address } = placeData;

      if (pincode) {
        // Save pincode in localStorage for later use
        localStorage.setItem("userPincode", pincode);

        // Return the pincode and address to update the state
        return { pincode, address };
      } else {
        throw new Error("Pincode not found in selected place.");
      }
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    otp: "",
    refId: "",
    isLoading: false,
    successMessage: "",
    errorMessage: "",
    token: null,
    phoneNumber: "",
    userData: null,
    userPincode: null,
    address: null, // Added 'address' in initial state
  },
  reducers: {
    clearAuthState: (state) => {
      // Only clear necessary fields, keep refId and otp
      state.isLoading = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.token = null;
      state.phoneNumber = "";
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    // OTP Generation
    builder
      .addCase(generateOtp.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.successMessage = "";
      })
      .addCase(generateOtp.fulfilled, (state, action) => {
        state.otp = action.payload.otp; // Keep otp on success
        state.refId = action.payload.refId; // Keep refId on success
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(generateOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });

    // OTP Verification
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.phoneNumber = action.payload.phoneNumber;
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage =
          action.payload || "OTP verification failed. Please try again.";
      });

    // Registration
    builder
      .addCase(submitRegistration.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(submitRegistration.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(submitRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });

    // Pincode from Location
    builder
      .addCase(fetchPincodeFromLocation.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchPincodeFromLocation.fulfilled, (state, action) => {
        state.userPincode = action.payload;
        state.isLoading = false;
        state.successMessage = "Pincode fetched successfully.";
      })
      .addCase(fetchPincodeFromLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });

    // Pincode from Place
    builder
      .addCase(fetchPincodeFromPlace.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchPincodeFromPlace.fulfilled, (state, action) => {
        state.userPincode = action.payload.pincode;
        state.address = action.payload.address;
        state.isLoading = false;
        state.successMessage = "Pincode from place fetched successfully.";
      })
      .addCase(fetchPincodeFromPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage =
          action.payload || "Could not fetch pincode from place";
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
