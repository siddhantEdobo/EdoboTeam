import React, { useCallback, useEffect, useState } from "react";
import "./OTPVerificationComponent.css";
import OtpInput from "react-otp-input";
import { Images } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCommentSms,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import RegistrationComponent from "./RegistrationComponent";
import { APIWebLogin, APIWebOTP, APIgetWebOTP } from "../../api/common";
import { ToastContainer } from "react-toastify";
import { notifyError } from "../../common/CustomNotification";
import { notifySuccess } from "../../common/CustomNotification/NotifySuccess";
import OtpGeneration from "./OtpGeneration";

const OTPVerificationComponent = React.memo(
  ({ onBack, mobile_no, refId, otp }) => {
    const [otps, setOTP] = useState("");
    const [generatedOTP, setgeneratedOTP] = useState(otp);
    const [generatedRefID, setgeneratedRefID] = useState(refId);
    const [showContent, setShowContent] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [otpComplete, setOtpComplete] = useState(false);
    const [token, setToken] = useState("");
    const [mobileno, setMobile] = useState("");
    // const [isLoading, setIsLoading] = useState(false); // Add loading state
    // const [refid, setRefId] = useState("");
    const [ref_id, setRefId] = useState("");
    const { _otp, _refId, isLoading, generateOtp } = OtpGeneration();

    const handleChange = (code) => {
      setOTP(code);
      if (code.length === 6) {
        setOtpComplete(true);
        verifyOTP(code);
      } else {
        setOtpComplete(false);
      }
    };

    const verifyOTP = (otp) => {
      if (otp === otps) {
        setShowOTPModal(true);
        console.log("OTP verification successful");
        alert("OTP verification successful");
      } else {
        console.log("OTP verification failed: Incorrect OTP");
        // setTimeout(() => {
        //   notifyError("Incorrect OTP");
        // }, 1000);
        //  notifyError("Incorrect OTP");
      }
    };

    const handleOTP = useCallback(async () => {
      let payload = {};

      if (generatedOTP && generatedRefID) {
        // Case 1: Use OTP and refid from props
        payload = {
          otp: generatedOTP,
          ref_id: generatedRefID,
        };
      }

      console.log("Payload:", payload);
      try {
        const response = await APIWebOTP(payload);
        if (response && response.data.success) {
          const allData = response.data;
          console.log("allData: ", allData);
          if (allData.data) {
            const { token, phone_number } = allData.data;
            setToken(token);
            setMobile(phone_number);
          }
          console.log(response);
          setShowOTPModal(true);
          console.log("OTP verification successful", response.data.message);
          alert("OTP verification successful");
          notifySuccess("OTP verification successful");
        } else {
          notifyError(response.data.message);
          console.log("OTP verification failed:", response.data.message);
        }

        if (response.data.ref_id) {
          // Update refid state with new ref_id if available
          setRefId(response.data.ref_id);
          console.log("Updated refID:", response.data.ref_id);
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        notifyError(error);
      }
      // } else {
      //   notifyError("OTP verification failed");
      //   console.log("OTP is required");
      // }
    }, [generatedOTP, generatedRefID]);

    const handleResendOtp = async () => {
      if (mobile_no) {
        const result = await generateOtp(mobile_no); // Pass ref_id here
        console.log(result);
        if (result.success) {
          setgeneratedOTP(result.otp);
          setgeneratedRefID(result.refId);
          notifySuccess(result.message);
          //alert(result.message);
          console.log("success", result.message);
        } else {
          notifyError(result.message);
          console.log("ERROR", result.message);
        }
      }
    };

    const handleBack = () => {
      setShowOTPModal(false);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 30000);

      const countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(countdownTimer);
      };
    }, []);

    return (
      <div>
        <>
          <div>
            {!showOTPModal ? (
              <div className="d-flex justify-content-center mt-5">
                <div className="card otp-verification-component-card-container">
                  <div className="mx-5 mt-4 otp-verification-btn-container flex-row">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="faicons-size text-white "
                      onClick={onBack}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-5  fs-5 fw-bold text-white">
                    We have sent a verification code to
                  </div>

                  <div className="otp-verification-component-phone-email-text-container ">
                    <div className="d-flex gap-1 my-1">
                      <img
                        src={Images.loginPhoneNoImg}
                        alt="email"
                        className="mob-login-component-phone-email-img-container"
                      />
                      <div className="ms-2 fs-5 text-white"> {mobile_no}</div>
                    </div>
                  </div>
                  <div className="justify-content-center mt-3 flex-row">
                    <div className="">
                      <div className="fs-6 text-white">Enter OTP</div>
                      <OtpInput
                        value={otps}
                        numInputs={6}
                        onChange={handleChange}
                        separator={<span style={{ width: "8px" }}></span>}
                        inputType="tel"
                        isInputNum={true}
                        shouldAutoFocus={true}
                        containerStyle={{ display: "unset" }}
                        inputStyle={{ width: "3rem", height: "3.5rem" }}
                        renderInput={(props) => (
                          <input
                            {...props}
                            className="otp-verification-input "
                          />
                        )}
                      />
                    </div>
                  </div>

                  {countdown > 0 && (
                    <div className=" mt-2 mob-otp-verification-component-countdown-container">
                      <div className="fs-6 text-white me-2">
                        {" "}
                        OTP Send Successfully{" "}
                      </div>
                      <div className="fs-6 text-white ">{countdown} Sec</div>
                    </div>
                  )}

                  {showContent ? (
                    <div className="mt-2">
                      <div className="d-flex fs-6 mt-2 justify-content-center text-white">
                        Didn't receive the OTP ? Retry via:
                      </div>
                      <div className="mt-3 d-flex justify-content-center gap-3">
                        <div
                          className="mob-login-component-sms-bg-container"
                          onClick={() => handleResendOtp()}
                        >
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
                        {/* <div className="mob-login-component-email-bg-container">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-white faicons-size w-100 h-50"
                          />
                        </div> */}
                      </div>
                    </div>
                  ) : null}

                  <div className="d-flex justify-content-center">
                    <div
                      className="my-5 otp-verification-component-continue-btn"
                      onClick={() => handleOTP()}
                    >
                      Continue
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <ToastContainer />
                <RegistrationComponent
                  onBack={handleBack}
                  token={token}
                  mobileno={mobile_no}
                />
              </div>
            )}
          </div>
        </>

        {isLoading && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              inset: "0px",
              width: "100%",
              height: "100%",
              zIndex: "9999",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="loader-container">
              <div
                class="spinner-border text-dark"
                style={{ width: "4rem", height: "4rem" }}
                role="status"
              ></div>
              <div className="loader">Please Wait....</div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default OTPVerificationComponent;
