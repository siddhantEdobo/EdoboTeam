import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPincode } from "../../redux/reducers/home";
import {
  faBagShopping,
  faHome,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MobAddAddressLocationDeliveryComponent.css";
import axios from "axios";
import Cookies from "universal-cookie";

const MobAddAddressLocationDeliveryComponent = ({
  onConfirm = () => {},
  onClose = () => {},
  address,
  pinCode,
}) => {
  const [houseNumber, setHouseNumber] = useState("");
  const [apartmentDetails, setApartmentDetails] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNo, setReceiverPhoneNo] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  // const pincode = useSelector((state) => state.home.pincode);
  const pincode = useSelector((state) => state.home.pincode);

  const cookies = new Cookies();
  const token = cookies.get("auth_token");

  const gpsAddress = useSelector((state) => state.addData.add);
  console.log(gpsAddress);
  console.log("okk", gpsAddress?.results[0]?.address_components[5]?.long_name);
  const [errors, setErrors] = useState({
    houseNumber: "",
    apartmentDetails: "",
    receiverName: "",
    receiverPhoneNo: "",
    icon: "",
  });

  const dispatch = useDispatch();

  const icons = [
    { name: "Home", icon: faHome },
    { name: "Shopping", icon: faBagShopping },
    { name: "Family & Friends", icon: faUsers },
    { name: "Location", icon: faLocationDot },
  ];

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    setErrors((prevErrors) => ({ ...prevErrors, icon: "" }));
  };

  const validateField = (fieldName, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: value.trim() === "" ? "Fill the form" : "",
    }));
  };

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    switch (fieldName) {
      case "houseNumber":
        setHouseNumber(value);
        validateField("houseNumber", value);
        break;
      case "apartmentDetails":
        setApartmentDetails(value);
        validateField("apartmentDetails", value);
        break;
      case "receiverName":
        setReceiverName(value);
        validateField("receiverName", value);
        break;
      case "receiverPhoneNo":
        setReceiverPhoneNo(value);
        validateField("receiverPhoneNo", value);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    const newErrors = {
      houseNumber: houseNumber.trim() === "" ? "Fill the House number" : "",
      apartmentDetails:
        apartmentDetails.trim() === "" ? "Fill the apartment details" : "",
      receiverName:
        selectedIcon === "Family & Friends" && receiverName.trim() === ""
          ? "Enter receiver name"
          : "",
      receiverPhoneNo:
        selectedIcon === "Family & Friends" && receiverPhoneNo.trim() === ""
          ? "Enter phone number"
          : "",
      icon: selectedIcon === null ? "Select an icon" : "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };
  console.log("pincodes ", pinCode);
  const fullData = {
    formatted: houseNumber + gpsAddress?.results[0].formatted_address,
    state:
      apartmentDetails +
      " " +
      gpsAddress?.results[0]?.address_components[6]?.long_name +
      gpsAddress?.results[0]?.address_components[8]?.long_name,
    city:
      gpsAddress?.results[0]?.address_components[5]?.long_name +
      gpsAddress?.results[0]?.address_components[6]?.long_name,
    country: "India",
    pincode:
      // gpsAddress?.results[0]?.address_components[10]?.long_name ||
      // gpsAddress?.results[0]?.address_components[8]?.long_name ||
      // gpsAddress?.results[0]?.address_components[9]?.long_name,
      pinCode,
  };
  console.log("fullData", fullData);

  const handleConfirmContinue = async () => {
    if (isFormValid()) {
      try {
        const response = await axios.post(
          "http://13.61.33.202/api/v2/address/add",
          fullData
        );

        if (response && response.status === 200) {
          console.log("Address added successfully:", response.data);

          dispatch(setPincode(pinCode));
          console.log("Pincode set in Redux:", pinCode);

          onConfirm(pinCode);

          onClose();
        }
      } catch (error) {
        console.error(
          "Error while adding address:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="m-2">
      {/* Form Fields */}
      <div className="mt-2">
        <div className="fw-bold">HOUSE / FLAT / BLOCK no.</div>
        <input
          type="text"
          className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
          placeholder="Enter House / Flat / Block no."
          value={houseNumber}
          onChange={(e) => handleInputChange(e, "houseNumber")}
        />
        {errors.houseNumber && (
          <div className="text-danger">{errors.houseNumber}</div>
        )}
      </div>

      <div className="mt-2">
        <div className="fw-bold">APARTMENT / ROAD / AREA.</div>
        <input
          type="text"
          className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
          placeholder="Enter Apartment/road/area"
          value={apartmentDetails}
          onChange={(e) => handleInputChange(e, "apartmentDetails")}
        />
        {errors.apartmentDetails && (
          <div className="text-danger">{errors.apartmentDetails}</div>
        )}
      </div>

      <div className="mt-3">
        <div className="fw-bold">SAVE AS</div>
        <div className="mt-1 d-flex gap-2">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`mob-add-address-location-save-as-icon-label px-2 ${
                selectedIcon === icon.name
                  ? "mob-add-address-location-selected"
                  : "mob-add-address-location-small"
              }`}
              onClick={() => handleIconClick(icon.name)}
            >
              <FontAwesomeIcon icon={icon.icon} className="faicons-size" />
              {selectedIcon === icon.name ? icon.name : ""}
            </div>
          ))}
        </div>
        {errors.icon && <div className="text-danger mt-1">{errors.icon}</div>}
      </div>

      {selectedIcon === "Family & Friends" && (
        <>
          <div className="mt-2">
            <div className="fw-bold">RECEIVER'S NAME</div>
            <input
              type="text"
              className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
              placeholder="Enter Receiver's name"
              value={receiverName}
              onChange={(e) => handleInputChange(e, "receiverName")}
            />
            {errors.receiverName && (
              <div className="text-danger">{errors.receiverName}</div>
            )}
          </div>

          <div className="mt-2">
            <div className="fw-bold">RECEIVER'S PHONE NO.</div>
            <input
              type="text"
              className="border-0 border-bottom border-danger w-100 h-100 fs-14 p-2"
              placeholder="Enter Receiver's phone no."
              value={receiverPhoneNo}
              onChange={(e) => handleInputChange(e, "receiverPhoneNo")}
            />
            {errors.receiverPhoneNo && (
              <div className="text-danger">{errors.receiverPhoneNo}</div>
            )}
          </div>
        </>
      )}

      <div
        className="mt-3 mob-add-address-location-save-continue"
        onClick={handleConfirmContinue}
      >
        Save & Continue
      </div>
    </div>
  );
};

export default MobAddAddressLocationDeliveryComponent;
