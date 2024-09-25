import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./MobDrawerComponent.css";
import ROUTES_NAVIGATION from "../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowRight,
  faArrowRightFromBracket,
  faBell,
  faCartPlus,
  faChevronRight,
  faClock,
  faCoins,
  faExclamation,
  faHeadset,
  faHeart,
  faList,
  faLocationDot,
  faTags,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/GlobalContext";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const MobDrawerComponent = () => {
  console.log("MobDrawerComponent render");
  const navigate = useNavigate();
  const { isDrawerOpen, setIsDrawerOpen } = useContext(GlobalContext);

  const DrawerCloseHandler = () => {
    setIsDrawerOpen(false);
  };

  // Define an array of menu items
  const menuItems = [
    {
      icon: faLocationDot,
      text: "Change Address",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.PROFILE);
        DrawerCloseHandler();
      },
    },
    {
      icon: faList,
      text: "My Orders",
      onClick: () => {
        navigate(
          ROUTES_NAVIGATION.PROFILE + "/" + ROUTES_NAVIGATION.USER_ORDER
        );
        DrawerCloseHandler();
      },
    },
    {
      icon: faCoins,
      text: "Connect & Earn",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.CART);
        DrawerCloseHandler();
      },
    },

    {
      icon: faWallet,
      text: "My Wallet",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.MY_WALLET);
        DrawerCloseHandler();
      },
    },
    // {
    //   icon: faBattery,
    //   text: "My Subscriptions",
    //   onclick: () => {
    //     // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
    //     DrawerCloseHandler();
    //   },
    // },
    {
      icon: faHeart,
      text: "Wish List",
      onClick: () => {
        navigate(
          // ROUTES_NAVIGATION.PROFILE + "/" + ROUTES_NAVIGATION.USER_WISHLIST
          
        );
        DrawerCloseHandler();
      },
    },
    {
      icon: faTags,
      text: "Offers",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.OFFERSCOUPON);
        DrawerCloseHandler();
      },
      // onclick: () => {
      //   navigate(ROUTES_NAVIGATION.OFFERSCOUPON);
      //   DrawerCloseHandler();
      // },
    },
    {
      icon: faClock,
      text: "My Ratings & Reviews",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.RATING_REVIEW);
        DrawerCloseHandler();
      },
    },
    {
      icon: faBell,
      text: "Notifications",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
        DrawerCloseHandler();
      },
    },
    {
      icon: faCartPlus,
      text: "Request New Product",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT);
        DrawerCloseHandler();
      },
    },
    {
      icon: faAddressCard,
      text: "About Us",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.ABOUT_US);
        DrawerCloseHandler();
      },
    },
    {
      icon: faHeadset,
      text: "Customer Support",
      onClick: () => {
        navigate(ROUTES_NAVIGATION.CUSTOMER_SUPPORT);
        DrawerCloseHandler();
      },
    },
    {
      icon: faArrowRight,
      text: "Review Us",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
        DrawerCloseHandler();
      },
    },
    {
      icon: faArrowRightFromBracket,
      text: "Logout",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
        DrawerCloseHandler();
      },
    },
  ];

  return (
    <>
      {isDrawerOpen && (
        <div
          className="offcanvas offcanvas-start mob-drawer-width offcanvas-lg  show"
          tabIndex="-1"
        >
          <div className="offcanvas-header edobo-red ">
            <div
              className="navbar-brand"
              onClick={() => {
                navigate(ROUTES_NAVIGATION.PROFILE);
                DrawerCloseHandler();
              }}
            >
              <img
                src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
                alt="Avatar Logo"
                style={{ width: "40px" }}
                className="rounded-pill"
              />
            </div>
            <h5
              className="offcanvas-title d-flex align-items-center gap-2"
              id="mobDrawerViewLabel"
            >
              Saurabh Maurya
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white fw-bold"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={DrawerCloseHandler}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-group list-group-flush">
              {/* Map over menuItems array to render list items */}
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="list-group-item mob-drawer-manu-list  d-flex justify-content-between align-items-center"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={menuItem?.onClick}
                >
                  <div>
                    <FontAwesomeIcon icon={menuItem.icon} className="pe-3" />
                    {menuItem.text}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </li>
              ))}
              {/* {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="list-group-item mob-drawer-manu-list"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={menuItem.onClick}
                >
                  <FontAwesomeIcon icon={menuItem.icon} />
                  {menuItem.text}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className=" d-flex "
                  />
                </li>
              ))} */}
            </ul>
            <div className="p-3">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>

            <div className="p-3">
              <div className="d-flex gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faExclamation} className="mt-1" />
                <div>Application Info</div>
              </div>
              <div className="mt-1 ps-3 fs-10 text-danger">Version 1.1.0</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobDrawerComponent;
