import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../../../redux/Slices/Cart/cartSlice";
import coin from "../../../assets/Icon/coins.png";

const TipSelector = () => {
  const dispatch = useDispatch();
  const { tip } = useSelector((store) => store.myCart);

  return (
    <div className="add-tip-container">
      <div>
        <img src={coin} width={"20px"} alt="Coin" />
        <span>Tip your delivery partner</span>
      </div>

      <div className="button-container">
        <button
          onClick={() => dispatch(setTip(Math.max(0, tip - 10)))}
          className="add-minus-button"
        >
          <span>-</span>
        </button>
        <span>₹{tip}</span>
        <button
          onClick={() => dispatch(setTip(tip + 10))}
          className="add-minus-button"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default TipSelector;
