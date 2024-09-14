import React, { useCallback, useEffect, useState } from "react";
import "./MobSearchLocationManuallyComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBriefcase,
  faHome,
  faLocation,
  faLocationDot,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import MobEnableLocationComponent from "./MobEnableLocationComponent";
import "./MobEnableLocationComponent.css";

const MobSearchLocationManuallyComponent = ({ onClose = () => {} }) => {
  const [isSearch, setIsSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isEnableLocationShow, setIsEnableLocationShow] = useState(false);

  const onShortEnableOpenCloseHandler = useCallback((toggle) => {
    setIsEnableLocationShow(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
    console.log("function call", toggle);
  }, []);

  console.log(onShortEnableOpenCloseHandler);

  const handleGetLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        LocaionGetHandleLocation,
        ErrorLocationGetHandleLocation
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const LocaionGetHandleLocation = useCallback((position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    // navigate(ROUTES_NAVIGATION.CART);

    console.log(
      "---Location-----> Alam",
      position.coords.latitude,
      position.coords.longitude
    );

    // onClose();
  }, []);

  const ErrorLocationGetHandleLocation = useCallback((error) => {
    console.log("error", error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        // alert("user denied location permission");
        setLocation({ latitude: "", longitude: "" });
        break;
      case error.PERMISSION_UNAVAILABLE:
        alert("user denied location UNAVAILABLE");
        break;
      case error.TIMEOUT:
        alert("user denied location TIMEOUT");
        break;
      case error.UNKNOWN_ERROR:
        alert("user denied location UNKNOWN_ERROR");
        break;
      default:
        alert("user denied location default UNKNOWN_ERROR");
    }
  }, []);

  useEffect(() => {
    if (!location?.latitude) {
      handleGetLocation();
    }
  }, [handleGetLocation, location?.latitude]);

  const savedLocationData = [
    {
      id: 1,
      icon: faHome,
      title: "Home",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
    {
      id: 2,
      icon: faBriefcase,
      title: "Office",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
    {
      id: 3,
      icon: faUserGroup,
      title: "Home",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
  ];

  const recentSearches = [
    {
      id: 1,
      icon: faLocationDot,
      title: "Wadala West",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
    {
      id: 2,
      icon: faLocationDot,
      title: "Chembur East",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
    {
      id: 3,
      icon: faLocationDot,
      title: "Wadala East",
      address:
        "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India",
    },
  ];

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="mob-search-location-manually-component">
          <div
            className="d-flex gap-2"
            onClick={() => {
              onClose();
            }}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="mob-search-location-manually-component-backbutton-header faicons-size"
            />
            <div className="">Your Location</div>
          </div>
        </div>

        <div className="container">
          <div>
            <div className="input-group flex-nowrap mt-3">
              <span className="input-group-text" id="addon-wrapping">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="faicons-size cursor-pointer"
                />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search your area/pincode/apartment"
                aria-label="Search"
                aria-describedby="addon-wrapping"
                value={isSearch}
                onChange={(e) => setIsSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <div className="d-flex justify-content-between gap-2">
              <div>
                <FontAwesomeIcon
                  icon={faLocation}
                  className="text-danger faicons-size"
                />
              </div>
              <div
                className="fs-13 fw-bold text-danger cursor-pointer"
                onClick={() => {
                  onShortEnableOpenCloseHandler(true);
                }}
              >
                Current location
              </div>
            </div>
          </div>
          <div className="mob-search-location-manually-component-saved-location-container">
            <div className="fs-13 fw-bold">Saved Location</div>
            {savedLocationData.map((location) => (
              <div key={location.id}>
                <div className="">
                  <div className="pt-3 d-flex gap-2">
                    <div>
                      <FontAwesomeIcon
                        icon={location.icon}
                        className="faicons-size"
                      />
                    </div>
                    <div className="fs-13 fw-bold">{location.title}</div>
                  </div>
                  <div className="ps-4">{location.address}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <div className="fs-13 fw-bold">Recent Searches</div>
            {recentSearches.map((location) => (
              <div key={location.id}>
                <div className="">
                  <div className="pt-3 d-flex gap-2">
                    <div>
                      <FontAwesomeIcon
                        icon={location.icon}
                        className="faicons-size text-danger"
                      />
                    </div>
                    <div className="fs-13 fw-bold">{location.title}</div>
                  </div>
                  <div className="ps-4">{location.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {currentLocation && (
        <>
          <MobEnableLocationComponent />
        </>
      )} */}

      {isEnableLocationShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-100  "
            tabIndex="-1"
            data-bs-backdrop="fixed"
            data-bs-scroll="false"
          >
            <div
              className="offcanvas-body mob-location-component-offcanvas "
              // style={{ padding: "0 !important" }}
            >
              <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close faicons-size "
                  onClick={() => {
                    onClose();
                    // onShortOrderOpenCloseHandler(false);
                  }}
                ></button>
              </div>
              {/* <MobHeaderComponent pinCode={pinCode} /> */}
              <MobEnableLocationComponent
                onClose={() => {
                  setIsEnableLocationShow(false);
                  onClose();
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobSearchLocationManuallyComponent;
