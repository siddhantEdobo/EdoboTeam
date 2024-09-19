// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import homeReducer from "./home";
import userName from "./username";
import addCart from "./addCart";
// import productData from "./products";
import productsReducer from "./products";
import couponReducer from "./coupon";
import addDataReducer from "./gpsAdd";
// import addorderitemsmenu from "./addorderitemsmenu";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  home: homeReducer,
  user: userName,
  cart: addCart,
  products: productsReducer,
  coupons: couponReducer,
  addData: addDataReducer,
});

export default reducers;
