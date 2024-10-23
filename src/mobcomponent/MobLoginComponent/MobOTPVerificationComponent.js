import {
  faChevronLeft,
  faCommentSms,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Images } from "../../assets";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./MobLoginComponent.css";
import "./MobOTPVerificationComponent.css";
import MobHeaderComponent from "../MobHeaderComponent";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import MobHeaderNavigation from "../MobHeaderNavigation";

const MobOTPVerificationComponent = () => {
  const [otp, setOtp] = useState("");
  const [otpVerificationInProgress, setOtpVerificationInProgress] =
    useState(false);
  const [resendClicked, setResendClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, phone, OTP, ref_id } = location.state || {};
  const cookies = new Cookies();

  const handleResendOtpClick = () => {
    setResendClicked(true);
    setTimeout(() => {
      setResendClicked(false);
    }, 3000);
  };

  const handleContinueBtn = async () => {
    console.log("OTP.>>--", typeof OTP.toString());
    console.log("otp.>>--", typeof otp);

    if (OTP.toString() === otp) {
      const response = await axios.post(
        "http://13.61.33.202/api/v2/verify-otp",
        { phone: phone, otp: otp, ref_id: ref_id }
      );
      if (response) {
        const token = response.data.data.token;
        console.log("token is....", token);
        // sessionStorage.setItem('authToken', token);
        cookies.set("auth_token", token);
      }

      navigate(ROUTES_NAVIGATION.ACCOUNT_REGISTER, {
        state: { email: email, phone: phone },
      });
    } else {
      alert("Invalid OTP");
    }
  };

  useEffect(() => {});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 30000);
    // console.log("refi---", OTP);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);
  return (
    <>
      <MobHeaderNavigation text={"OTP Verification"} />
      <div className="mt-5 p-3 gap-3">
        <div className="d-flex  justify-content-center ">
          <div className="mt-3">
            <div className="fs-4 d-flex mt-2 fw-bold ">
              Verify with OTP sent to
            </div>

            <div className=" mt-1">
              <div className="d-flex gap-1">
                <div className="fs-4 fw-bold">{phone}</div>
              </div>
            </div>
            <div className="mt-4 fs-6 ">Enter OTP</div>

            <div className="d-flex justify-content-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> </span>}
                inputType="tel"
                containerStyle={{ display: "unset" }}
                inputStyle={{ width: "2rem", height: "2rem" }}
                renderInput={(props) => (
                  <input {...props} className="otp-verification-input " />
                )}
              />
            </div>
          </div>
        </div>
        <div className="ms-5 mt-2 fs-14 text-danger">
          {/* {OTP.length === 6 && otp === OTP && "Invalid OTP"} */}
        </div>

        {countdown > 0 && (
          <div className="mob-otp-verification-component-countdown-container">
            <div className="fs-6 "> Reply in {countdown} sec</div>
          </div>
        )}

        {showContent ? (
          <div className="mt-2">
            <div className="d-flex justify-content-center text-danger">
              Didn't receive the OTP? Retry via:
            </div>
            <div className="mt-3 d-flex justify-content-center gap-3 ">
              <div className="mob-login-component-sms-bg-container">
                <FontAwesomeIcon
                  icon={faCommentSms}
                  className="text-white faicons-size w-100 h-100"
                />
              </div>
              <div className="mob-login-component-whatsapp-bg-container">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white faicons-size w-100 h-100"
                />
              </div>
              <div className="mob-login-component-email-bg-container">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white faicons-size w-100 h-50"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className="fixed-bottom mob-otp-verification-component-continue-btn "
        onClick={handleContinueBtn}
      >
        Continue
      </div>
    </>
  );
};

export default MobOTPVerificationComponent;
