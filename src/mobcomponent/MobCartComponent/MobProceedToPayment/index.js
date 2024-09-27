import React, { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "./MobProceedToPayment.css";

const MobProceedToPayment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod]=useState(null);

const paymentMethods = [{ id: 1, name: "COD (Cash on Delivery)" },
{id:2, name:"PayU"},
{id:3, name:"Paytm"},
];

const handlePaymentMethodSelect=(methodId)=>{
setSelectedPaymentMethod(methodId);
}
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Payment To Pay"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container-fluid m-0 p-0">
        <div className="bg-body-secondary p-2">
          <div className=" fw-bold">Preferred Payment</div>
        </div>
        <div className="p-2 mt-2 ">
          <div className="card mob-proceed-payment-preferred-payment ">
            <div className="d-flex gap-3">
              <input className="form-check-input" type="radio" />
              <div>COD (Cash on Delivery)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobProceedToPayment;
