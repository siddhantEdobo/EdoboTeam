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
import walletReducer from "./walletSlice";
import tipReducer from "./tipSlice";
import deliveryReducer from "./deliverySlice";
import slotReducer from "./slot";

// import addorderitemsmenu from "./addorderitemsmenu";
import amountReducer from "./totalAmountPay";
import instructionReducer from "./deliveryinstruction";
import substoreReducer from "./substoreId";
import profileReducer from "./profileData";
import paymentReducer from "./payment";
import orderReducer from "./orderid";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  home: homeReducer,
  user: userName,
  cart: addCart,
  products: productsReducer,
  coupons: couponReducer,
  addData: addDataReducer,
  // appliedWalletAmount: walletReducer,
  wallet: walletReducer,
  tip: tipReducer,
  // delivery: deliveryReducer,
  slot: slotReducer,
  delivery: deliveryReducer,
  totalAmount: amountReducer,
  instruction: instructionReducer,
  substore: substoreReducer,
  profile: profileReducer,
  payment: paymentReducer,
  order: orderReducer,
});

export default reducers;
