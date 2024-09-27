import React from "react";

const UVBannerComponent = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide container-lg home-container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src="https://res.cloudinary.com/drpmtab2a/image/upload/v1659159546/Edobo/Footer/desktop%20view/USP_animation_Web_GIF-01_vbznnb.gif"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default UVBannerComponent;
