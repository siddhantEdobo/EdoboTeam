import React from "react";
import edobostore from "../../assets/Icon/Edobo-store.png";
import {
  faClock,
  faLaptopMedical,
  faPhone,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Edobostoredetails() {
  const Storedata = {
    id: 1,
    image: edobostore,
    storeName: "Ulwe edobo smart store",
    address:
      "Shop No 01, Lakhani Aura, Goyenka School, 02 & 03, opposite GP Road, Sector 5, Ulwe, Navi Mumbai, Maharashtra 410206",
    open: "Open untill 10:00 pm",
    openingHours: "Mon - Sun: 7:00 am - 10:00 pm",
    phoneNumber: "+91 9820000000",
    direction: "Get directions",
    button1: "Find another store",
    button2: "Make this my store",

    services: [
      {
        serviceName: "Pharmacy",
        hours: "Open until 10:00 pm",
        description: "Refill a prescription",
      },
      {
        serviceName: "Pharmacy",
        hours: "Open until 10:00 pm",
        description: "Refill a prescription",
      },
      {
        serviceName: "Pharmacy",
        hours: "Open until 10:00 pm",
        description: "Refill a prescription",
      },
      {
        serviceName: "Pharmacy",
        hours: "Open until 10:00 pm",
        description: "Refill a prescription",
      },
      {
        serviceName: "Pharmacy",
        hours: "Open until 10:00 pm",
        description: "Refill a prescription",
      },
    ],
  };

  return (
    <div className="container mt-5 ">
      <div className="fs-5 fw-bold my-4">edobo smart store </div>

      <div className="row">
        <div className="col-5">
          <img
            src={Storedata.image}
            alt={Storedata.storeName}
            width={500}
          ></img>
        </div>
        <div className="col-7">
          <div className="fs-4 fw-bold">{Storedata.storeName}</div>
          <div className="fs-6 w-75 ">{Storedata.address}</div>
          <div className="fs-6 my-2">
            <FontAwesomeIcon icon={faClock} className="me-2" />
            {Storedata.open}
          </div>
          <div className="fs-6">
            <FontAwesomeIcon icon={faPhone} />
            {Storedata.phoneNumber}
          </div>
          <div className="fs-6 my-2">
            <FontAwesomeIcon icon={faRoute} /> {Storedata.direction}
          </div>
          <div className="d-flex">
            <button className="btn btn-danger rounded-5 me-3">
              {Storedata.button1}
            </button>
            <button className="btn btn-outline-danger rounded-5">
              {Storedata.button2}
            </button>
          </div>
        </div>
      </div>

      <h2 className="d-flex justify-content-center fw-bold my-3">
        Services, hours & contact info
      </h2>

      <div className="card shadow rounded-4">
        <div className="card-body">
          <div className="d-flex justify-content-between p-3 my-2">
            <div className="fs-6 fw-bold">Store Info</div>
            <div className="fs-6 fw-bold">
              {" "}
              <FontAwesomeIcon icon={faClock} className="me-2" />
              Open untill 10:00 pm
            </div>
            <div className="fs-6 fw-bold">
              {" "}
              <FontAwesomeIcon icon={faPhone} /> +91 9820000000
            </div>
          </div>
          <div className="fs-6 fw-bold my-3 d-flex justify-content-center text-center ">
            {" "}
            <div className="me-4">Mon - Sun</div>
            <div>7:00 am - 10:00 pm</div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="card shadow p-4">
          <div className="p-4 fs-6 fw-bold">Store Services</div>
          {Storedata.services.map((service, index) => (
            <div className="card-body" key={index}>
              <div className="d-flex justify-content-between">
                <div className="fw-bold fs-6 ">
                  <FontAwesomeIcon icon={faLaptopMedical} className="me-2" />
                  {service.serviceName}
                </div>
                <div className="fs-6 fw-semibold ">
                  <FontAwesomeIcon icon={faClock} className="me-2" />{" "}
                  {service.hours}
                </div>
                <div className="btn btn-outline-danger rounded-5">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edobostoredetails;
