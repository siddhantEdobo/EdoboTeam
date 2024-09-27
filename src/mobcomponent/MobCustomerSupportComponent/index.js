import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import "./MobCustomerSupportComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleInfo,
  faCircleQuestion,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import MobBottomNavComponent from "../MobBottomNavComponent";

const MobCustomerSupportComponent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeButtons, setActiveButtons] = useState({});
  const navigate = useNavigate();

  const handleClick = (orderId, button) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [orderId]: button,
    }));
    setActiveButton(button);
  };

  const helpQueriers = [
    {
      id: 1,
      icon: faCircleQuestion,
      name: "FAQ's",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.CUSTOMER_SUPPORT_FAQ);
      },
    },
    {
      id: 2,
      icon: faCircleQuestion,
      name: "General",
    },
    {
      id: 3,
      icon: faGavel,
      name: "Legal, Terms & Conditions",
    },
    {
      id: 4,
      icon: faCircleInfo,
      name: "App Guidelines",
    },
  ];

  const ConversationThreads = [
    {
      id: 1,
      icon: faCircleInfo,
      name: "All Conversation Threads",
    },
  ];

  const previouOrdersIssue = [
    {
      id: 1,
      title: "Order: #76802345084",
      date: "25th Dec, 2019 11:45 PM",
    },
    // {
    //   id: 1,
    //   title: "Order: #76802345084",
    //   date: "75285487945",
    // },
    // {
    //   id: 1,
    //   title: "Order: #76802345084",
    //   date: "75285487945",
    // },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Customer Support"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container-fluid m-0 p-0 t">
        <div className="mob-cart-choose-change-location-container-heading">
          <div className="">Help With Queries</div>
        </div>

        <div className="mt-3 ">
          <div className="list-group list-group-flush">
            {helpQueriers.map((support, index) => (
              <li
                key={index}
                className="list-group-item mob-drawer-manu-list  d-flex justify-content-between align-items-center"
                aria-label="Close"
                onClick={support.onClick}
              >
                <div>
                  <FontAwesomeIcon icon={support.icon} className="pe-3" />
                  {support.name}
                </div>
                <div>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            ))}
          </div>
        </div>

        <div>
          <div className="mob-cart-choose-change-location-container-heading">
            <div className="">Conversation Threads </div>
          </div>
          <div className="list-group list-group-flush">
            {ConversationThreads.map((item, index) => (
              <div
                key={index}
                className="list-group-item mob-drawer-manu-list  d-flex justify-content-between align-items-center"
                aria-label="Close"
                // onClick={item?.onClick}
              >
                <div>
                  <FontAwesomeIcon icon={item.icon} className="pe-3" />
                  {item.name}
                </div>
                <div>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <div className="mob-cart-choose-change-location-container-heading">
              <div className="">Recent Order </div>
            </div>

            {previouOrdersIssue.map((order, index) => (
              <div key={order.id} className="mt-3 mx-2 p-2 card shadow-sm">
                <div>
                  <div className="fw-bold">Order #{order.id}</div>
                  <div className="pb-1">{order.date}</div>
                </div>

                <div className="mt-1 pb-1 d-flex gap-3">
                  <div
                    className={`mob-customer-support-component ${
                      activeButtons[order.id] === "call" ? "active" : ""
                    }`}
                    onClick={() => handleClick(order.id, "call")}
                  >
                    Call us
                  </div>
                  <div
                    className={`mob-customer-support-component ${
                      activeButtons[order.id] === "chat" ? "active" : ""
                    }`}
                    onClick={() => handleClick(order.id, "chat")}
                  >
                    Chat with us
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 mob-customer-support-component-border-top-bottom">
          <div className="list-group list-group-flush">
            {ConversationThreads.map((item, index) => (
              <li
                key={index}
                className="list-group-item mob-drawer-manu-list  d-flex justify-content-between align-items-center"
                aria-label="Close"
              >
                <div>
                  <FontAwesomeIcon icon={item.icon} className="pe-3" />
                  {item.name}
                </div>
                {/* <div>
                <FontAwesomeIcon icon={faChevronRight} />
              </div> */}
              </li>
            ))}
          </div>
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
};

export default MobCustomerSupportComponent;
