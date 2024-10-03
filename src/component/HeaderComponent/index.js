import React, { useContext, useEffect, useRef, useState } from "react";
import { useLoader } from "../../context/LoaderProvider";
import { Images } from "../../assets";
import "./HeaderComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
  faSearch,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import GlobalContext from "../../context/GlobalContext";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router";
import ShowCartSummaryComponent from "../ShowCartSummaryComponent";
import ModalComponent from "../LoginComponent/ModalComponent";
import LoginComponent from "../LoginComponent";
import { Link } from "react-router-dom";
import SubheaderComponent from "./SubheaderComponent";
import companyLogo from "../../assets/edobo-logo.jpg";
import categoryMenu from "../../assets/Icon/category.png";
import Edobostorecomponent from "../EdoboStoreComponent";
import { commonColor } from "../../utils/commonColor";
import favourite from "../../assets/Icon/favourite.png";
import cart from "../../assets/Icon/cart.png";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const { setShowLoader } = useLoader();
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState(0);
  const { totalItems, totalPrice } = useSelector((store) => store.myCart);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Reference to the dropdown menu container

  console.log("d ref", dropdownRef);
  console.log("m ref", menuRef);

  const handleCategoryClick = (categoryId, event) => {
    event.preventDefault();
    setActiveCategory(categoryId === activeCategory ? 0 : categoryId);
    menuRef.current.classList.remove("show");
  };

  const handleSubcategoryClick = () => {
    menuRef.current.classList.remove("show");
  }; // State to track active category

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveCategory(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    setShowLoader(false);
  }, [setShowLoader]);

  const Categorieslist = {
    categories: [
      {
        id: 1,
        name: "IN-HOUSE PANTRY",
        subcategories: [
          {
            id: 1,
            name: "Grocery",
            url: "/cart",
          },
        ],
      },
      {
        id: 2,
        name: "FRUITS & VEGETABLES",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
            url: "/order-delay",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
            url: "/login",
          },
          {
            id: 3,
            name: "Cut Vegetables",
            url: "/order-delay",
          },
          {
            id: 4,
            name: "Fruits",
            url: "/login",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
            url: "/login",
          },
        ],
      },
      {
        id: 3,
        name: "GROCERY",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
            url: "",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
            url: "",
          },
          {
            id: 3,
            name: "Cut Vegetables",
            url: "",
          },
          {
            id: 4,
            name: "Fruits",
            url: "",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
            url: "",
          },
        ],
      },
      {
        id: 4,
        name: "GHEE & OIL",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
            url: "",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
            url: "",
          },
          {
            id: 3,
            name: "Cut Vegetables",
            url: "",
          },
          {
            id: 4,
            name: "Fruits",
            url: "",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
            url: "",
          },
        ],
      },
      {
        id: 5,
        name: "BEVERAGES",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
          },
          {
            id: 3,
            name: "Cut Vegetables",
          },
          {
            id: 4,
            name: "Fruits",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
          },
        ],
      },
      {
        id: 6,
        name: "EGG MEAT & SEA FOODS",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
          },
          {
            id: 3,
            name: "Cut Vegetables",
          },
          {
            id: 4,
            name: "Fruits",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
          },
        ],
      },
      {
        id: 7,
        name: "CHOCOLATES & ICE CREAM",
        subcategories: [
          {
            id: 1,
            name: "Vegetables",
          },
          {
            id: 2,
            name: "Exotic Vegetables",
          },
          {
            id: 3,
            name: "Cut Vegetables",
          },
          {
            id: 4,
            name: "Fruits",
          },
          {
            id: 5,
            name: "Herbs & Leafy Vegetables",
          },
        ],
      },
      {
        id: 8,
        name: "DAIRY & BAKERY",
        subcategories: [],
      },
      {
        id: 9,
        name: "SNACKS & PACKAGED FOODS",
        subcategories: [],
      },
      {
        id: 10,
        name: "PERSONAL CARE",
        subcategories: [],
      },
      {
        id: 11,
        name: "CLEANER & HOUSEHOLDS",
        subcategories: [],
      },
      {
        id: 12,
        name: "BABY CARE",
        subcategories: [],
      },
      {
        id: 13,
        name: "HEALTH & WELLNESS",
        subcategories: [],
      },
      {
        id: 14,
        name: "MOBILES ACCESSORIES",
        subcategories: [],
      },
      {
        id: 15,
        name: "PERSONAL CARE",
        subcategories: [],
      },
      {
        id: 16,
        name: "CLEANER & HOUSEHOLDS",
        subcategories: [],
      },
      {
        id: 17,
        name: "BABY CARE",
        subcategories: [],
      },
      {
        id: 18,
        name: "HEALTH & WELLNESS",
        subcategories: [],
      },
      {
        id: 19,
        name: "MOBILES ACCESSORIES",
        subcategories: [],
      },
    ],
  };

  console.log("category", Categorieslist);

  return (
    <>
      <nav className="navbar navbar-expand-lg edobo-red container-fluid fixed-top">
        <div className="container-fluid m-10px">
          <img
            alt="Bootstrap"
            src={companyLogo}
            className="bg-light"
            width={"10%"}
            height={"55px"}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">005404</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto align-items-center flex-grow-1">
              <li className="nav-item dropdown" ref={dropdownRef}>
                <a
                  className="nav-link align-items-center d-flex"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    onClick={() => navigate(ROUTES_NAVIGATION.HOME)}
                    src={categoryMenu}
                    width={"15px"}
                    height={"15px"}
                    style={{ marginRight: "5px", marginLeft: "10px" }}
                  />
                  <span>All Categories</span>
                </a>
                <ul className="dropdown-menu" ref={menuRef}>
                  <div className="d-flex align-items-start">
                    <div
                      className="nav flex-row nav-pills me-3 header-categories-menu"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      {Categorieslist.categories.map((category) => (
                        <button
                          key={category.id}
                          className={`nav-link header-categories-btn d-flex justify-content-between align-items-center ${
                            category.id === activeCategory
                              ? "active-button"
                              : "inactive-button"
                          }`}
                          id={`v-pills-category-${category.id}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#v-pills-category-${category.id}`}
                          type="button"
                          role="tab"
                          aria-controls={`v-pills-category-${category.id}`}
                          aria-selected={
                            category.id === activeCategory ? "true" : "false"
                          }
                          onClick={(e) => handleCategoryClick(category.id, e)}
                        >
                          {category.name}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      ))}
                    </div>
                    <div
                      className="tab-content"
                      id="v-pills-tabContent"
                      style={{
                        width: "300px",
                        overflowX: "hidden",
                        overflowY: "scroll",
                        height: "550px",
                        padding: "5px",
                      }}
                    >
                      {Categorieslist.categories.map((category) => (
                        <div
                          key={category.id}
                          className={`tab-pane fade${
                            category.id === activeCategory ? " show active" : ""
                          }`}
                          id={`v-pills-category-${category.id}`}
                          role="tabpanel"
                          aria-labelledby={`v-pills-category-${category.id}-tab`}
                          tabIndex="0"
                        >
                          {category.subcategories.length > 0 ? (
                            category.subcategories.map((subcategory) => (
                              <div>
                                <p
                                  key={subcategory.id}
                                  className="p-1 fs-12 fw-semibold cursor-pointer"
                                  onClick={handleSubcategoryClick}
                                >
                                  <Link
                                    to={subcategory.url}
                                    className="p-1 fs-12 fw-semibold cursor-pointer text-black text-decoration-none "
                                  >
                                    {subcategory.name}
                                  </Link>
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="mt-5 fs-5 justify-content-center text-capitalize ">
                              No subcategories available. Will be added soon.
                            </p>
                          )}
                          {category.id === activeCategory && (
                            <div className="">
                              <img
                                src="https://www.edobo.in/s/60a39f1801d30d79c4caa94b/65e6e358b60454dc19f7aa3f/unnamed-320x320.png"
                                alt="Your"
                                width={200}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item flex-grow-1 d-flex justify-content-end">
                <div class="input-group" style={{ position: "relative" }}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search everything at edobo online and in-store"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{ borderRadius: "50px", height: "40px" }}
                  />
                  <span
                    class="input-group-text"
                    id="basic-addon1"
                    style={{
                      position: "absolute",
                      backgroundColor: commonColor.edoboRed2,
                      color: "white",
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      top: "50%",
                      right: "1px",
                      transform: "translateY(-50%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                  </span>
                </div>
              </li>

              <li className="nav-item ">
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  onClick={() => {
                    // setIsModalOpen(true);
                    navigate(
                      ROUTES_NAVIGATION.PROFILE +
                        "/" +
                        ROUTES_NAVIGATION.USER_ORDER
                    );
                  }}
                >
                  My Orders
                </div>
              </li>
              <li className="nav-item dropdown d-flex position-relative">
                <a
                  className="nav-link dropdown-toggle text-white d-flex align-items-center"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-white"
                    width="24"
                    height="24"
                  />
                  Profile
                </a>
                <ul className="dropdown-menu dropdown-menu-end position-absolute edobo-red">
                  <li className="header-profile-menu-item">
                    <div
                      className="dropdown-item cursor-pointer d-flex align-items-center justify-content-center" // Flexbox for centering
                      onClick={() => {
                        navigate(
                          ROUTES_NAVIGATION.PROFILE +
                            "/" +
                            ROUTES_NAVIGATION.USER_ACCOUNT
                        );
                      }}
                      style={{ padding: "10px 15px" }} // Adjust padding as needed
                    >
                      My Profile
                    </div>
                  </li>

                  <li className="header-profile-menu-item">
                    <div
                      className="dropdown-item cursor-pointer "
                      onClick={() => {
                        // setIsModalOpen(true);
                        navigate(
                          ROUTES_NAVIGATION.PROFILE +
                            "/" +
                            ROUTES_NAVIGATION.USER_ORDER
                        );
                      }}
                    >
                      My Orders
                    </div>
                  </li>

                  <li className="header-profile-menu-item">
                    <div
                      className="dropdown-item cursor-pointer "
                      onClick={() => {
                        navigate(ROUTES_NAVIGATION.PROFILE);
                      }}
                    >
                      My Address
                    </div>
                  </li>
                  <li className="header-profile-menu-item">
                    <div
                      className="dropdown-item cursor-pointer "
                      onClick={() => {
                        // setIsModalOpen(true);
                      }}
                    >
                      Settings
                    </div>
                  </li>
                  <li className="header-profile-menu-item">
                    <div
                      className="dropdown-item cursor-pointer "
                      onClick={() => {
                        // setIsModalOpen(true);
                        navigate(
                          ROUTES_NAVIGATION.PROFILE +
                            "/" +
                            ROUTES_NAVIGATION.USER_WISHLIST
                        );
                      }}
                    >
                      My Favorite
                    </div>
                  </li>
                </ul>
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  onClick={() => {
                    // setIsModalOpen(true);
                    navigate(
                      ROUTES_NAVIGATION.PROFILE +
                        "/" +
                        ROUTES_NAVIGATION.USER_WISHLIST
                    );
                  }}
                >
                  <img
                    src={favourite}
                    style={{ height: "30px", width: "25px" }}
                  />
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <div className="position-relative d-inline-block ">
                    <div>
                      <img
                        src={cart}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <span className="cart-number">{totalItems}</span>
                    </div>
                    <span
                      className="text-sm text-gray-80"
                      style={{ fontSize: "10px" }}
                    >
                      ₹{totalPrice?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Enable both
      </button> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <ShowCartSummaryComponent />
      </div>

      <SubheaderComponent />

      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <LoginComponent
            onSuccess={() => {
              setIsModalOpen(false);
            }}
          />
        </ModalComponent>
      )}
    </>
  );
};

export default HeaderComponent;
