import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./MobHeaderComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router";
import MobDrawerComponent from "../MobDrawerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext } from "react";
import {
  faCartShopping,
  faChevronLeft,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MobBottomNavComponent from "../MobBottomNavComponent";
import ROUTES_NAVIGATION from "../../routes/routes";
// import ModalComponent from "../../component/LoginComponent/ModalComponent";
// import CustomModalComponent from "../../common/CustomModalComponent";
import MobLocationComponent from "../MobLocationComponent";
import { useSelector } from "react-redux";

const MobHeaderComponent = (props) => {
  const userName = useSelector((state) => state.user.userName);
  const pincode = useSelector((state) => state.home.pincode);
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  // // const userName = useSelector((state) => state.user.userName);
  // const userNamee = useSelector((state) => state.user.userName);
  // console.log("username is..", userNamee);
  // console.log(userName);
  // const user = useContext();

  const {
    isBack = false,
    headerText = "",
    isCartShow = true,
    manualBack = false,
    backNavigate = () => {},
    isBottomTab = true,
    isEdoboLogo = false,
  } = props;
  const { isDrawerOpen, setIsDrawerOpen } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isLocaionSelected, setIsLocaionSelected] = useState(false);

  const [pinCode, setPinCode] = useState(localStorage.getItem("pinCode") || "");
  console.log("pincodeisssss", pincode);

  const handleConfirmLocation = (pinCode) => {
    setPinCode(pinCode);
    setIsLocaionSelected(false);
    // Save pin code to local storage
    localStorage.setItem("pinCode", pinCode);
  };

  const onShortOrderOpenCloseHandler = useCallback((toggle) => {
    setIsLocaionSelected(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);

  const onClickBackHandler = () => {
    if (manualBack) {
      backNavigate();
    } else {
      navigate(-1);
    }
  };

  // const homelocation = window.location.pathname;
  // console.log(homelocation);

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const ErrorLocationGetHandleLocation = useCallback((error) => {
    console.log("error", error);
    switch (error?.code) {
      case error.PERMISSION_DENIED:
        // alert("user denied locaion permission");
        setLocation({ latitude: "", longitude: "" });
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
    setLocation({
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
    if (!location?.latitude) {
      handleGetLocation();
    }
  }, [handleGetLocation, location?.latitude]);

  const onCartClickHandler = () => {
    navigate(ROUTES_NAVIGATION.CART);
  };
  return (
    <>
      <nav
        className={`d-lg-none  navbar navbar-expand-lg container-fluid fixed-top bg-white border-0 shadow-sm ${
          isBack && "edobo-red text-white"
        }`}
      >
        <div className="container-fluid mob-header-container justify-content-between align-items-center d-flex flex-nowrap">
          <div className="">
            {isBack ? (
              <>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#mobDrawerView"
                    // aria-controls="mobDrawerView"
                    className="btn p-0 m-0"
                    onClick={() => {
                      onClickBackHandler();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="faicons-size text-white"
                    />
                  </button>
                  <div className="fs-6 ps-1">{headerText}</div>
                </div>
              </>
            ) : (
              <div className="d-flex">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <img
                  src={
                    "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/658a5defe29c5b15737e2c98/logo-app-2-240x240.png"
                  }
                  alt="Logo"
                  width="40"
                  height="40"
                />
              </div>
            )}
          </div>
          {!props?.children && !isBack && (
            <div className="flex-fill h-100 w-100 ps-1">
              <div
                className="fs-12  one-line-text"
                onClick={() => {
                  navigate(ROUTES_NAVIGATION.LOGIN);
                }}
              >
                Welcome
                <span className=""> {userName}</span>
              </div>
              <div
                className="d-flex align-items-center gap-1 fs-12 text-danger"
                onClick={() => {
                  setIsLocaionSelected(true);
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} className="" />
                Deliver to
                <span>
                  <button className="dropdown-toggle border bg-white border-0 text-danger fw-bold">
                    {pincode}
                  </button>
                </span>
              </div>
            </div>
          )}
          <div className="d-flex flex-fill ps-2 justify-content-end">
            {props?.children && (
              <div className="pe-4 m-0 flex-fill d-flex  justify-content-end align-items-center">
                {props?.children}
              </div>
            )}
            {isCartShow && (
              <div type="button" className="btn position-relative">
                <FontAwesomeIcon
                  onClick={() => {
                    onCartClickHandler();
                  }}
                  icon={faCartShopping}
                  className="text-danger"
                />
                <span className="position-absolute badge rounded-pill  mob-header-badge-icons">
                  {cartItemsCount}
                </span>
              </div>
            )}

            {isEdoboLogo && (
              <div
                className="d-flex"
                onClick={() => {
                  navigate(ROUTES_NAVIGATION.HOME);
                }}
              >
                <img
                  src={
                    "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/658a5defe29c5b15737e2c98/logo-app-2-240x240.png"
                  }
                  alt="Logo"
                  width="40"
                  height="40"
                />
              </div>
              // <div>test </div>
              // <div type="button" className="btn position-relative">
              //   <FontAwesomeIcon
              //     onClick={() => {
              //       onCartClickHandler();
              //     }}
              //     icon={faCartShopping}
              //     className="text-danger"
              //   />
              //   <span className="position-absolute badge rounded-pill  mob-header-badge-icons">
              //     2
              //   </span>
              // </div>
            )}
          </div>

          {/* {homelocation === "/" ? null : (
            <img
              src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/658a5defe29c5b15737e2c98/logo-app-2-240x240.png"
              alt="Bootstrap"
              width="50"
              height="50"
            />
          )} */}

          {/* <img
            src={
              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/658a5defe29c5b15737e2c98/logo-app-2-240x240.png"
            }
            alt="Bootstrap"
            width="50"
            height="50"
          /> */}
        </div>
      </nav>

      {isDrawerOpen && <MobDrawerComponent />}
      {isBottomTab && <MobBottomNavComponent />}
      {/* {!isBack && <MobBottomNavComponent />} */}
      {isLocaionSelected && (
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
                  setIsLocaionSelected(false);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobHeaderComponent;
