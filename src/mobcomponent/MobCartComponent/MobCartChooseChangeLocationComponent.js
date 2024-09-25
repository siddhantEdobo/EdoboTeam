import React, { useCallback, useEffect, useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import "./MobCartChooseChangeLocationComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import MobAddAddressComponent from "../MobAddAddressCompoent";
import axios from "axios";
import Cookies from "universal-cookie";
import MobEnableLocationComponent from "../MobLocationComponent/MobEnableLocationComponent";

const MobCartChooseChangeLocationComponent = ({
  onClose = () => {},
  onConfirmLocation = () => {},
}) => {
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("auth_token");
  console.log("sadasdadasda TOKEN", token);

  const handleAddressOpen = () => {
    setIsAddressShow(true);
  };

  const handleAddressClose = () => {
    setIsAddressShow(false);
  };

  //   const onFiltersOpenCloseHandler = useCallback((toggle) => {
  //     setIsAddressShow(toggle);
  //     document.body.style.overflow = !toggle ? "auto" : "hidden";
  //   }, []);

  const deliveryAddresses = [
    {
      id: 1,
      type: "Office",
      address: "M/s Raj Infrabuilds, Chembur Camp, Chembur, Mumbai - 400 074",
    },
    {
      id: 2,
      type: "Raj Infra Developers",
      address:
        "NEAR FERTILISER METRO STATION, Pooja Apartment, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    {
      id: 3,
      type: "Raj Infrabuilds ",
      address: "Pooja Apartment, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    {
      id: 4,
      type: "Home",
      address: "Building No.7, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    {
      id: 5,
      type: "Office",
      address: "M/s Raj Infrabuilds, Chembur Camp, Chembur, Mumbai - 400 074",
    },
    {
      id: 6,
      type: "Office",
      address:
        "NEAR FERTILISER METRO STATION, Pooja Apartment, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    {
      id: 7,
      type: "Office",
      address: "M/s Raj Infrabuilds, Chembur Camp, Chembur, Mumbai - 400 074",
    },
    {
      id: 8,
      type: "Office",
      address:
        "NEAR FERTILISER METRO STATION, Pooja Apartment, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    {
      id: 9,
      type: "Office",
      address: "M/s Raj Infrabuilds, Chembur Camp, Chembur, Mumbai - 400 074",
    },
    {
      id: 10,
      type: "Office",
      address:
        "NEAR FERTILISER METRO STATION, Pooja Apartment, Chembur Camp, Chembur, Mumbai - 400 089",
    },
    // Add more addresses as needed
  ];

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/address/get",

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          console.log(response.data);
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Addresses"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container-fluid m-0 p-0 t">
        <div className="mob-cart-choose-change-location-container-heading">
          <div className="">Choose Delivery Address</div>
        </div>

        <div className="mt-3">
          {data?.data && data.data.length > 0 ? (
            data.data.map((address) => (
              <div
                key={address.id}
                className="mob-cart-choose-change-location-border p-2"
              >
                <div className="d-flex">
                  <FontAwesomeIcon icon={faBuilding} className="faicons-size" />
                  <div className="fw-bold ps-2">{address.id}</div>
                </div>

                <div className="ps-4 mt-1">
                  {address.customer_shipping_addess}
                </div>
              </div>
            ))
          ) : (
            <div>No addresses available</div>
          )}
        </div>

        <div className="d-flex mt-3 justify-content-center">
          <div
            className="mob-cart-choose-change-location-add-new-address"
            onClick={() => {
              handleAddressOpen();
            }}
          >
            Add New Address
          </div>
        </div>
      </div>

      {isAddressShow && (
        // <>
        //   <div className="overlay"></div>
        //   <div
        //     className="offcanvas offcanvas-bottom show h-75 rounded-top-5"
        //     tabIndex="-2"
        //     data-bs-backdrop="static"
        //     data-bs-scroll="false"
        //   >
        //     <div className="offcanvas-header">
        //       <h5 className="offcanvas-title w-100 fs-14 fw-bold">
        //         Fill your address
        //         <div className="fs-10">Where you want to deliver</div>
        //       </h5>
        //       <button
        //         type="button"
        //         className="btn-close"
        //         onClick={() => {
        //           handleAddressClose();
        //         }}
        //       ></button>
        //     </div>
        //     <div className="offcanvas-body small">
        //       {/* <MobFilterComponent /> */}
        //       <MobAddAddressComponent />
        //     </div>
        //   </div>
        // </>

        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-100 "
            tabIndex="-1"
            data-bs-backdrop="fixed"
            data-bs-scroll="false"
          >
            <div className="offcanvas-body  m-0 p-0">
              <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close faicons-size "
                  onClick={() => {
                    // onShortOrderOpenCloseHandler(false);
                    onClose();
                  }}
                ></button>
              </div>
              {/* <MobHeaderComponent pinCode={pinCode} /> */}
              <MobEnableLocationComponent
                onClose={() => {
                  // setIisEnableLocationShow(false);
                  onClose();
                }}
                onConfirm={(pinCode) => {
                  onConfirmLocation(pinCode);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobCartChooseChangeLocationComponent;
