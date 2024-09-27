// redux/reducers/products.js
const initialState = {
  productData: null,
};

export const SET_PRODUCT_DATA = "SET_PRODUCT_DATA";

export const setProductData = (data) => ({
  type: SET_PRODUCT_DATA,
  payload: data,
});

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return { ...state, productData: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
