import React, { useCallback, useState } from "react";
import "./RegistrationComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../assets";
import { notifyError } from "../../common/CustomNotification";
import { notifySuccess } from "../../common/CustomNotification/NotifySuccess";
import { APIWebUserAccount } from "../../api/common";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";

const RegistrationComponent = React.memo(({ onBack, token, mobileno }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  console.log(token);

  const handleContinue = useCallback(async () => {
    // Perform validation
    // if (!name || !email || !gender || !age) {
    //   alert("Please fill in all required fields");
    //   return;
    // }
    let payload = {};
    if (name || email) {
      payload = {
        full_name: name,
        email: email,
        gender: gender,
        age_range: age,
      };
    }
    console.log("Payload:", payload);

    try {
      const response = await APIWebUserAccount(payload, token);
      console.log(response);
      if (response && response.data.success) {
        const allData = response.data;
        console.log("allData: ", allData);
        console.log("successful", response.data.message);
        alert("successful");
        navigate(ROUTES_NAVIGATION.HOME);
      } else {
        notifyError(response.data.message);
        console.log("failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      notifyError(error);
    }
  }, [age, email, gender, name]);

  const toggleGender = (selectedGender) => {
    setGender(gender === selectedGender ? "" : selectedGender);
  };

  const toggleAge = (selectedAge) => {
    setAge(age === selectedAge ? "" : selectedAge);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="card otp-verification-component-card-container">
          <div className="mx-5 mt-2 otp-verification-btn-container flex-row">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="faicons-size text-white "
              onClick={onBack}
            />
          </div>
          <div className="d-flex justify-content-center fs-5 fw-bold text-white">
            Account Register
          </div>

          <div className="otp-verification-component-phone-email-text-container">
            <div className="d-flex gap-1 my-1">
              <img
                src={Images.loginPhoneNoImg}
                alt="email"
                className="mob-login-component-phone-email-img-container"
              />
              <div className="mt-1 fs-6 text-white">{mobileno}</div>
            </div>
            <div className="input-group mt-3" style={{ maxWidth: "320px" }}>
              <span className="input-group-text">
                <img
                  src={Images.userName}
                  alt="username"
                  className="mob-login-component-phone-email-img-container"
                />
              </span>
              <input
                type="text"
                className="form-control mx-auto"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group mt-3" style={{ maxWidth: "320px" }}>
              <span className="input-group-text">
                <img
                  src={Images.loginPhoneEmailImg}
                  alt="email"
                  className="mob-login-component-phone-email-img-container"
                />
              </span>
              <input
                type="email"
                className="form-control mx-auto"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  console.log("Email input value:", e.target.value); // Add logging for debugging
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="d-flex registration-component-gender-main-container">
            <div
              className={`registration-component-gender-container ${
                gender === "male" && "selected"
              }`}
              onClick={() => toggleGender("male")}
            >
              He
            </div>
            <div
              className={`registration-component-gender-container ${
                gender === "female" && "selected"
              }`}
              onClick={() => toggleGender("female")}
            >
              She
            </div>
            <div
              className={`registration-component-gender-container ${
                gender === "other" && "selected"
              }`}
              onClick={() => toggleGender("other")}
            >
              Other
            </div>
          </div>

          <div className="mt-2">
            <div className="fs-14 text-white fw-bold ms-5 ps-5">Age</div>
            <div className="mt-2 gap-2 registration-component-horizontal-scroll-age-container pb-3">
              {["below 18", "18-20", "21-30", "31-40", "41-60", "above 60"].map(
                (ageRange, index) => (
                  <div
                    key={index}
                    className={`registration-component-age-container ${
                      age === ageRange && "selected"
                    }`}
                    onClick={() => toggleAge(ageRange)}
                  >
                    {ageRange}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="d-flex ">
            <div
              className="mt-2 mb-5 registration-component-continue-btn"
              onClick={handleContinue}
            >
              <button className="btn" type="submit">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default RegistrationComponent;
