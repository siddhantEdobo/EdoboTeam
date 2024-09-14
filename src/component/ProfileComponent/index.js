// import { faPaypal } from "@fortawesome/free-brands-svg-icons";
// import {
//   faCreditCard,
//   faGear,
//   faHeart,
//   faLocationDot,
//   faShoppingBag,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { Outlet, useNavigate, useResolvedPath } from "react-router-dom";
// import ROUTES_NAVIGATION from "../../routes/routes";

// const PROFILE_LIST = [
//   {
//     id: "myAccount",
//     label: "My Account",
//     component: ROUTES_NAVIGATION.USER_ACCOUNT,
//     icon: <FontAwesomeIcon icon={faUser} />,
//   },
//   {
//     id: "order",
//     label: "Order",
//     icon: <FontAwesomeIcon icon={faShoppingBag} />,
//     component: ROUTES_NAVIGATION.USER_ORDER,
//   },
//   {
//     id: "wishlist",
//     label: "Wishlist",
//     icon: <FontAwesomeIcon icon={faHeart} />,
//     component: ROUTES_NAVIGATION.USER_WISHLIST,
//   },
//   {
//     id: "address",
//     icon: <FontAwesomeIcon icon={faLocationDot} />,
//     label: "Address",
//     component: ROUTES_NAVIGATION.USER_ADDRESS,
//   },
//   {
//     id: "payment",
//     label: "Payment",
//     icon: <FontAwesomeIcon icon={faCreditCard} />,
//     component: ROUTES_NAVIGATION.USER_PAYMENT,
//   },
//   {
//     id: "Setting",
//     label: "Setting",
//     icon: <FontAwesomeIcon icon={faGear} />,
//     component: ROUTES_NAVIGATION.USER_SETTING,
//   },
// ];

// const ProfileComponent = () => {
//   const [selectedList, setSelectedList] = useState("");
//   const navigate = useNavigate();
//   const redirectedPath = useResolvedPath();

//   useEffect(() => {
//     if (redirectedPath?.pathname) {
//       setSelectedList(redirectedPath?.pathname?.replace("/profile/", ""));
//     }
//   }, [redirectedPath?.pathname]);

//   return (
//     <div className="container">
//       <div className="">
//         {/* <div className="edobo-gray p-4">
//           <div className="fs-2"> Saurabh Maurya</div>
//           <span className="fs-6"> 9004303699</span>
//           <span className="ps-6 fs-6"> - saurabhkumar19682@gmail.com</span>
//         </div> */}
//         <div className="row ">
//           <div className="col-3">
//             <div className="profile-list-container ">
//               {PROFILE_LIST?.map((value, index) => {
//                 return (
//                   <div
//                     className={`profile-list-subcontainer  ${
//                       selectedList === value?.component && "bg-white fw-bold"
//                     }`}
//                     key={value?.id}
//                     onClick={() => {
//                       console.log(
//                         "value?.component",
//                         selectedList?.component === value?.component,
//                         selectedList?.component,
//                         value?.component
//                       );
//                       navigate(value?.component);
//                     }}
//                   >
//                     <div className="text-nowrap d-flex align-items-center">
//                       {value?.icon}
//                       <div className="ms-2">{value?.label}</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="col-9">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileComponent;

import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faCartShopping,
  faChevronRight,
  faCircleArrowRight,
  faClock,
  faCoins,
  faHeadset,
  faHeart,
  faLocationDot,
  faRightFromBracket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useResolvedPath } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import DiscountCouponComponent from "../HomeComponent/DiscountCouponComponent";

const PROFILE_LIST = [
  {
    id: "changeAddress",
    label: "Change Address",
    component: ROUTES_NAVIGATION.USER_ACCOUNT,
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
  {
    id: "myOrders",
    label: "My Orders",
    component: ROUTES_NAVIGATION.USER_ORDER,
    icon: <FontAwesomeIcon icon={faBars} />,
  },
  {
    id: "connectEarn",
    label: "Connect & Earn",
    // component: ROUTES_NAVIGATION.USER_ACCOUNT,
    icon: <FontAwesomeIcon icon={faCoins} />,
  },
  {
    id: "myWallet",
    label: "My Wallet",
    // component: ROUTES_NAVIGATION.USER_ACCOUNT,
    icon: <FontAwesomeIcon icon={faWallet} />,
  },

  // {
  //   id: "order",
  //   label: "Order",
  //   icon: <FontAwesomeIcon icon={faShoppingBag} />,
  //   component: ROUTES_NAVIGATION.USER_ORDER,
  // },
  {
    id: "shoppingList",
    label: "Shopping List",
    icon: <FontAwesomeIcon icon={faHeart} />,
    component: ROUTES_NAVIGATION.USER_WISHLIST,
  },
  {
    id: "offers",
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    label: "Offers",
    component: ROUTES_NAVIGATION.USER_ADDRESS,
  },
  {
    id: "myRatingReview",
    label: "My Ratings & Reviews",
    icon: <FontAwesomeIcon icon={faClock} />,
    component: ROUTES_NAVIGATION.USER_PAYMENT,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <FontAwesomeIcon icon={faBell} />,
    component: ROUTES_NAVIGATION.USER_SETTING,
  },
  {
    id: "requestNewProduct",
    label: "Request New Product",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    component: ROUTES_NAVIGATION.USER_SETTING,
  },

  {
    id: "aboutUs",
    label: "About Us",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    component: ROUTES_NAVIGATION.USER_SETTING,
  },
  {
    id: "customerSupport",
    label: "Customer Support",
    icon: <FontAwesomeIcon icon={faHeadset} />,
    component: ROUTES_NAVIGATION.USER_SETTING,
  },
  {
    id: "reviewUs",
    label: "Review Us",
    icon: (
      <FontAwesomeIcon icon={faCircleArrowRight} className="text-warning" />
    ),
    component: ROUTES_NAVIGATION.USER_SETTING,
  },
  {
    id: "logout",
    label: "Logout",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    component: ROUTES_NAVIGATION.USER_SETTING,
  },
];

const ProfileComponent = () => {
  const [selectedList, setSelectedList] = useState("");
  const navigate = useNavigate();
  const redirectedPath = useResolvedPath();

  useEffect(() => {
    if (redirectedPath?.pathname) {
      setSelectedList(redirectedPath?.pathname?.replace("/profile/", ""));
    }
  }, [redirectedPath?.pathname]);

  return (
    <div className="container mb-5">
      <DiscountCouponComponent />

      <div className="">
        {/* <div className="edobo-gray p-4">
          <div className="fs-2"> Saurabh Maurya</div>
          <span className="fs-6"> 9004303699</span>
          <span className="ps-6 fs-6"> - saurabhkumar19682@gmail.com</span>
        </div> */}
        <div className="row ">
          <div className="col-3">
            <div className="profile-list-container">
              {PROFILE_LIST?.map((value, index) => {
                return (
                  <div
                    className={`profile-list-subcontainer  ${
                      selectedList === value?.component &&
                      "bg-danger fw-bold text-white"
                    }`}
                    key={value?.id}
                    onClick={() => {
                      console.log(
                        "value?.component",
                        selectedList?.component === value?.component,
                        selectedList?.component,
                        value?.component
                      );
                      navigate(value?.component);
                    }}
                  >
                    <div className="d-flex justify-content-between w-100">
                      <div className="text-nowrap d-flex align-items-center cursor-pointer ">
                        {value?.icon}
                        <div className="ms-2">{value?.label}</div>
                      </div>
                      <div className="cursor-pointer">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
