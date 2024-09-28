import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import MobHeaderComponent from "../MobHeaderNavigation";
// Adjust the path based on your file structure

import { Images } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTES_NAVIGATION from "../../routes/routes";
import { setUserNamee } from "../../redux/reducers/username";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./MobAccountRegisterComponent.css";
import InputFieldComponent from "../../common/InputFieldComponent";
import MobLocationComponent from "../MobLocationComponent";
import { useSelector } from "react-redux";
const UserContext = createContext();

const MobAccountRegisterComponent = () => {
  const [navigationComplete, setNavigationComplete] = useState(false);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  // const userNamee = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();

  // Set userName when needed

  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const [userName, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { phone } = location.state || {};
  console.log(userName);
  const cookies = new Cookies();

  const handleSubmit = async () => {
    const token = cookies.get("auth_token");

    // Validate email address
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmailRegex.test(emailId)) {
      alert("Enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/profile-update",
        {
          full_name: userName,
          email: emailId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.success) {
        // Clear pinCode before navigating
        localStorage.removeItem("pinCode");

        // Now navigate to the home screen

        dispatch(setUserNamee(userName));
        // dispatch(setUserName());
        navigate(ROUTES_NAVIGATION.HOME);
      } else {
        alert(
          "Registration failed: " + (response.data.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("There was a problem with the API request:", error);
      alert("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  const [pinCode, setPinCode] = useState(localStorage.getItem("pinCode") || "");

  const handleConfirmLocation = (pinCode) => {
    setPinCode(pinCode);
    setIsLocationSelected(false);
    // Save pin code to local storage
    localStorage.setItem("pinCode", pinCode);
    setPinCode(pinCode);
    localStorage.setItem("pinCode", pinCode);
    setShowLocation(false);
  };

  const onShortOrderOpenCloseHandler = useCallback((toggle) => {
    setIsLocationSelected(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);

  const homelocation = window.location.pathname;
  console.log(homelocation);

  const [loocation, setLoocation] = useState(null);
  const [error, setError] = useState(null);

  const ErrorLocationGetHandleLocation = useCallback((error) => {
    console.log("error", error);
    switch (error?.code) {
      case error.PERMISSION_DENIED:
        // alert("user denied locaion permission");
        setLoocation({ latitude: "", longitude: "" });
        break;
      case error.PERMISSION_UNAVABLE:
        alert("user denied locaion UNAVAILBLE");
        break;
      case error.TIMEOUT:
        alert("user denied locaion TIMEOUT");
        break;
      case error.UNKNOWN_ERROR:
        alert("user denied locaion UNKNOWN_ERROR");
        break;
      default:
        alert("user denied locaion default UNKNOWN_ERROR");
    }
  }, []);

  const LocaionGetHandleLocation = useCallback((position) => {
    setLoocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    console.log(
      "---Locaion----->",
      position.coords.latitude,
      position.coords.longitude
    );
  }, []);

  const handleGetLocation = useCallback(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        LocaionGetHandleLocation,
        ErrorLocationGetHandleLocation
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, [ErrorLocationGetHandleLocation, LocaionGetHandleLocation]);

  useEffect(() => {
    if (!loocation?.latitude) {
      handleGetLocation();
    }
  }, [handleGetLocation, loocation?.latitude]);

  // const handleConfirmLocation = (pinCode) => {
  //   setPinCode(pinCode);
  //   localStorage.setItem("pinCode", pinCode);
  //   setShowLocation(false);
  // };

  const handleClose = () => {
    setShowLocation(false);
  };

  // const onCartClickHandler = () => {
  //   navigate(ROUTES_NAVIGATION.CART);
  // };

  return (
    <>
      <MobHeaderComponent text={'Profile Update'}
        // isBack={true}
        // headerText={"Account Register"}
        // isCartShow={false}
        // isEdoboLogo={true}
        // isBottomTab={false}
      />
      <div className="mt-5 pt-3 container-fluid">
        <div className="card mob-account-register-component-form">
          <div className="p-3">
            <InputFieldComponent
              placeholder='Enter Phone no.'
              value={phone}
              // icon={Images.loginPhoneNoImg}
              readOnly={true}
              successIcon={faCircleCheck}
              successColor="custom-success-color"
            />
            <InputFieldComponent
              placeholder="Enter email address"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              icon={Images.loginPhoneEmailImg}
            />
            <InputFieldComponent
              placeholder="Enter user name"
              value={userName}
              onChange={handleInput}
              icon={Images.userName}
            />
          </div>
          <div
          style={{marginLeft: '20px'}}
           className="mb-3 d-flex justify-content-start  gap-3">
            <div className="mob-account-register-component-gender">He</div>
            <div className="mob-account-register-component-gender">She</div>
            <div className="mob-account-register-component-gender">Other</div>
          </div>
        </div>

        <div className="mt-2">
          <div className="fs-14 fw-bold">Age</div>
          <div className="mt-2 gap-2 horizontal-scroll-container-age-container pb-3">
            {[
              "Below 18",
              "18 - 20",
              "21 - 30",
              "31 - 40",
              "41 - 60",
              "Above 60",
            ].map((ageRange, index) => (
              <div key={index} className="mob-account-register-component-age">
                {ageRange}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`fixed-bottom mob-account-register-component-submit-btn ${
            userName.trim() === "" || emailId.trim() === "" ? "disabled" : ""
          }`}
          onClick={handleSubmit}
        >
          {loading ? "Submitting..." : "Continue"}
        </div>
        {isLocationSelected && (
          // <CustomModalComponent
          //   isOpen={isLocaionSelected}
          //   isCloseButton={false}
          //   headerRender={() => {
          //     return (
          //       <div className="fs-5">
          //         Welcome to <span className="text-success">Edobo</span>
          //       </div>
          //     );
          //   }}
          //   onClose={() => {
          //     setIsLocaionSelected(false);
          //   }}
          // >
          //   <div className="">
          //     <div className="fs-14">
          //       Your Custom Modal Content Goes Here frefre ferferf erf erfr f rf e
          //       f er
          //     </div>
          //     <p>Additional content...</p>
          //     <div className="d-flex justify-content-end ">
          //       <button
          //         className="btn text-danger"
          //         onClick={() => {
          //           setIsLocaionSelected(false);
          //         }}
          //       >
          //         Close
          //       </button>
          //     </div>
          //   </div>
          // </CustomModalComponent>

          // {isFilterShow && (
          // <>
          //   <div className="overlay"></div>
          //   <div
          //     className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
          //     tabIndex="-2"
          //     data-bs-backdrop="static"
          //     data-bs-scroll="false"
          //   >
          //     <div className="offcanvas-header">
          //       {/* <h5 className="offcanvas-title w-100 fs-14 fw-bold">
          //         Filters
          //         <div className="fs-10">Filter by product</div>
          //       </h5> */}
          //       <div className="justify-content-between">
          //         <button
          //           type="button"
          //           className="btn-close"
          //           onClick={() => {
          //             onShortOrderOpenCloseHandler(false);
          //           }}
          //         ></button>
          //       </div>
          //     </div>
          //     <div className="offcanvas-body small">
          //       <MobLocationComponent />
          //     </div>
          //   </div>
          // </>
          // )}

          <>
            <div className="overlay"></div>
            <div
              className="offcanvas offcanvas-bottom show h-50 rounded-top-5 "
              tabIndex="-1"
              data-bs-backdrop="fixed"
              data-bs-scroll="false"
            >
              <div className="offcanvas-body small">
                {/* <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close faicons-size "
                  onClick={() => {
                    onShortOrderOpenCloseHandler(false);
                  }}
                ></button>
              </div> */}
                <MobLocationComponent
                  // pinCode={pinCode}
                  onConfirmLocation={handleConfirmLocation}
                  // onConfirmLocation={(pinCode) => {
                  //   console.log("pincode-------------->>>>>>", pinCode);
                  // }}
                  onClose={() => {
                    setIsLocationSelected(false);
                  }}
                />
              </div>
            </div>
          </>
        )}

        {showLocation && (
          <>
            <div
              className="overlay position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
              style={{ zIndex: 1050 }}
            ></div>
            <div
              className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
              tabIndex="-1"
              data-bs-backdrop="static"
              data-bs-scroll="false"
              style={{ zIndex: 1060 }}
            >
              <div>
                <MobLocationComponent
                  onConfirmLocation={handleConfirmLocation}
                  onClose={handleClose}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MobAccountRegisterComponent;
