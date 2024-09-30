import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  StandaloneSearchBox,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import locatesymbol from "../MobLocationComponent/location.png";
import "./MobEnableLocationComponent.css";
import MobAddAddressLocationDeliveryComponent from "./MobAddAddressLocationDeliveryComponent";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/reducers/gpsAdd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const MobEnableLocationComponent = ({
  onClose = () => {},
  onConfirm = () => {},
}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [searchBox, setSearchBox] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [gpsAdd, setGpsAdd] = useState();
  const dispatch = useDispatch();

  const mapRef = useRef(null);

  const handleAddressClose = () => {
    setIsAddressShow(false);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const handleAddressOpen = () => {
    setIsAddressShow(true);
  };

  const handleConfirmContinue = () => {
    onConfirm(pinCode);
    onClose();
  };

  const onPlacesChanged = useCallback(() => {
    if (searchBox !== null) {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;
      const firstPlace = places[0];
      if (firstPlace.geometry) {
        const lat = firstPlace.geometry.location.lat();
        const lng = firstPlace.geometry.location.lng();
        setCurrentLocation({ lat, lng });
        console.log("Place selected, lat:", lat, "lng:", lng);
      } else {
        console.error("No geometry location found for the selected place.");
      }
    }
  }, [searchBox]);

  const getAddressFromLatLng = useCallback(async (lat, lng) => {
    try {
      console.log("Getting address for lat:", lat, "lng:", lng);
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E`
      );
      if (response.data.status === "OK") {
        setGpsAdd(response?.data);
        if (response.data.results.length > 0) {
          const formattedAddress = response.data.results[0].formatted_address;
          setAddress(formattedAddress);

          // Extract the pin code (postal code) from the address components
          const addressComponents = response.data.results[0].address_components;
          const postalCodeComponent = addressComponents.find((component) =>
            component.types.includes("postal_code")
          );
          if (postalCodeComponent) {
            setPinCode(postalCodeComponent.long_name);
          } else {
            setPinCode("Pin code not found");
          }
        } else {
          console.error("No address found for the given coordinates.");
          setAddress("No address found");
        }
      } else {
        console.error("Geocoding API error:", response.data.status);
      }
    } catch (error) {
      console.error("Error getting address:", error);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lng: longitude };
          console.log("Geolocation fund:", location);
          console.log("GPS data", address);
          setCurrentLocation(location);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
        { enableHighAccuracy: true } // Request high accuracy if possible
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  useEffect(() => {
    if (currentLocation) {
      console.log("Current location changed, getting address...");
      getAddressFromLatLng(currentLocation.lat, currentLocation.lng);
    }
  }, [currentLocation, getAddressFromLatLng]);

  console.log(gpsAdd);
  dispatch(addData(gpsAdd));
  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "70%" }}
        center={currentLocation || { lat: 19.076, lng: 72.8777 }} // Default to Mumbai if no currentLocation
        zoom={13}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: false,
          gestureHandling: "none",
        }}
        onLoad={(map) => (mapRef.current = map)} // Set the map reference
      >
        <div className="map-search-box-wrapper">
        <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
      />
          <StandaloneSearchBox
            onLoad={(ref) => setSearchBox(ref)}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Enter a location"
              className="map-search-input"
            />
          </StandaloneSearchBox>
        </div>

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
              draggable={true}
              onDragEnd={(e) => {
                const latLng = e.latLng.toJSON();
                setCurrentLocation(latLng);
                getAddressFromLatLng(latLng.lat, latLng.lng);
                console.log(
                  "Marker dragged, lat:",
                  latLng.lat,
                  "lng:",
                  latLng.lng
                );
              }}
              position={currentLocation}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          </>
        )}
      </GoogleMap>

      <div className="locate-me-button" onClick={getCurrentLocation}>
        <img className="location" src={locatesymbol} alt="logo" /> Locate Me
      </div>
      <div className="card w-100 position-fixed bottom-0 start-0 shadow-lg p-3">
        <div className="d-flex justify-content-between pt-1">
          <div className="p-1 mob-cart-component-delivery-payment">
            Select Your Delivery Location
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div>
              <FontAwesomeIcon
                icon={faLocationPin}
                className="mt-1 pe-1 text-danger faicons-size"
              />
            </div>
            <div className="fs-6 fw-bold">Raj Infrabuilds</div>
          </div>
          <div className="d-flex">
            <div className="fs-10 text-secondary w-75 ps-2 mob-enble-location-component-max-line-address">
              {address}
            </div>
          </div>
          <div className="d-flex">
            <div className="fs-10 text-secondary w-75 ps-2">
              Pin Code: {pinCode}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="mob-enable-location-component-confirm-btn"
            onClick={handleAddressOpen}
          >
            Confirm & Continue
          </div>
        </div>
      </div>

      {isAddressShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-75 rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title w-100 fs-14 fw-bold">
                Fill your address
                <div className="fs-10 mt-1">{address}</div>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleAddressClose}
              ></button>
            </div>
            <div className="offcanvas-body small">
              <MobAddAddressLocationDeliveryComponent
                address={address}
                pinCode={pinCode}
                onClose={onClose}
                onConfirm={(pinCode) => {
                  onConfirm(pinCode);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobEnableLocationComponent;
