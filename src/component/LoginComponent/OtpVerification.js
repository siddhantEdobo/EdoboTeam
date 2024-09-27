import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./OtpVerification.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [resendClicked, setResendClicked] = useState(false);

  const handleVerify = () => {
    console.log("OTP is ", otp);
  };

  const handleResendOtpClick = () => {
    setResendClicked(true);
    setTimeout(() => {
      setResendClicked(false);
    }, 3000);
  };

  return (
    <div className="otp-App">
      <div className="mt-4">
        <h2>OTP verification{""}</h2>

        <div className="m-2">
          <h6>We have sent a verification code to</h6>
          <h6>+91 9773134354</h6>
        </div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span> </span>}
          inputType="tel"
          containerStyle={{ display: "unset" }}
          inputStyle={{ width: "3rem", height: "3.5rem" }}
          renderInput={(props) => <input {...props} className="otp-input" />}
        />
        <div className="otp-btn-container">
          <button onClick={handleVerify}>Verify OTP</button>
        </div>

        <div className="m-2">
          <h6
            style={{
              color: resendClicked ? "grey" : "green",
              cursor: "pointer",
            }}
            onClick={handleResendOtpClick}
          >
            Resend Code
          </h6>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
