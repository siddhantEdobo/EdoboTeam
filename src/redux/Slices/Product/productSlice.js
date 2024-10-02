import { createSlice } from "@reduxjs/toolkit";
import productData from "./dummyProduct";

// Initial state with imported products and filters
const initialState = {
  products: productData, // Use imported product data
  filters: {
    category: "",
    priceRange: "",
    brand: "",
    discount: "",
    rating: 0,
    isVeg: true,
    searchTerm: "",
    sortBy: "default", // Default sorting
    productType: "All", // New filter for product type (Veg, Non-Veg, etc.)
  },
};

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Action for filtering by category
    filterByCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    // Action for filtering by price range
    filterByPrice: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    // Action for filtering by brand
    filterByBrand: (state, action) => {
      state.filters.brand = action.payload;
    },
    // Action for filtering by discount
    filterByDiscount: (state, action) => {
      state.filters.discount = action.payload;
    },
    // Action for filtering by rating
    filterByRating: (state, action) => {
      state.filters.rating = action.payload;
    },
    // Action for filtering by veg or non-veg
    filterByVeg: (state, action) => {
      state.filters.isVeg = action.payload;
    },
    // Action for setting product type (Veg, Non-Veg, Vegan, Eggitarian)
    setProductType: (state, action) => {
      state.filters.productType = action.payload;
    },
    // Action for setting search term
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
    },
    // Action for sorting products
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    // Reset all filters
    resetFilters: (state) => {
      state.filters = {
        category: "",
        priceRange: "",
        brand: "",
        discount: "",
        rating: 0,
        isVeg: true,
        searchTerm: "",
        sortBy: "default", // Reset to default sorting
        productType: "All", // Reset product type
      };
    },
  },
});

// Export actions and reducer
export const {
  filterByCategory,
  filterByPrice,
  filterByBrand,
  filterByDiscount,
  filterByRating,
  filterByVeg,
  setProductType, // Export setProductType for filtering product types
  setSearchTerm,
  setSortBy,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
