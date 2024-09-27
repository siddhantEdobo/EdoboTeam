import {
  faCartShopping,
  faClock,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../assets/Icon/store.png";
import map from "../../assets/Icon/map.png";
import storelogo from "../../assets/Icon/store-bg.png";

function Edobostorecomponent() {
  const navigate = useNavigate();
  const closeButtonRef = useRef();

  const addresses = [
    {
      store_name: "Ulwe edobo smart store",
      address: "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03",
      open_time: "7:00 am",
      close_time: "10:00 pm",
    },
    {
      store_name: "Belapur edobo smart store",
      address: "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03",
      open_time: "7:00 am",
      close_time: "10:00 pm",
    },
    {
      store_name: "Panvel edobo smart store",
      address: "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03",
      open_time: "7:00 am",
      close_time: "10:00 pm",
    },
    {
      store_name: "Panvel edobo smart store",
      address: "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03",
      open_time: "7:00 am",
      close_time: "10:00 pm",
    },
    {
      store_name: "Panvel edobo smart store",
      address: "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03",
      open_time: "7:00 am",
      close_time: "10:00 pm",
    },
  ];

  return (
    <>
      <div className="offcanvas-header bg-dark-subtle edobo-red">
        <div className="d-flex text-bg-black  m-2">
          <img src={store} alt="store logo" />
        </div>
        <div className="d-flex w-100 justify-content-between ">
          <h6 className="offcanvas-title text-white" id="offcanvasRightLabel">
            Edobo Smart Store
          </h6>
          <p className="me-2 text-white fs-6">3 item</p>
        </div>

        <button
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="btn-close bg-dark bg-white"
          ref={closeButtonRef}
        ></button>
      </div>

      <div className="offcanvas-body">
        <p className="fs-6 fw-semibold mb-2">Enter zip code or city, state</p>

        <div className="d-flex justify-content-between ">
          <div class="input-group  mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Enter zip code or city, state"
            />
            <span
              class="input-group-text edobo-red text-white "
              id="basic-addon1"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <img src={map} alt="map logo" className="ms-1" />
            {/* <p className="fs-12 fw-bolder">Map View</p> */}
          </div>
        </div>

        <div className="d-flex">
          <FontAwesomeIcon icon={faLocationDot} className="fs-6 me-2" />
          <p className="fs-6 fw-semibold mb-2 text-decoration-underline ">
            Use my current location
          </p>
        </div>

        {addresses.length === 0 ? (
          <>
            <div className="position-absolute top-50 text-center p-5">
              <img src={storelogo} alt="store logo" width={50} />
              <h6 className="fw-bolder my-2">
                What store are you shopping at?
              </h6>
            </div>
            <div className="position-fixed bottom-0 translate-middle-y text-center">
              <div className="w-100">
                <p className="fs-6 mb-4">
                  We’d love to hear what you think!{" "}
                  <span className="fs-6 fw-bold">Give feedback</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="overflow-auto" style={{ position: "relative" }}>
            {/* Render addresses */}
            {addresses.map((address, index) => (
              <div
                className="d-flex justify-content-between align-items-center "
                key={index}
              >
                <input type="checkbox" className="me-2" />{" "}
                <div className="card shadow  mb-2">
                  <div className="card-body">
                    <h6 className="fw-semibold">{address.store_name}</h6>
                    <p className="fs-13">{address.address}</p>
                    <p className="text">
                      <FontAwesomeIcon icon={faClock} className="" /> Open:{" "}
                      {address.open_time} - Close: {address.close_time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="offcanvas-bottom">
        <div className="row m-0">
          {/* <div className="col bg-warning showcartsummar-bottom-button-container">
            <div className="fs-6 text-white">Checkout</div>
          </div> */}

          <div
            className="col bg-danger showcartsummar-bottom-button-container"
            onClick={() => {
              closeButtonRef?.current?.click();
            }}
          >
            <div className="fs-6 text-white">Save</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edobostorecomponent;
