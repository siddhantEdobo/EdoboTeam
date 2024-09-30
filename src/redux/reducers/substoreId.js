import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "store",
  initialState: {
    sub_store_id: null,
  },
  reducers: {
    setSubStoreId: (state, action) => {
      state.sub_store_id = action.payload;
    },
  },
});
export const { setSubStoreId } = store.actions;
export default store.reducer;
