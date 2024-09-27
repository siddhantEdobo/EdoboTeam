import React from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "../MobOrderReturnRequest/MobOrderReturnRequest.css";
import { useNavigate } from "react-router";
import ROUTES_NAVIGATION from "../../../routes/routes";
import MobBottomNavComponent from "../../MobBottomNavComponent";

function MobOrderCancleSummary() {
  const navigate = useNavigate();

  const handleCancleOrder = () => {
    navigate(ROUTES_NAVIGATION.ORDER_CANCLE);
  };

  const OrderDetails = [
    {
      id: 1,
      orderno: "#89759843",
      statuse: "SELECT ALL",
      schedule: "26th Dec, 2019 8.00 AM to 11.00 AM",
      Orderreturn: [
        {
          id: 1,
          title: "Redeliver",
          orderName: "Wada Kolam",
          imageUrl:
            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
          Kg: 25,
          price: 1850,
        },
        {
          id: 2,
          title: "Refund",
          orderName: "Parle Parle-G",
          imageUrl:
            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
          Kg: 25,
          price: 100,
        },
        {
          id: 3,
          title: "ReDeliver",
          orderName: "Parle-G",
          imageUrl:
            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
          Kg: 20,
          price: 100,
        },
      ],
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Return Summary"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {OrderDetails.map((order) => (
        <div className="mx-2" key={order.id}>
          <div className="card shadow ">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="fw-bold">Order {order.orderno}</div>
              </div>
              <div className="mt-1">{order.schedule}</div>
              {order.Orderreturn.map((item) => (
                <div key={item} className="mt-3">
                  <div className="fs-6 fw-bold">{item.title}</div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={item.imageUrl} alt={item.orderName} width={70} />
                    <div className="mx-3">
                      <div className="fs-13 fw-semibold">{item.orderName}</div>
                      <div>{item.Kg}Kg.</div>
                      <div className="">Return Reason: </div>
                    </div>
                    <div className="flex-grow-1 text-end">
                      <div className="fw-bold">Rs {item.price}</div>
                      <div>{item.statuse}</div>
                    </div>
                  </div>
                  <div className="border"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="btn-group me-2" role="group">
          <div
            className="btn btn-outline-danger rounded-5 fs-13"
            onClick={() => handleCancleOrder()}
          >
            CONFIRM
          </div>
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
}

export default MobOrderCancleSummary;
