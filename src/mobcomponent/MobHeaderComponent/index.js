import React, { useCallback, useContext, useEffect, useState } from "react";
import "./MobHeaderComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router";
import MobDrawerComponent from "../MobDrawerComponent";
import MobBottomNavComponent from "../MobBottomNavComponent";
import MobLocationComponent from "../MobLocationComponent";
import profile from '../../assets/Mob/mob-image/profile.png';
import search from '../../assets/Icon/search.png';
import down from '../../assets/Icon/down.png';
import locationIcon from '../../assets/Mob/mob-image/locationIcon.png';
import ROUTES_NAVIGATION from "../../routes/routes";
import { faL } from "@fortawesome/free-solid-svg-icons";

const MobHeaderComponent = (props) => {
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
  const [pinCode, setPinCode] = useState(localStorage.getItem("pinCode") || "140902");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [searchBar , setSearchBar] = useState(false)

  const handleConfirmLocation = (pinCode) => {
    setPinCode(pinCode);
    setIsLocaionSelected(false);
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

  const ErrorLocationGetHandleLocation = useCallback((error) => {
    switch (error?.code) {
      case error.PERMISSION_DENIED:
        setLocation({ latitude: "", longitude: "" });
        break;
      case error.PERMISSION_UNAVAILABLE:
        alert("Location unavailable");
        break;
      case error.TIMEOUT:
        alert("Location timeout");
        break;
      case error.UNKNOWN_ERROR:
        alert("Unknown error occurred");
        break;
      default:
        alert("Unknown location error");
    }
  }, []);

  const LocaionGetHandleLocation = useCallback((position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
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

  const onCartClickHandler = () => {
    navigate(ROUTES_NAVIGATION.CART);
  };

  const handleProfileClick = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer open state
  };

  useEffect(() => {
    if (!location?.latitude) {
      handleGetLocation();
    }
  }, [handleGetLocation, location?.latitude]);

  return (
    <>
      <nav
        className={`d-lg-none navbar navbar-expand-lg container-fluid fixed-top ${
          isBack ? "white text-black" : ""
        }`}
        style={{ backgroundColor: "#FFEDED", height: "75px", display: 'flex' , flexDirection: 'column'}}
      >
        <div className="mob-header-container">
          <img
            src={profile}
            alt="Profile"
            className="profile-img"
            onClick={handleProfileClick} // Open sidebar when profile image is clicked
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="location-block">
              <button>
                <img src={locationIcon} alt="Location Icon" className="location-icon" />
              </button>
              <div className="location-details">
                <span className="delivering-to-text">Delivering to</span>
              </div>
              <button onClick={() => setIsLocaionSelected(true)}>
                <img className="down" src={down} alt="Dropdown" />
              </button>
            </div>
            <div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "sans-serif",
                }}
              >
                HOME - {pinCode}
              </span>
            </div>
          </div>
            {
              !searchBar ? (
                <button onClick={()=>{setSearchBar(!searchBar)}}>
                <img src={search} alt="Search" />
              </button>
              ) : (
                <div>

                </div>
              )
            }

         
        </div>
        {
            searchBar && (
            <div className="search-box-container">
             
              <input type="text" placeholder="Search E.g Groceries"/>
              <button className='input-search-button' onClick={()=>{setSearchBar(!searchBar)}}>
            <img src={search} alt="Search" width={'20px'} height={'20px'}/>
          </button>
            </div>)
          }
      </nav>

      {isDrawerOpen && <MobDrawerComponent />}
      {isBottomTab && <MobBottomNavComponent />}
      {isLocaionSelected && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-1"
            data-bs-backdrop="fixed"
            data-bs-scroll="false"
          >
            <div className="offcanvas-body small">
              <MobLocationComponent
                onConfirmLocation={handleConfirmLocation}
                onClose={() => setIsLocaionSelected(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobHeaderComponent;
