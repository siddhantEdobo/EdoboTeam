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
import Edobostorecomponent from "../EdoboStoreComponent";

const HeaderComponent = () => {
  const { setShowLoader } = useLoader();
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState(0);

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
        <div className="container-fluid">
          <img
            src="https://www.edobo.in/s/60a39f1801d30d79c4caa94b/originals/64de15fc3fb6e72840fe1abf/logo-for-web.svg"
            alt="Bootstrap"
            className="bg-light"
            width={"10%"}
            height={"100%"}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto align-items-center flex-grow-1">
              <li className="nav-item dropdown" ref={dropdownRef}>
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
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
                                  className="p-1 fs-12 fw-semibold cursor-pointer" // Add cursor-pointer to indicate clickable
                                  onClick={handleSubcategoryClick} // Close dropdown when clicking on subcategory
                                >
                                  <Link
                                    to={subcategory.url}
                                    className="p-1 fs-12 fw-semibold cursor-pointer text-black text-decoration-none "
                                  >
                                    {subcategory.name}
                                  </Link>
                                </p>

                                {/* <div className="">
                                  <img
                                    src="https://www.edobo.in/s/60a39f1801d30d79c4caa94b/65e6e358b60454dc19f7aa3f/unnamed-320x320.png"
                                    alt="demo image"
                                  />
                                </div> */}
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
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search everything at edobo online and in-store"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-black"
                      width="40"
                      height="40"
                    />
                  </span>
                </div>
              </li>

              <li className="nav-item ">
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  // className="nav-link active text-white"
                  // aria-current="page"
                  onClick={() => {
                    navigate(ROUTES_NAVIGATION.OFFERSCOUPON);
                  }}
                >
                  Coupon & Offers
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
                      className="dropdown-item cursor-pointe"
                      onClick={() => {
                        navigate(
                          ROUTES_NAVIGATION.PROFILE +
                            "/" +
                            ROUTES_NAVIGATION.USER_ACCOUNT
                        );
                      }}
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
              </li>

              <li className="nav-item">
                <div
                  className="nav-link text-white cursor-pointer text-white "
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <FontAwesomeIcon icon={faStore} height="100" width="30" />
                  <div className="position-relative d-inline-block ">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      width="50"
                      height="100"
                    />
                    <span className="cart-number">0</span>
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
