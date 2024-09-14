import React from "react";

function Notdelivery() {
  return (
    <>
      <div className="container pt-3">
        <div className="fs-3">We are not delivering here yet !</div>
        <div className="fs-3 mb-1">Will notify you on arrival.</div>
        <div className="d-flex justify-content-between p-3">
          <div className="fs-6 mt-1 me-1">Try a different location?</div>
          <button className="btn btn-warning ">select location</button>
        </div>
      </div>
    </>
  );
}

export default Notdelivery;
