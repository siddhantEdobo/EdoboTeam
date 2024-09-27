// types
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  currentActiveDrawerTab: {},
  drawerOpen: true,
  componentDrawerOpen: true,
  addProductDetails: {},
  currentActiveTab: "",
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    currentActiveScreen(state, action) {
      state.currentActiveDrawerTab = { ...action?.payload };
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },

    setCurrentActiveTab(state, action) {
      state.currentActiveTab = action.payload.activeTab;
    },

    resetCurrentActiveTab(state, action) {
      // state.activeTab = action.payload.activeTab;
      state.currentActiveTab = "";
    },

    
  },
});

export default menu.reducer;

export const {
  currentActiveScreen,
  activeComponent,
  openDrawer,
  openComponentDrawer,
  setCurrentActiveTab,
  resetCurrentActiveTab,
} = menu.actions;
