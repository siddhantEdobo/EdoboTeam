import React, { useEffect, useState } from "react";
import "./ProductDetailsImageComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ProductDetailsImageComponent = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [ImagePreview, setImagePreview] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    setImagePreview(images[index]);
  }, [index, images]);

  
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-image-preview-container">
      <img src={ImagePreview} className="image-preview" alt="Product" />
      <div className="image-preview-slider-container">
        <button onClick={handlePrev} aria-label="Previous Image">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {images.map((item, i) => (
          <img
            key={i}
            className={`slider-images ${i === index ? "active" : ""}`} // Highlight the active image
            src={item}
            width={"100px"}
            alt={`Image ${i + 1}`}
            onClick={() => setIndex(i)} // Clicking on thumbnail sets the index
          />
        ))}
        <button onClick={handleNext} aria-label="Next Image">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsImageComponent;
