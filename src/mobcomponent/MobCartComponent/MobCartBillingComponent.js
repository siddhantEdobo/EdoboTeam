import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTip } from "../../redux/reducers/tipSlice";
import { setTotalAmount } from "../../redux/reducers/totalAmountPay";
import './mobCartView.css'

const MobCartBillingComponent = ({ coupon, walletAmount }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.totalAmount.amount);

  const cartItems = useSelector((state) => state.cart.items);
  const selectedTip = useSelector((state) => state.tip.selectedTip);
  console.log("tip is", selectedTip);
  console.log("coupon amount", coupon);

  console.log(cartItems);
  const totalItemPrice = cartItems.reduce(
    (acc, item) => acc + item.compare_price * item.quantity, // Assuming `item.price` and `item.quantity` are part of each cart item
    0
  );
  console.log("Total amount", totalItemPrice);

  const savings = cartItems.reduce(
    (acc, item) => acc + (item.price - item.compare_price) * item.quantity, // Assuming `item.discount` is the saved amount for each product

    0
  );
  console.log("saving amount", savings);

  const deliveryFee = 30; // Example delivery fee, you can modify this based on your logic
  // const walletAmount = 260; // Example wallet usage, modify as needed
  const tipAmount = selectedTip; // Example tip, modify as needed
  const couponAmount = typeof coupon === "number" ? coupon : 0;
  const amountToPay =
    totalItemPrice + deliveryFee + tipAmount- couponAmount;
  dispatch(setTotalAmount(amountToPay));
  // totalItemPrice + deliveryFee + tipAmount - savings;

  return (
    <div className="mt-3">
      <div className="card mob-cart-component-billing-heading-style">
        You're saving ₹{savings} on this order
      </div>
      <div className="fw-bold mt-3">Bill Details</div>

      <div className="mt-2 d-flex justify-content-between align-items-center mob-cart-component-billing-border">
        <div className="d-flex">
          <div className="fs-10 fw-bold">Item total</div>

          <div className="mob-cart-component-save-bill-style">
            Saved {savings}
          </div>
        </div>
        <div className=" d-flex">
          <div className="text-decoration-line-through pe-2">₹{savings}</div>
          <div className="fw-bold">₹{totalItemPrice}</div>
        </div>
      </div>

      <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
        <div>Delivery partner fee for 3km</div>
        <div className="fw-bold">₹{deliveryFee}</div>
      </div>
      {coupon > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>
            <span className="ps-1">Coupon discount</span>
          </div>
          <div className="fw-bold">₹{couponAmount}</div>
        </div>
      )}
      {walletAmount > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>
            <FontAwesomeIcon icon={faWallet} className="faicons-size" />
            <span className="ps-1">Wallet</span>
          </div>
          <div className="fw-bold">₹{walletAmount}</div>
        </div>
      )}

      {/* <div className="mt-2 d-flex  justify-content-between mob-cart-component-billing-border">
          <div className="">Loyality Points</div>
          <div className="fw-bold">-₹50</div>
        </div> */}
      {tipAmount > 0 && (
        <div className="mt-2 d-flex justify-content-between mob-cart-component-billing-border">
          <div>Delivery Partner Tip</div>
          <div className="fw-bold">₹{selectedTip}</div>
        </div>
      )}

      <div className="mt-2 d-flex justify-content-between">
        <div className="fw-bold">You Pay</div>
        <div className="fw-bold">₹{amountToPay}</div>
      </div>
    </div>
  );
};

export default MobCartBillingComponent;
