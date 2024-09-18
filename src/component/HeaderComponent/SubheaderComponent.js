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
import {
  faBagShopping,
  faHome,
  // faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import calenderlogo from "../../assets/Icon/calendar-logo.png";
import CustomModal from "../../common/CustomModel";
import axios from "axios";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";

function Subheader() {
  const [userPincode, setUserPincode] = useState(null);
  const [shows, setShows] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [locationPermission, setLocationPermission] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [searchBox, setSearchBox] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const [selectedPlaceInfo, setSelectedPlaceInfo] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const showModals = () => {
    setShows(true);
  };
  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
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
    setShows(false);
  };

  const handlePincodeUpdate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location granted");
          setLocationPermission("granted");
          setShowModal(true);
          setShow(true); // Show modal when location is granted
        },
        (error) => {
          // Handle errors if needed
          setLocationPermission("denied");
        }
      );
    } else {
      setLocationPermission("Geolocation is not supported by your browser.");
    }

    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-bold " id="exampleModalLabel">
            Location Information
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={hideModal}
          ></button>
        </div>
        <div
          className="modal-body"
          style={{
            height: "600px",
            position: "relative",
          }}
        >
          <div className="row">
            <div className="col-6">
              <div class="">
                <AutoSuggestionbox
                  onPlaceSelected={handlePlaceSelected}
                  {...passUserData()}
                />
              </div>
              {/* <CustomeMapLocation /> */}

              <GoogleMap
                mapContainerStyle={{
                  width: "46%",
                  height: "85%",
                  position: "absolute",
                  top: "65px",
                }}
                center={currentLocation}
                zoom={13}
                options={{
                  mapTypeControl: false,
                  fullscreenControl: false,
                  streetViewControl: false,
                  zoomControl: false,
                  gestureHandling: "none",
                  mapTypeControlOptions: { mapTypeIds: [] },
                }}
              >
                {currentLocation && (
                  <>
                    <MarkerF
                      position={currentLocation}
                      onClick={() => setInfoWindowOpen(true)}
                    >
                      {infoWindowOpen && (
                        <InfoWindow onCloseClick={handleInfoWindowClose}>
                          <div>Your current location: {address}</div>
                        </InfoWindow>
                      )}
                    </MarkerF>
                    <MarkerF
                      position={currentLocation}
                      icon={{
                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      }}
                    />
                    <MarkerF
                      draggable={true}
                      onDragEnd={(e) => {
                        setCurrentLocation(e.latLng.toJSON());
                        getAddressFromLatLng(e.latLng.lat(), e.latLng.lng());
                      }}
                      position={currentLocation}
                      icon={{
                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      }}
                    />
                  </>
                )}

                {currentLocation && <MarkerF position={currentLocation} />}
              </GoogleMap>
              {/* </LoadScript> */}
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="fs-6 fw-bold">Enter Location Information</div>
              </div>
              <div class="card bg-success-subtle my-2">
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">Address</h5>
                  {/* {currentLocation && !selectedPlaceInfo && (
                            <div>
                              <p className="card-text bg-success-subtle">
                                {address.substring(0, 45)}
                              </p>
                              <p className="card-text bg-success-subtle">
                                pincode: {pinCode}
                              </p>
                            </div>
                          )} */}

                  {selectedPlaceInfo && (
                    <div>
                      <p className="card-text bg-success-subtle">
                        {selectedPlaceInfo.address.substring(0, 50)}
                      </p>
                      <p className="card-text bg-success-subtle">
                        Pincode: {selectedPlaceInfo.pincode}
                      </p>
                    </div>
                  )}

                  {!selectedPlaceInfo && <p>Please select a place.</p>}
                </div>
              </div>
              <div className="">
                <div class="my-3">
                  <label class="d-block text-start fs-13">
                    HOUSE / FLAT / BLOCK No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Details"
                  />
                </div>
                <div class="my-3">
                  <label class="d-block text-start fs-13">
                    APARTMENT / ROAD / AREA
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Details"
                  />
                </div>
                <div class="my-3">
                  <label class="d-block text-start fs-13">
                    Landmark & Area Name (Optional)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Details"
                  />
                </div>
                <div className="mt-3">
                  <div className="fw-bold text-start">SAVE AS</div>
                  <div className=" mt-1 d-flex gap-2 mb-3">
                    {icons.map((icon, index) => (
                      <div
                        key={icon.id}
                        className={`mob-add-address-location-save-as-icon-label px-2 ${
                          selectedIcon === icon.id
                            ? "mob-add-address-location-selected"
                            : "mob-add-address-location-small"
                        }`}
                        onClick={() => handleIconClick(icon.id)}
                      >
                        <FontAwesomeIcon
                          icon={icon.icon}
                          className="faicons-size fs-12"
                        />
                        {selectedIcon === icon.id ? icon.name : ""}
                      </div>
                    ))}
                  </div>
                  {renderInputBox()}
                  <div class="d-grid gap-2">
                    <button class="btn btn-danger" type="button">
                      Save & Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  };

  const handlePlaceSelected = (placeData) => {
    setSelectedFunction("Function1");
    const pincode = placeData.pincode;
    console.log("function 1 pincode", pincode);
    localStorage.setItem("userPincode", pincode);
    setUserPincode(pincode);
    setShow(false);
  };

  const getAddressFromLatLng = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E`
      );
      if (response.data.results.length > 0) {
        const formattedAddress = response.data.results[0].formatted_address;
        const address = formattedAddress;
        setAddress(address);
        let pincodes = "";
        const regex = /(\d{6})/;
        const match = formattedAddress.match(regex);
        if (match && match.length > 0) {
          pincodes = match[0];
        }
        setPinCode(pincodes);
        setSelectedPlaceInfo({
          address: address,
          pincode: pincodes,
        });
      }
    } catch (error) {
      console.error("Error getting address:", error);
    }
  };
  const passUserData = () => {
    console.log("Address:", address);
    console.log("Pin Code:", pinCode);
    return { address, pinCode };
  };

  const passUserDataToProfile = () => {
    console.log("Address:", address);
    console.log("Pin Code:", pinCode);
    return { address, pinCode };
  };

  const handlePlaceSelect = (place) => {
    setAddress(place.formatted_address);
  };

  useEffect(() => {
    setInfoWindowOpen(false);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
      getAddressFromLatLng(latitude, longitude);
    });

    passUserDataToProfile();
  }, []);

  const icons = [
    { id: 1, name: "Home", icon: faHome },
    { id: 2, name: "Office", icon: faBagShopping },
    { id: 3, name: "Family & Friends", icon: faUsers },
    { id: 4, name: "Other", icon: faLocationDot },
  ];

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
    if (iconId === 3) {
      setShowModal(true);
    }
  };

  const renderInputBox = () => {
    if (selectedIcon === 3) {
      return (
        <>
          <div className="my-2">
            <label className="d-block text-start fs-13">Receiver’s name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Details"
            />
          </div>
          <div className="my-2">
            <label className="d-block text-start fs-13">
              receiver’s phone number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Details"
            />
          </div>
        </>
      );
    }
    return null;
  };

  console.log(" modal ", showModal);

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location granted");
          setLocationPermission("granted");
          setShowModal(true); // Show modal when location is granted
        },
        (error) => {
          // Handle errors if needed
          setLocationPermission("denied");
        }
      );
    } else {
      setLocationPermission("Geolocation is not supported by your browser.");
    }
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
          className={`modal ${shows ? " modal-show" : ""}`}
          style={{ display: `${shows ? "block" : "none"}` }}
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

                  <div
                    className={`modal ${show ? " modal-show" : ""}`}
                    style={{ display: `${show ? "block" : "none"}` }}
                    id="myModal"
                    tabIndex="-1"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5 fw-bold "
                            id="exampleModalLabel"
                          >
                            Location Information
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
                          ></button>
                        </div>
                        <div
                          className="modal-body"
                          style={{
                            height: "600px",
                            position: "relative",
                          }}
                        >
                          <div className="row">
                            <div className="col-6">
                              <div className="" style={{ marginLeft: "180px" }}>
                                <AutoSuggestionbox
                                  onPlaceSelected={handlePlaceSelected}
                                  {...passUserData()}
                                />
                              </div>
                              {/* <CustomeMapLocation /> */}

                              <GoogleMap
                                mapContainerStyle={{
                                  width: "46%",
                                  height: "85%",
                                  position: "absolute",
                                  top: "65px",
                                }}
                                center={currentLocation}
                                zoom={13}
                                options={{
                                  mapTypeControl: false,
                                  fullscreenControl: false,
                                  streetViewControl: false,
                                  zoomControl: false,
                                  gestureHandling: "none",
                                  mapTypeControlOptions: { mapTypeIds: [] },
                                }}
                              >
                                {currentLocation && (
                                  <>
                                    <MarkerF
                                      position={currentLocation}
                                      onClick={() => setInfoWindowOpen(true)}
                                    >
                                      {infoWindowOpen && (
                                        <InfoWindow
                                          onCloseClick={handleInfoWindowClose}
                                        >
                                          <div>
                                            Your current location: {address}
                                          </div>
                                        </InfoWindow>
                                      )}
                                    </MarkerF>
                                    <MarkerF
                                      position={currentLocation}
                                      icon={{
                                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                      }}
                                    />
                                    <MarkerF
                                      draggable={true}
                                      onDragEnd={(e) => {
                                        setCurrentLocation(e.latLng.toJSON());
                                        getAddressFromLatLng(
                                          e.latLng.lat(),
                                          e.latLng.lng()
                                        );
                                      }}
                                      position={currentLocation}
                                      icon={{
                                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                      }}
                                    />
                                  </>
                                )}

                                {currentLocation && (
                                  <MarkerF position={currentLocation} />
                                )}
                              </GoogleMap>
                              {/* </LoadScript> */}
                            </div>
                            <div className="col-6">
                              <div className="d-flex">
                                <div className="fs-6 fw-bold">
                                  Enter Location Information
                                </div>
                              </div>
                              <div class="card bg-success-subtle my-2">
                                <div className="card-body text-start">
                                  <h5 className="card-title fw-bold">
                                    Address
                                  </h5>
                                  {/* {currentLocation && !selectedPlaceInfo && (
                            <div>
                              <p className="card-text bg-success-subtle">
                                {address.substring(0, 45)}
                              </p>
                              <p className="card-text bg-success-subtle">
                                pincode: {pinCode}
                              </p>
                            </div>
                          )} */}

                                  {selectedPlaceInfo && (
                                    <div>
                                      <p className="card-text bg-success-subtle">
                                        {selectedPlaceInfo.address.substring(
                                          0,
                                          50
                                        )}
                                      </p>
                                      <p className="card-text bg-success-subtle">
                                        Pincode: {selectedPlaceInfo.pincode}
                                      </p>
                                    </div>
                                  )}

                                  {!selectedPlaceInfo && (
                                    <p>Please select a place.</p>
                                  )}
                                </div>
                              </div>
                              <div className="">
                                <div class="my-3">
                                  <label class="d-block text-start fs-13">
                                    HOUSE / FLAT / BLOCK No.
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Details"
                                  />
                                </div>
                                <div class="my-3">
                                  <label class="d-block text-start fs-13">
                                    APARTMENT / ROAD / AREA
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Details"
                                  />
                                </div>
                                <div class="my-3">
                                  <label class="d-block text-start fs-13">
                                    Landmark & Area Name (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Details"
                                  />
                                </div>
                                <div className="mt-3">
                                  <div className="fw-bold text-start">
                                    SAVE AS
                                  </div>
                                  <div className=" mt-1 d-flex gap-2 mb-3">
                                    {icons.map((icon, index) => (
                                      <div
                                        key={icon.id}
                                        className={`mob-add-address-location-save-as-icon-label px-2 ${
                                          selectedIcon === icon.id
                                            ? "mob-add-address-location-selected"
                                            : "mob-add-address-location-small"
                                        }`}
                                        onClick={() => handleIconClick(icon.id)}
                                      >
                                        <FontAwesomeIcon
                                          icon={icon.icon}
                                          className="faicons-size fs-12"
                                        />
                                        {selectedIcon === icon.id
                                          ? icon.name
                                          : ""}
                                      </div>
                                    ))}
                                  </div>
                                  {renderInputBox()}
                                  <div class="d-grid gap-2">
                                    <button
                                      class="btn btn-danger"
                                      type="button"
                                      onClick={handleClose}
                                    >
                                      Save & Continue
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
