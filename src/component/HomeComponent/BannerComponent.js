import React from "react";

const BannerComponent = (props) => {
  const {} = props;
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide container-lg my-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63b92e60100559036d153cbf/web-banner-dombivli-launch-final-2048x2048.png"
            className="d-block w-100 rounded-4"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/63cbf28e271053041c37e407/final-1--2048x2048.png"
            className="d-block w-100 rounded-4"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64b64a10981db345e7607cb5/web-free-milk-3-days-2048x2048.png"
            className="d-block w-100 rounded-4"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6368c40b0b491a8264f83ced/vegetables1-2048x2048.jpg"
            className="d-block w-100 rounded-4"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerComponent;
