import React, { useState } from "react";
import MobHeaderComponent from "../../MobHeaderComponent";
import "./MobOrderDetailsSummary.css";
import star from "../../../assets/Icon/star.png";
import ROUTES_NAVIGATION from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import EdoboCreditoLogo from "../../../assets/Icon/EdoboCreditoLogo.png";
import emoji from "../../../assets/Icon/emoji.png";
import refound from "../../../assets/Icon/refound.png";

function MobOrderDetailsSummary() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleCardClick = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };

  const navigate = useNavigate();

  const HandleCategory = () => {
    navigate(ROUTES_NAVIGATION.MOB_CATEGORY);
  };

  const OrderDetails = {
    Delivery: [
      {
        id: 1,
        title: "Delivery",
        datetime: "Sun 08 Dec 2019 - 08:00 AM - 10:00 AM",
        status: "Complete",
        Option1: "COMPLETETED",
        Option2: "DOWNLOAD INVOICE",
      },
    ],
    Address: [
      {
        id: 1,
        Name: "Harshil Doshi",
        address1: "NEXT TO SANATAN DHARAM HIGH SCHOOL, Room No.310",
        address2: "M H Colony, Chembur Camp, Chembur, Mumbai - 400 074 ",
        address3: "Mobile: 9820123456",
      },
    ],
    reviewData: [
      {
        id: 1,
        productName: "HMT Kolam Rice/Tandool",
        imageUrl:
          "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
        kg: 5,
        item: "173 * 2",
        status: "Redeliver",
        stars: 5,
        price: 347,
      },
      {
        id: 2,
        productName: "HMT Kolam Rice/Tandool",
        imageUrl:
          "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
        kg: 5,
        item: "173 * 2",
        status: "returned",
        stars: 3,
        price: 347,
      },
      {
        id: 3,
        productName: "HMT Kolam Rice/Tandool",
        imageUrl:
          "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
        kg: 5,
        item: "173 * 2",
        status: "",
        stars: 3,
        price: 347,
      },
      {
        id: 4,
        productName: "HMT Kolam Rice/Tandool",
        imageUrl:
          "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
        kg: 5,
        item: "173 * 2",
        status: "",
        stars: 3,
        price: 347,
      },
    ],

    PaymentDetails: [
      {
        id: 1,
        OrderNumber: "EDO-12345678-123456",
        InvoiceNumber: "EDI-02345678-523456",
        SubscriptionInvoiceNo: "EDO-12345678-123456",
        SubscriptionAmount: "10,000",
        PaymentMode: "Cash on Delivery",
        OrderItems: "5 items",
        Cartamount: "2,974",
        Deliveryfee: "Fees",
        logo: "20",
        Amounttopay: "2,974",
        Walletbalanceavailable: "160",
        Amounttobereceived: "2814",
      },
    ],
    OrderCanelled: [
      {
        id: 1,
        title: "Invoice amount",
        amount: "2,000",
        description:
          "Refund of 2,000 initiated to original source and can take upto 7 - 10 days to reflect in your account.",
        order: "Order Cancellation",
        orderamount: "-2,000",
        paid: 0,
        paidtitle: "Final paid amount",
        saving: "100 (1.10%)",
        savingtitle: "Savings missed",
      },
    ],
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Order Summary "}
        isCartShow={false}
        isEdoboLogo={true}
      />

      <div className="container container-top">
        {OrderDetails.Delivery && (
          <div className="border-bottom">
            {OrderDetails.Delivery.map((data) => (
              <div key={data.id}>
                <div className="fs-13 text-success text-capitalize fw-bold text-end">
                  {data.Option1}
                </div>
                <div>
                  <div className="fs-13 fw-semibold">{data.title}</div>
                  <div>{data.datetime}</div>
                  <div>Order Status: {data.status}</div>
                </div>
                <div className="fs-13 text-danger text-capitalize text-end fw-bold ">
                  {data.Option2}
                </div>
              </div>
            ))}
          </div>
        )}

        {OrderDetails.Address && (
          <div className="my-3 border-bottom">
            {OrderDetails.Address.map((data) => (
              <div key={data.id}>
                <div className="fs-13 fw-semibold mb-1">Address</div>
                <div className="fs-13 fw-bold ">{data.Name}</div>
                <div className="fs-10 mt-1">
                  {data.address1} {data.address2}
                </div>
                <div className="mb-2">{data.address3}</div>
              </div>
            ))}
          </div>
        )}

        {OrderDetails.reviewData && (
          <div className="my-3 border-bottom">
            <div className="d-flex justify-content-between ">
              <div className="fs-13 fw-semibold"> Products </div>
              <div className="fs-13 fw-semibold"> Amount </div>
            </div>
            {OrderDetails.reviewData.map((data) => (
              <div key={data.id} className="row my-2">
                <div className="col-2 p-0">
                  <img src={data.imageUrl} alt={data.productName} width={45} />
                </div>
                <div className="col-5 p-0">
                  <div className="fs-10 fw-bold ">{data.productName}</div>
                  <div className="fw-bold">{data.kg} Kg</div>
                  <div className="fw-bold">₹ {data.item}</div>
                  <div className="text-warning text-capitalize">
                    {data.status}
                  </div>
                </div>
                <div className="col-3 fs-10 p-0 mt-2">
                  Rate this product
                  <div>
                    {[...Array(data.stars)].map((_, index) => (
                      <img key={index} src={star} alt="star" width={10} />
                    ))}
                  </div>
                </div>
                <div className="col-2 fs-13 mt-2 fw-bold pe-2">
                  ₹{data.price}
                </div>
              </div>
            ))}
          </div>
        )}

        {OrderDetails.PaymentDetails && (
          <div className="my-3 border-bottom">
            <div className="fs-13 fw-semibold">Payment Details</div>
            {OrderDetails.PaymentDetails.map((data) => (
              <div key={data.id}>
                <div className="d-flex justify-content-between my-1">
                  <p>Order Number</p>
                  <p>{data.InvoiceNumber}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Invoice Number</p>
                  <p>{data.InvoiceNumber}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Subscription Invoice No.</p>
                  <p className="text-warning ">{data.SubscriptionInvoiceNo}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Subscription Amount</p>
                  <p>₹ {data.SubscriptionAmount}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Payment Mode</p>
                  <p>{data.PaymentMode}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Order Items</p>
                  <p>{data.OrderItems}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <p>Cart amount</p>
                  <p>₹ {data.Cartamount}</p>
                </div>
                <div className="d-flex justify-content-between my-1">
                  <img src={EdoboCreditoLogo} alt="logo" width={70} />
                  <p>₹ {data.logo}</p>
                </div>
                <div className="d-flex justify-content-between my-1 border-bottom">
                  <p>Delivery fee</p>
                  <p className="text-success mb-2 text-capitalize ">
                    ₹ {data.Deliveryfee}
                  </p>
                </div>
                <div className="d-flex justify-content-between my-3 border-bottom ">
                  <p>Amount to pay</p>
                  <p className="mb-2">₹ {data.Amounttopay}</p>
                </div>
                <div className="d-flex justify-content-between my-3 border-bottom ">
                  <p>Wallet balance available</p>
                  <p className="mb-2">₹ {data.Walletbalanceavailable}</p>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <p>Amount to be received</p>
                  <p>₹ {data.Amounttobereceived}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {OrderDetails.OrderCanelled &&
          OrderDetails.OrderCanelled.map((order) => (
            <div className="d-flex mx-2" key={order.id}>
              <div className="card">
                <div className="card-body p-2">
                  <div key={order.id}>
                    <div className="d-flex justify-content-between">
                      <div className="fw-bold fs-13">{order.title}</div>
                      <div className="fw-bold fs-13">Rs {order.amount}</div>
                    </div>
                    <div className="my-1 fs-13">
                      <img src={refound} alt="refound logo" width={20} />
                      {order.description}
                    </div>
                    <div className="d-flex justify-content-between mt-2 border-top">
                      <div className="fw-bold fs-13">{order.order}</div>
                      <div className="fw-bold fs-13">₹ {order.orderamount}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-2 border-top">
                      <div className="fw-bold fs-13">{order.paidtitle}</div>
                      <div className="fw-bold fs-13">₹ {order.paid}</div>
                    </div>
                    <div className="d-flex justify-content-between mt-2 border-top">
                      <div className="fw-bold fs-13 text-success my-2">
                        {order.savingtitle}
                        <img
                          src={emoji}
                          alt="emoji"
                          width={20}
                          className="ms-1"
                        />
                      </div>
                      <div className="fw-bold fs-13 text-success my-2 ">
                        ₹ {order.saving}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="text-center my-3 border-bottom border-top d-flex justify-content-center align-items-center">
          <div className="my-2 text-bg-success rounded-5 p-2">
            {" "}
            You Save ₹100{" "}
          </div>
        </div>

        <div className="d-flex justify-content-evenly ">
          <div className="mob-order-detail-commponent-summary-btn">REORDER</div>
          <div
            className="mob-order-detail-commponent-summary-btn"
            onClick={HandleCategory}
          >
            SHOPE FROM ORDER
          </div>
        </div>
      </div>
    </>
  );
}

export default MobOrderDetailsSummary;
