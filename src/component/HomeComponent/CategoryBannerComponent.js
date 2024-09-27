import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryBannerComponent = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container-lg home-container">
      <h3 className="fs-4 pb-3">Explore New Categories</h3>
      <Slider {...settings}>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100 bg-denger p-3"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/46b8381f-b476-47ac-8f35-6a590c11e5ee-Zepto%E2%80%A8Cafe.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/b51f4ec8-ac56-458a-b0b2-a0c9b867cfd2.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/7efefe85-f809-4c0e-9d62-e2cf870e3f6e-Gift_%E2%80%A8Store.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/7efefe85-f809-4c0e-9d62-e2cf870e3f6e-Gift_%E2%80%A8Store.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/7efefe85-f809-4c0e-9d62-e2cf870e3f6e-Gift_%E2%80%A8Store.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/1df5d6da-214e-4085-92ba-5ea975265ddf-Party_Essentials.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/b8c20a75-7e81-4c93-842a-bf2704774b7e-Kitchen__needs.png"
              alt="..."
            />
          </div>
        </div>
        <div className="category-image-container">
          <div className="ms-3">
            <img
              className="d-flex h-100"
              src="https://cdn.zeptonow.com/production///tr:w-160,ar-264-366,pr-true,f-webp,q-80/inventory/banner/4a391339-11df-4ce8-86b7-d91503352189-Organic_%E2%80%A8Food.png"
              alt="..."
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategoryBannerComponent;
