import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  AboutUS,
  PrivacyPolicy,
  TermsConditions,
} from "../../constant/AboutUS";

const MobAboutUsComponent = () => {
  const [selectedCard, setSelectedCard] = useState("about");

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"About Us"}
        isCartShow={false}
        isBottomTab={false}
        isEdoboLogo={true}
      />
      {selectedCard === "about" &&
        AboutUS.map((data, index) => (
          <div className="container-fluid m-0 p-0" key={data?.id}>
            <div className="fs-6 fw-bold text-danger p-3">{data?.title}</div>
            <div className="container ">
              <p className="mt-2">{data?.heading1}</p>
              <p className="mt-2">{data?.heading2}</p>
              <p className="mt-2">{data?.heading3}</p>
              <p className="mt-2">{data?.heading4}</p>
              <p className="mt-2">{data?.heading5}</p>
            </div>
          </div>
        ))}
      {selectedCard === "privacy" &&
        PrivacyPolicy.map((data, index) => (
          <div className="container-fluid m-0 p-0" key={data?.id}>
            <div className="fs-6 fw-bold text-danger p-3">{data?.title}</div>
            <div className="container ">
              <p className="mt-2">{data?.heading1}</p>
              <p className="mt-2">{data?.heading2}</p>
              <p className="mt-2">{data?.heading3}</p>
              <p className="mt-2">{data?.heading4}</p>
              <p className="mt-2">{data?.heading5}</p>
            </div>
          </div>
        ))}
      {selectedCard === "terms" &&
        TermsConditions.map((data, index) => (
          <div className="container-fluid m-0 p-0" key={data?.id}>
            <div className="fs-6 fw-bold text-danger p-3">{data?.title}</div>
            <div className="container ">
              <p className="mt-2">{data?.heading1}</p>
              <p className="mt-2">{data?.heading2}</p>
              <p className="mt-2">{data?.heading3}</p>
              <p className="mt-2">{data?.heading4}</p>
              {/* <p className="mt-2">{data?.heading5}</p> */}
            </div>
          </div>
        ))}

      <div className="card position-fixed bottom-0 w-100 shadow-lg">
        <div
          className={`d-flex justify-content-between border-bottom cursor-pointer ${
            selectedCard === "privacy" ? "selected" : ""
          }`}
          onClick={() =>
            handleCardClick(selectedCard === "privacy" ? "about" : "privacy")
          }
        >
          <div className="p-3 fw-bold fs-13">
            {selectedCard === "privacy" ? "About Us" : "Privacy Policy"}
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faChevronRight} className="faicon-size" />
          </div>
        </div>

        <div
          className={`d-flex justify-content-between border-bottom cursor-pointer ${
            selectedCard === "terms" ? "selected" : ""
          }`}
          onClick={() =>
            handleCardClick(selectedCard === "terms" ? "about" : "terms")
          }
        >
          <div className="p-3 fw-bold fs-13">
            {selectedCard === "terms" ? "About Us" : "Terms & Conditions"}
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faChevronRight} className="faicon-size" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobAboutUsComponent;
