import React from "react";

function TryDifferentlocation() {
  return (
    <>
      <div className="container pt-3">
        <div className="fs-4">We miss you too !</div>
        <div className="py-3">
          <div className="fs-6">Currently the area is not serviceable,</div>
          <div className="fs-6">We will come back soon.</div>
        </div>
        <div className="d-flex  justify-content-between p-1">
          <div className="fs-5 mt-1">Try different location?</div>
          <button className="btn btn-warning">change location</button>
        </div>
      </div>
    </>
  );
}

export default TryDifferentlocation;
