import React from "react";
import useOnlineStatus from "./useOnlineStatus";
import Nointernetimage from "../../assets/Icon/nointernet.png";

function Nointernet() {
  const online = useOnlineStatus();

  if (online) {
    return null;
  }

  return (
    <>
      <div className="container d-block text-center pt-5">
        <img src={Nointernetimage} alt="No internet" width={200} />
        <div className="fs-1 fw-bold mt-5">Whoops!</div>
        <div className="d-flex justify-content-evenly my-2">
          <div className="fs-6 fw-bold text-capitalize mt-1">
            No internet connection
          </div>
          <button
            className="btn btn-warning"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Nointernet;
