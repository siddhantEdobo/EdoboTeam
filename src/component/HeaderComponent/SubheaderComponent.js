import React, { useCallback, useEffect, useState } from "react";
import "./HeaderComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faLocationDot,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import Edobostorecomponent from "../EdoboStoreComponent";
import AutoSuggestionbox from "../../common/MapCustom/AutoSuggestionbox";
import deliverlogo from "../../assets/Icon/delivery-logo.png";
import expresslogo from "../../assets/Icon/express-logo.png";
import calenderlogo from "../../assets/Icon/calendar-logo.png";
import CustomModal from "../../common/CustomModel";

function Subheader() {
  const [userPincode, setUserPincode] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);

  const showModals = () => {
    setShow(true);
  };

  useEffect(() => {
    const pincodes = localStorage.getItem("userPincode");
    setUserPincode(pincodes);
    setSelectedFunction(pincodes);
    console.log("pincode ", pincodes);
    if (pincodes) {
      setShow(false);
    } else {
      showModals();
    }
  }, []);

  const hideModal = () => {
    setShow(false);
  };

  const handlePincodeUpdate = () => {
    setSelectedFunction("Function2");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E`
            );
            const data = await response.json();
            console.log(data);
            const addressComponents = data.results[0].address_components;
            console.log(addressComponents);
            const pincodeComponent = addressComponents.find((component) =>
              component.types.includes("postal_code")
            );

            console.log(pincodeComponent);
            if (pincodeComponent) {
              const pincode = pincodeComponent.long_name;
              console.log("function 2 pincode", pincode);
              localStorage.setItem("userPincode", pincode);
              setUserPincode(pincode);
              setShow(false);
            } else {
              console.error("Pincode not found");
            }
          } catch (error) {
            console.error("Error fetching pincode:", error);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.log("Place already selected or geolocation not available.");
    }
  };

  const handlePlaceSelected = (placeData) => {
    setSelectedFunction("Function1");
    const pincode = placeData.pincode;
    console.log("function 1 pincode", pincode);
    localStorage.setItem("userPincode", pincode);
    setUserPincode(pincode);
    setShow(false);
  };

  return (
    <>
      <div className="my-5">
        <nav class="navbar navbar-expand-lg edobo-red container-fluid sub-header z-1 ">
          <div class="container-fluid  d-flex flex-wrap">
            <ul class="nav me-auto">
              <li class="nav-item">
                <a
                  href="/"
                  className="nav-link link-dark text-white dropdown-toggle px-2 show"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                >
                  <FontAwesomeIcon icon={faCircle} /> How do you want your item
                  ?
                </a>
                <ul class="dropdown-menu edobo-red ms-4">
                  <li>
                    <div className="container row p-3">
                      <div className="col-4 text-center">
                        <div className="sub-header-component-pickup-popup">
                          <img src={deliverlogo} alt="delivery logo" />
                        </div>
                        <span className="sub-header-component-pickup-popup-title">
                          Express Delivery
                        </span>
                      </div>
                      <div className="col-4 text-center ">
                        <div className="sub-header-component-pickup-popup">
                          <img src={expresslogo} alt="delivery logo" />
                        </div>
                        <span className="sub-header-component-pickup-popup-title">
                          Pickup{" "}
                        </span>
                      </div>
                      <div className="col-4 text-center ">
                        <div className="sub-header-component-pickup-popup">
                          <img src={calenderlogo} alt="delivery logo" />
                        </div>
                        <span className="sub-header-component-pickup-popup-title">
                          Slot Delivery
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <div className="container">
                      <div class="card mb-3">
                        <div className="row">
                          <div className="col-1">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="fs-4 mt-3 ms-2 text-danger"
                            />
                          </div>
                          <div className="col-11">
                            <div class="card-body text-danger">
                              <div className="fs-6 fw-bold ">
                                Add an address for shipping & delivery
                              </div>
                              <div className="fs-13">
                                Anwar compound, opposite dukes factory,
                              </div>
                              <div className="fs-13">
                                Waman Tukaram Patil Marg, Mumbai 400071
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div className="row">
                          <div className="col-1">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="fs-4 mt-3 ms-2 text-danger"
                            />
                          </div>
                          <div className="col-11">
                            <div class="card-body text-danger">
                              <div className="fs-6 fw-bold">
                                Add an address for shipping & delivery
                              </div>
                              <div className="fs-13">
                                Anwar compound, opposite dukes factory,
                              </div>
                              <div className="fs-13">
                                Waman Tukaram Patil Marg, Mumbai 400071
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <div className="line"></div>
              </li>
              <li class="nav-item">
                <div
                  className="nav-link link-dark text-white px-2"
                  onClick={() => showModals()}
                >
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  {selectedFunction ? userPincode : "Deliver to..."}
                </div>
              </li>
              <li class="nav-item">
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <FontAwesomeIcon icon={faStore} />
                  edobo Smart Store
                </div>
              </li>
            </ul>
            <ul class="nav">
              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Combos
                </a>
              </li>
              {/* <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-primary mt-3"
                  onClick={showModals}
                >
                  Open Modal
                </button>
              </li> */}
              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Pooja Essentials
                </a>
              </li>

              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Beverages
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Health & Wellness
                </a>
              </li>

              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Baby Care
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link link-dark text-white  px-2">
                  edobo +
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptions"
      >
        <Edobostorecomponent />
      </div>

      <div>
        <div
          className={`modal ${show ? " modal-show" : ""}`}
          style={{ display: `${show ? "block" : "none"}` }}
          id="myModal"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div
              className="modal-content bg-light"
              style={{ maxWidth: "400px" }}
            >
              <div className="modal-header">
                <h1 className="fs-5 p-0 m-0" id="myModal">
                  Welcome to Edobo
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={hideModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="fs-6 fw-bold me-2"
                  />
                  <div className="fs-13 mb-2">
                    Please provide your delivery location to see products at
                    nearby store.
                  </div>
                </div>

                <div className="d-flex justify-content-evenly my-2">
                  <button
                    type="button"
                    className="btn btn-danger rounded-5"
                    onClick={() => {
                      handlePincodeUpdate(null);
                    }}
                    data-bs-dismiss="modal"
                  >
                    Detect My Location
                  </button>

                  <div className="sub-header-serach">
                    <AutoSuggestionbox onPlaceSelected={handlePlaceSelected} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subheader;
