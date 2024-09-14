// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import homeReducer from "./home";
import userName from "./username";
import addCart from "./addCart";
// import addorderitemsmenu from "./addorderitemsmenu";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  home: homeReducer,
  user: userName,
  cart: addCart
});

export default reducers;
