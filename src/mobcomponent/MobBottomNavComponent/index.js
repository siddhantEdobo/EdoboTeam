import React from "react";
import "./MobBottomNavComponent.css";
import home from '../../assets/Icon/home.png';
import categories from '../../assets/Icon/categories.png';
import offer from '../../assets/Icon/offer.png';
import myorder from '../../assets/Icon/myorders.png';
import homeSelected from '../../assets/Icon/homeSelected.png';
import offerSelected from '../../assets/Icon/offerSelected.png';
import categoriesSelected from '../../assets/Icon/categotriesSelected.png';
import myOrderSelected from '../../assets/Icon/MyOrderSelected.png';
import { useLocation, useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";

const MobBottomNavComponent = ({ isBottomTab = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveRoute = (route) => location?.pathname === route;

  return (
    <nav className="navbar navbar-expand-lg edobo-white fixed-bottom shadow">
      <div className="container-fluid d-flex p-2 justify-content-between align-items-center me-4 ms-4">
        <ul className="list-unstyled d-flex justify-content-between w-100 h-100 m-0">
          <li className="mob-bottom-nav" onClick={() => navigate(ROUTES_NAVIGATION.HOME)}>
            <div className={`mob-bottom-nav-link ${isActiveRoute(ROUTES_NAVIGATION.HOME) && "active-nav-link"}`}>
              <img className="footer-icon" src={isActiveRoute(ROUTES_NAVIGATION.HOME) ? homeSelected : home} alt="Home"/>
            </div>
          </li>

          <li className="mob-bottom-nav" onClick={() => navigate(ROUTES_NAVIGATION.OFFERSCOUPON)}>
            <div className={`mob-bottom-nav-link ${isActiveRoute(ROUTES_NAVIGATION.OFFERSCOUPON) && "active-nav-link"}`}>
              <img className="footer-icon" src={isActiveRoute(ROUTES_NAVIGATION.OFFERSCOUPON) ? offerSelected : offer} alt="Offers"/>
            </div>
          </li>

          <li className="mob-bottom-nav" onClick={() => navigate(ROUTES_NAVIGATION.MOB_CATEGORY)}>
            <div className={`mob-bottom-nav-link ${isActiveRoute(ROUTES_NAVIGATION.MOB_CATEGORY) && "active-nav-link"}`}>
              <img className="footer-icon-c" src={isActiveRoute(ROUTES_NAVIGATION.MOB_CATEGORY) ? categoriesSelected : categories} alt="Categories"/>
            </div>
          </li>

          <li className="mob-bottom-nav" onClick={() => navigate(ROUTES_NAVIGATION.COLLECTION + "/somethingwillcome")}>
            <div className={`mob-bottom-nav-link ${isActiveRoute(ROUTES_NAVIGATION.COLLECTION + "/somethingwillcome") && "active-nav-link"}`}>
              <img className="footer-icon-c" src={isActiveRoute(ROUTES_NAVIGATION.COLLECTION + "/somethingwillcome") ? myOrderSelected : myorder} alt="My Orders"/>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobBottomNavComponent;
