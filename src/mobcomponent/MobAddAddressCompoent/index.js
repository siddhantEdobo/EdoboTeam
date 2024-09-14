import {
  faBagShopping,
  faHome,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./MobAddAddressComponent.css";

const MobAddAddressComponent = () => {
  const [houseNumber, setHouseNumber] = useState("");
  const [apartmentDetails, setApartmentDetails] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNo, setReceiverPhoneNo] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    { name: "Home", icon: faHome },
    { name: "Shopping", icon: faBagShopping },
    { name: "Family & Friends", icon: faUsers },
    { name: "Location", icon: faLocationDot },
  ];

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className="">
      <div className="mt-2">
        <div className="fw-bold">HOUSE / FLAT / BLOCK no.</div>

        <div className="">
          <input
            type="text"
            className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
            placeholder="Enter House / Flat /Block no."
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2">
        <div className="fw-bold">APARTMENT / ROAD / AREA.</div>

        <div className="">
          <input
            type="text"
            className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
            placeholder="Enter Apartment/road/area"
            value={apartmentDetails}
            onChange={(e) => setApartmentDetails(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="fw-bold">SAVE AS</div>

        <div className=" mt-1 d-flex gap-2">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`mob-add-address-save-as-icon-label ${
                selectedIcon === icon.name ? "mob-add-address-selected" : ""
              }`}
              onClick={() => handleIconClick(icon.name)}
            >
              <FontAwesomeIcon icon={icon.icon} className="faicons-size" />
              {selectedIcon === icon.name ? icon.name : ""}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <div className="fw-bold">RECEIVER'S NAME</div>

        <div className="">
          <input
            type="text"
            className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
            placeholder="Enter Receiver's name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2">
        <div className="fw-bold">RECEIVER'S PHONE NO.</div>

        <div className="">
          <input
            type="text"
            className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
            placeholder="Enter Receiver's phone no."
            value={receiverPhoneNo}
            onChange={(e) => setReceiverPhoneNo(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5 mob-add-address-save-continue">Save & Continue</div>
    </div>
  );
};

export default MobAddAddressComponent;
