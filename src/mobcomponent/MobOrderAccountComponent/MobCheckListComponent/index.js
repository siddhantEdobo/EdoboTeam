import React from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "./MobCheckList.css";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../../routes/routes";
import MobBottomNavComponent from "../../MobBottomNavComponent";

function MobOrderChecklistComponent() {
  const navigate = useNavigate();

  const handleCheckList = () => {
    navigate(ROUTES_NAVIGATION.ORDER_RETURN);
    console.log("routes url Return", navigate(ROUTES_NAVIGATION.ORDER_RETURN));
  };

  const OrderDetails = [
    {
      id: 1,
      orderno: "#89759843",
      statuse: "SELECT ALL",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
    },
  ];

  const OrderlistOne = [
    {
      id: 1,
      orderName: "HMT Kolam Rice/HMT Kolam Tandool",
      Kg: 25,
      Bag: 1,
      price: 180,
      statuse: "OK",
    },
    {
      id: 2,
      orderName: "Daawat Basmati Rice",
      Kg: 25,
      Bag: 1,
      price: 180,
      statuse: "OK",
    },
    {
      id: 3,
      orderName: "Wada Kolam",
      Kg: 25,
      Bag: 1,
      price: 180,
      statuse: "NO",
    },
  ];

  const OrderListTwo = [
    {
      id: 1,
      orderName: "Amul Taaza Homogenised Toned Milk",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
    {
      id: 2,
      orderName: "Gowardhan Fresh Paneer",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
    {
      id: 3,
      orderName: "Amul Masti Buttermilk",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
    {
      id: 4,
      orderName: "HMT Kolam Rice/HMT Kolam Tandool",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
    {
      id: 5,
      orderName: "Daawat Basmati Rice",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
  ];

  const OrderListThree = [
    {
      id: 1,
      orderName: "Parle Gluco Biscuits - Parle-G",
      Kg: 25,
      Bag: 1,
      price: 180,
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Checklist"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {OrderDetails.map((order) => (
        <div className="d-flex mx-2 my-2" key={order.id}>
          <div className="card shadow-sm mob-order-checklist-component-card-container">
            <div className="card-body mob-order-checklist-component-card-body">
              <div className="d-flex justify-content-between">
                <div className="fw-bold">Order {order.orderno}</div>
                <div className="fw-bold text-danger">{order.statuse}</div>
              </div>
              <div className=" mt-1 ">
                <span>Schedule:</span> {order.schedule}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="container bg-secondary-subtle fw-bold ">ED #001</div>
      <div className="d-flex justify-content-end ">
        <div className="p-2 fw-bold text-danger">SELECT ALL</div>
      </div>
      {OrderlistOne.map((order, index) => (
        <div
          className="container d-flex justify-content-between align-items-center my-2"
          key={order.id}
        >
          <div className="bg-success text-white">{order.statuse}</div>
          <div className="flex-grow-1 mx-3">
            <div className="fs-13">{order.orderName}</div>
            <div>
              {order.Kg}Kg - {order.Bag}Bag
            </div>
          </div>
          <div className="text-right">Rs {order.price}</div>
        </div>
      ))}

      <div className="container bg-secondary-subtle fw-bold ">ED #002</div>
      <div className="d-flex justify-content-end ">
        <div className="p-2 fw-bold text-danger">SELECT ALL</div>
      </div>
      {OrderListTwo.map((order, index) => (
        <div
          className="container d-flex justify-content-between align-items-center my-2"
          key={order.id}
        >
          <input type="checkbox" />
          <div className="bg-success">{order.statuse}</div>
          <div className="flex-grow-1 mx-3">
            <div className="fs-13">{order.orderName}</div>
            <div>
              {order.Kg}Kg - {order.Bag}Bag
            </div>
          </div>
          <div className="text-right">Rs {order.price}</div>
        </div>
      ))}

      <div className="container bg-secondary-subtle fw-bold ">ED #003</div>
      <div className="d-flex justify-content-end ">
        <div className="p-2 fw-bold text-danger">SELECT ALL</div>
      </div>

      {OrderListThree.map((order, index) => (
        <div
          className="container d-flex justify-content-between align-items-center my-2"
          key={order.id}
        >
          <input type="checkbox" />
          <div className="bg-success">{order.statuse}</div>
          <div className="flex-grow-1 mx-3">
            <div className="fs-13">{order.orderName}</div>
            <div>
              {order.Kg}Kg - {order.Bag}Bag
            </div>
          </div>
          <div className="text-right">Rs {order.price}</div>
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <div
          className="btn btn-outline-danger rounded-5 text-center"
          onClick={() => {
            handleCheckList();
          }}
        >
          CONFIRM
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
}

export default MobOrderChecklistComponent;
