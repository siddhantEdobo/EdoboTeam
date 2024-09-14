import React, { useCallback, useContext, useEffect, useState } from "react";
import "./LoginComponent.css";
import "./OTPVerificationComponent.css";
import OTPVerificationComponent from "./OTPVerificationComponent";
import { Images } from "../../assets";
import { APIWebLogin } from "../../api/common";
import { CustomModalError, notifyError } from "../../common/CustomNotification";
import { ToastContainer } from "react-toastify";
import {
  CustomModal,
  CustomModalSuccess,
  notifySuccess,
} from "../../common/CustomNotification/NotifySuccess";
import OtpGeneration from "./OtpGeneration";
import { useNavigate } from "react-router-dom";

const LoginComponent = (props) => {
  const [mobile_no, setMobile] = useState("");
  // const [otp, setOTP] = useState(""); // Initialize state for OTP
  const [ref_id, setRefId] = useState(""); // Initialize state for ref_id
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [isLoadings, setIsLoading] = useState(false); // Add loading state

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("mobile and email id", mobile_no);
  console.log("showOTPModal", showOTPModal);

  const { otp, refId, isLoading, generateOtp } = OtpGeneration();
  console.log("otp,refid", otp, refId);

  // Function to handle success notification
  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1500); // Close modal after 5 seconds
  };

  // Function to handle error notification
  const handleError = (message) => {
    setErrorMessage(message);
    setShowErrorModal(true);
    setTimeout(() => {
      setShowErrorModal(false);
    }, 1500); // Close modal after 5 seconds
  };

  // Function to close success modal
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Function to close error modal
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleOnLoginClick = async (event) => {
    event.preventDefault();
    if (mobile_no) {
      setIsLoading(true);
      const result = await generateOtp(mobile_no, ref_id);
      setIsLoading(false);
      if (result.success) {
        setIsLoading(false);
        // notifySuccess(result.message);
        handleSuccess(result?.message);
        // alert(result.message);
        console.log("success", result.message);
        setShowOTPModal(true);
      } else {
        // notifyError(result.message, "error");
        handleError(result?.message);
        setIsLoading(false);
        console.log("ERROR", result.message);
      }
    }
  };

  const handleBack = () => {
    setShowOTPModal(false);
  };

  return (
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
        backgroundColor: "rgb(255 220 220)",
      }}
    >
      {!showOTPModal ? (
        <div className=" container">
          <div className="d-flex justify-content-center">
            <div className="card border-0  login-component-cantainer login-component-cantainer-first-part ">
              <div className="d-flex ">
                <div className="col-6">
                  <div className=" d-flex justify-content-center pt-5">
                    <img
                      src={Images.downloadAppNowLogin}
                      alt="paynow"
                      className="w-75 h-50 mt-3"
                    />
                  </div>

                  <div className=" d-flex justify-content-center cursor-pointer">
                    <img
                      src={Images.iOSAndroidDownloadImg}
                      alt="paynow"
                      className="w-75 h-50 mt-3"
                    />
                  </div>

                  <div className=" d-flex justify-content-center ">
                    <img
                      src={Images.riderImgLogin}
                      alt="paynow"
                      className="w-100 h-100 mt-3"
                    />
                  </div>
                </div>
                <div className="col-6 ">
                  <form>
                    <div className=" d-flex justify-content-center pt-5">
                      <img
                        src={Images.edoboLoginLogo}
                        alt="paynow"
                        className="w-75 h-50 mt-3"
                      />
                    </div>
                    <div className=" d-flex justify-content-center pt-3">
                      <img
                        src={Images.inMinutesHomeDeliveryLoginImf}
                        alt="paynow"
                        className="w-75 h-50 mt-3"
                      />
                    </div>

                    <div className=" mt-5 me-3">
                      <div
                        className="input-group mt-1"
                        style={{ Width: "400px", marginRight: "30px" }}
                      >
                        <span className="input-group-text">
                          <img
                            src={Images.loginPhoneNoImg}
                            alt="phone"
                            className="mob-login-component-phone-email-img-container"
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control mx-auto"
                          placeholder="Enter mobile no"
                          maxLength={10}
                          value={mobile_no}
                          onChange={(event) => {
                            const inputValue = event.target.value.replace(
                              /\D/g,
                              ""
                            ); // Remove non-numeric characters
                            setMobile(inputValue);
                          }}
                          pattern="[0-9]*" // Only allow numeric characters
                          required // Make the field required
                        />
                      </div>
                    </div>
                    <div className=" mt-2 login-component-continue-btn d-grid">
                      <button
                        className="btn"
                        onClick={(event) => {
                          handleOnLoginClick(event);
                        }}
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                    <ToastContainer />

                    <div className="d-flex mt-3 ">
                      <div class="form-check">
                        <label class="form-check-label text-white cursor-pointer">
                          By continuing, I agree to the Terms of Use, Privacy
                          Policy & Cookie Policy.
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <OTPVerificationComponent
            onBack={handleBack}
            otp={otp}
            refId={refId}
            mobile_no={mobile_no}
          />
          <ToastContainer />
        </div>
      )}

      <CustomModalSuccess
        show={showSuccessModal}
        handleClose={handleCloseSuccessModal}
        message={successMessage}
      />

      <CustomModalError
        show={showErrorModal}
        handleClose={handleCloseErrorModal}
        message={errorMessage}
      />

      {isLoadings && (
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
};

export default LoginComponent;
