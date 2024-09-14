import React from "react";
import "./MobBottomNavComponent.css";
import {
  faCab,
  faGear,
  faHome,
  faHouse,
  faIcons,
  faMagnifyingGlass,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";

const MobBottomNavComponent = ({ isBottomTab = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    // <nav className="navbar navbar-expand-lg container-fluid fixed-bottom mob-bottom-nav-container">
    <nav className="navbar navbar-expand-lg edobo-white fixed-bottom shadow">
      <div className="container-fluid d-flex p-2 justify-content-between align-items-center me-4 ms-4">
        <ul className="list-unstyled d-flex justify-content-between w-100 h-100 m-0">
          <li
            className="mob-bottom-nav"
            onClick={(e) => {
              navigate(ROUTES_NAVIGATION.HOME);
            }}
          >
            <div
              className={`mob-bottom-nav-link ${
                location?.pathname === ROUTES_NAVIGATION.HOME &&
                "active-nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="mob-bottom-nav-name">Home</span>
            </div>
          </li>

          <li
            className="mob-bottom-nav"
            onClick={(e) => {
              navigate(ROUTES_NAVIGATION.OFFERSCOUPON);
            }}
          >
            <div
              className={`mob-bottom-nav-link ${
                location?.pathname === ROUTES_NAVIGATION.OFFERSCOUPON &&
                "active-nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faPercent} />
              <span className="mob-bottom-nav-name">Offer</span>
            </div>
          </li>

          <li
            className="mob-bottom-nav"
            onClick={(e) => {
              console.log("--------------Search");
              navigate(ROUTES_NAVIGATION.MOBILE_SEARCH);
            }}
          >
            <div
              className={`mob-bottom-nav-link ${
                location?.pathname === ROUTES_NAVIGATION.MOBILE_SEARCH &&
                "active-nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="mob-bottom-nav-name">Search</span>
            </div>
          </li>

          <li
            className="mob-bottom-nav"
            onClick={(e) => {
              navigate(ROUTES_NAVIGATION.MOB_CATEGORY);
            }}
          >
            <div
              className={`mob-bottom-nav-link ${
                location?.pathname === ROUTES_NAVIGATION.MOB_CATEGORY &&
                "active-nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faIcons} />
              <span className="mob-bottom-nav-name">Category</span>
            </div>
          </li>

          <li
            className="mob-bottom-nav"
            onClick={(e) => {
              navigate(ROUTES_NAVIGATION.COLLECTION + "/somethingwillcome");
            }}
          >
            <div
              className={`mob-bottom-nav-link ${
                location?.pathname ===
                  ROUTES_NAVIGATION.COLLECTION + "/somethingwillcome" &&
                "active-nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faGear} />
              <span className="mob-bottom-nav-name">Setting</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobBottomNavComponent;
