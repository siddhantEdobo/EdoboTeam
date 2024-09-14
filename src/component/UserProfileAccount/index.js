import React, { useEffect, useState } from "react";
import { Images } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import CustomeMapLocation from "../../common/MapCustom";
import {
  faBagShopping,
  faHome,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  GoogleMap,
  LoadScript,
  //   Marker,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";

import AutoSuggestionbox from "../../common/MapCustom/AutoSuggestionbox";
import AddressListComponent from "./AddresslistComponent";

const libraries = ["places"];
console.log(libraries);

const UserProfileAccount = () => {
  // console.log("profile pincode:- -", pinCode);
  // console.log("profile add:- -", address);

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

  const showModals = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handlePlaceSelected = (placeInfo) => {
    setSelectedPlaceInfo({
      address: placeInfo.address,
      pincode: placeInfo.pincode,
    });
  };

  const passUserData = () => {
    console.log("Address:", address);
    console.log("Pin Code:", pinCode);
    return { address, pinCode };
  };

  console.log("selected address", selectedPlaceInfo);
  console.log(pinCode);
  console.log(address);
  console.log("currentlocation", currentLocation);

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };
  const handleLoad = () => {
    // LoadScript onLoad callback
  };

  // const onPlacesChanged = () => {
  //   if (searchBox !== null) {
  //     const places = searchBox.getPlaces();
  //     if (places.length === 0) return;
  //     const firstPlace = places[0];
  //     if (firstPlace.geometry) {
  //       setCurrentLocation({
  //         lat: firstPlace.geometry.location.lat(),
  //         lng: firstPlace.geometry.location.lng(),
  //       });
  //     }
  //   }
  // };

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
    <div className="">
      <div className="mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mob-location-component-image-container">
            <img
              src={Images.notSelectedLocation}
              alt="notselectedlocation"
              className="w-100 h-100 "
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className=" mt-2 fs-4 fw-bold">
            Location permission is{" "}
            {locationPermission === "granted" ? "on" : "off"}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="fs-6 mt-1 text-secondary ps-4 pe-3">
            We need your location to find the nearest store & provide you a
            seamless delivery experience
          </div>
        </div>
        <div className="text-center my-3">
          <button className="btn btn-danger w-25" onClick={() => showModals()}>
            Detect Location
          </button>

          <div className=" d-flex  justify-content-center ">
            <div className="w-50 my-4">
              <div className="input-group">
                <div className="input-group-text fs-2">
                  <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg text-danger "
                  placeholder="Search your Location Manually"
                />
              </div>
            </div>
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

                      <LoadScript
                        googleMapsApiKey="AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E"
                        // Pass libraries as a static class property
                        libraries={libraries}
                        onLoad={handleLoad}
                      >
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
                      </LoadScript>
                    </div>
                    <div className="col-6">
                      <div className="d-flex">
                        <div className="fs-6 fw-bold">
                          Enter Location Information
                        </div>
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
            </div>
          </div>
        </div>
      </div>
      <AddressListComponent />
    </div>
  );
};

export default UserProfileAccount;
