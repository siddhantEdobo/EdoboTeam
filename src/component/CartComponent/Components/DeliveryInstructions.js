import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryInstructions } from "../../../redux/Slices/Cart/cartSlice";

const DeliveryInstructions = ({ instructions }) => {
  const dispatch = useDispatch();
  const { deliveryInstructions } = useSelector((store) => store.myCart);

  const handleAddInstruction = (data) => {
    dispatch(setDeliveryInstructions(data));
  };

  return (
    <div className="delivery-instruction-container">
      <span className="items-count-text">Select delivery Instructions</span>
      <div className="delivery-instruction">
        {instructions.map((items) => (
          <div
            className={`des-instruction-card ${
              deliveryInstructions.includes(items) ? "selected" : ""
            }`}
            onClick={() => handleAddInstruction(items)}
            key={items.title}
          >
            <img src={items.instructionIcons} alt={items.title} />
            <h3>{items.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryInstructions;
