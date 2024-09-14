import React, { useEffect, useState } from "react";

import { Images } from "../../assets";
import "./MobLoginComponent.css";

import "./MobOTPVerificationComponent.css";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import axios from "axios";
const MobLoginComponent = (props) => {
  const { onSuccess = () => {} } = props;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const disableButton = () => {
    setButtonDisabled(true);
  };

  const enableButton = () => {
    setButtonDisabled(false);
  };

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerificationInProgress, setOtpVerificationInProgress] =
    useState(false);

  //Api integration
  const [loding, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("1234567891");
  const [emailId, setEmailId] = useState("ashok@gmail.com");

  const navigate = useNavigate();

  if (loding) {
    return <h5>Loading data...</h5>;
  }

  const handlePhoneNumberChange = (event) => {
    const enteredNumber = event.target.value.replace(/\D/g, "");
    setPhoneNumber(enteredNumber);
    console.log(phoneNumber.length);
    if (phoneNumber.length === 9) {
      enableButton();
    } else {
      disableButton();
    }
  };

  const handleContinueClick = async (event) => {
    setOtpVerificationInProgress(true);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v2/send-otp`,
        {
          mobile_no: phoneNumber,
        }
      );
      if (response) {
        const otp = response.data.data.otp;
        const ref_id = response.data.data.ref_id;

        console.log("before passing--", response.data.data.otp);

        navigate(ROUTES_NAVIGATION.OTP_VERIFICATION, {
          state: {
            email: emailId,
            phone: phoneNumber,
            OTP: otp,
            ref_id: ref_id,
          },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCloseModal = () => {
    setOtpVerificationInProgress(false);
  };

  const handleOTPVerificationContinue = () => {};

  return (
    <div className="">
      <div className="">
        <div className="mob-login-image-container">
          <img
            className="w-100 mobile-login-image "
            src={Images.loginScreenImg}
            alt="loginimg"
          />

          <div className="bottom-0 start-0 ms-4">
            <div className="fs-2 " style={{ fontWeight: "bold" }}>
              Hey, Guest
            </div>
            <div className="mt-1 fs-14">Submit your phone number</div>
          </div>
        </div>
        <div className="">
          <div className=" mt-2 ps-4">
            <div className="input-group" style={{ maxWidth: "330px" }}>
              <span className="input-group-text">
                <img
                  src={Images.loginPhoneNoImg}
                  alt="paynow"
                  className="mob-login-component-phone-email-img-container"
                />
              </span>
              <input
                type="text"
                maxLength={10}
                className="form-control mx-auto"
                placeholder="Enter mobile number"
                s
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center my-3 mx-3">
            <button
              className={`btn ${
                phoneNumber.length === 10 ? "btn-danger" : "btn-danger"
              } w-100 rounded-3`}
              disabled={isButtonDisabled}
              onClick={handleContinueClick}
            >
              {otpSent ? "Continue" : "Continue"}
            </button>
          </div>
          <div className="mt-3">
            <div className=" fs-13 text-danger fw-bold text-center">
              By continuing, I agree to the Terms of Use, Privacy Policy &
              cookie Policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobLoginComponent;
