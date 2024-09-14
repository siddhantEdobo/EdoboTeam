import React from "react";
import somethingimage from "../../assets/Icon/somthingwrong.png";

function Wosomethingwrong() {
  return (
    <>
      <div className="container pt-5 d-block text-center">
        <img
          src={somethingimage}
          alt=" Wo something is wrong"
          width={300}
          className=""
        />
        <div className="my-4">
          <div className="fs-1 fw-bold"> OH - NO! </div>
          <div className="fs-5">Something's Wrong, </div>
          <div className="fs-5">Our Best Technical Minds Are on it.</div>
          <div className="fs-6">Retry or Check back Soon!</div>
          <button className="btn btn-warning my-2 w-25">Retry</button>
        </div>
      </div>
    </>
  );
}

export default Wosomethingwrong;
