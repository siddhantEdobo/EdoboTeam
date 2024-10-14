import React, { useState } from "react";
import "./MobProfileMyAccountComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images } from "../../../assets";
import {
  faChevronRight,
  faList,
  faCoins,
  faWallet,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import MobProfileEditAccount from "./MobProfileEditAccount";
import MobAddFamilyMemberComponent from "./MobAddFamilyMemberComponent";
import { useSelector } from "react-redux";

const MobProfileMyAccountComponent = ({ onClose }) => {
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [isFamilyShow, setIsFamilyShow] = useState(false);

  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const [isAddFamilyMember, setIsFamilyMember] = useState(1);

  const handleAddSuccess = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleAddressOpen = () => {
    setIsAddressShow(true);
  };

  const handleAddressClose = () => {
    setIsAddressShow(false);
  };

  const handleFamilyOpen = () => {
    setIsFamilyShow(true);
  };

  const handleFamilyClose = () => {
    setIsFamilyShow(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const PROFILEDATA = [
    { icon: faList, text: "My Orders", onClick: () => {} },

    {
      icon: faCoins,
      text: "Connect & Earn",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART);
      },
    },

    {
      icon: faWallet,
      text: "My Wallet",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
      },
    },
    {
      icon: faClock,
      text: "My Ratings & Reviews",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
      },
    },
    {
      icon: faLocationDot,
      text: "Home",
      onClick: () => {
        // navigate(ROUTES_NAVIGATION.CART); I will add navigation path here
      },
    },
  ];

  // const name = useSelector((state) => state.a.userName);
  const email = useSelector((state) => state.profile.email);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const mobNumber = useSelector((state) => state.profile.mobNumber);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="fs-6 p-3 border-bottom pb-1">My Account</div>
        <div className="container">
          <div className="card mob-profile-myaccount-card-container ">
            <div className="mob-profile-myaccount-component-card-edit-container rounded-1 p-2 ">
              <div className="mob-profile-myaccount-component-card-edit ">
                <div className="d-flex gap-5 w-100">
                  <div className="fw-medium fs-6">
                    {firstName + " "}

                    {lastName}
                  </div>
                  {/* <div className="ps-3 pe-2">(Admin)</div> */}
                </div>

                <div
                  className="mob-profile-myaccount-component-edit-container-img"
                  onClick={() => {
                    handleAddressOpen();
                  }}
                >
                  <img src={Images.edit} alt="edit" className="w-100 h-100" />
                </div>
              </div>
              <div className="fs-12">{email}</div>

              <div className="d-flex justify-content-between pt-2">
                <div className="fs-12 text-secondary">{mobNumber}</div>
                <div className="d-flex gap-2 cursor-pointer">
                  <div className="fw-bold text-uppercase">
                    cancel Authorisation
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2">
              {PROFILEDATA.map((menuItem, index) => (
                <li
                  key={index}
                  className="mob-profile-myaccount-component-border d-flex justify-content-between align-items-center p-2 pt-3 pb-3"
                  onClick={() => {
                    // console.log("--------------");
                    menuItem?.onClick();
                  }}
                >
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={menuItem.icon}
                      className=" faicons-size pe-3"
                    />
                    <div className="fs-13">{menuItem.text}</div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </li>
              ))}
            </div>
          </div>

          {/* <div className="d-flex justify-content-between px-2 mt-3 mob-profile-my-account-component-family-heading">
            My Family
            <div className="d-flex gap-3 cursor-pointer">
              <div
                className="text-danger"
                onClick={() => {
                  handleFamilyOpen();
                }}
              >
                Add Family Member
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="faicon-size pt-1"
              />
            </div>
          </div> */}

          {/* {isAddFamilyMember > 0 ? (
            <div className="mt-3 pt-2 pb-2 card mob-profile-my-account-component-add-family-member">
              <div className="d-flex justify-content-around align-items-center">
                <div className="fw-bold">Karan Mehta</div>
                <div className="fs-10 fw-bold">(Husband)</div>
                <div className="text-success fs-10 fw-bold">
                  PENDING FOR ACCEPTANCE
                </div>
              </div>
              <div className="ps-3 py-1">testmail@gmail.com</div>
              <div className="d-flex justify-content-between">
                <div className="ps-3">97674456664</div>
                <div className="pe-3 text-danger cursor-pointer">Delete</div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={Images.myFamily}
                alt="paynow"
                className="w-25 h-25 mt-3"
              />
            </div>
          )} */}
        </div>
      </div>

      {isAddressShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title w-100 fs-14 fw-bold">
                Edit Account
                {/* <div className="fs-10">Where you want to deliver</div> */}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  handleAddressClose();
                }}
              ></button>
            </div>
            <div className="offcanvas-body small">
              <MobProfileEditAccount />
            </div>
          </div>
        </>
      )}

      {isFamilyShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title w-100 fs-14 fw-bold">
                Add Family Member
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  handleFamilyClose();
                  setIsFamilyShow(false);
                }}
              ></button>
            </div>
            <div className="offcanvas-body small">
              <MobAddFamilyMemberComponent onClose={handleFamilyClose} />
            </div>
          </div>
        </>
      )}
      {showSuccess && (
        <div className="alert alert-success" role="alert">
          Invitation sent successfully.
        </div>
      )}
    </>
  );
};

export default MobProfileMyAccountComponent;
