// import React from "react";
// import MobHeaderComponent from "../MobHeaderComponent";

// const MobProductDetailComponent = () => {
//   const bannerList = [
//     {
//       id: 1,
//       url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/655b4ac9eaa6f8cf25f08bcf/fnv-banner-new-400x300.png",
//       alt: "",
//       redirectUrl: "",
//     },
//     {
//       id: 2,
//       url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/655b4ac9eaa6f8cf25f08bcf/fnv-banner-new-400x300.png",
//       alt: "",
//       redirectUrl: "",
//     },
//     {
//       id: 3,
//       url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/655b4ac9eaa6f8cf25f08bcf/fnv-banner-new-400x300.png",
//       alt: "",
//       redirectUrl: "",
//     },
//   ];

//   return (
//     <>
//       <MobHeaderComponent isBack={true} headerText={"Product Detail"} />
//       <div className="container-fluid bg-info m-0 p-0">
//         <div id="carouselProductDetail" className="carousel slide ">
//           <div className="carousel-inner">
//             {bannerList?.map((value, index) => {
//               return (
//                 <div
//                   key={value?.id}
//                   className={`carousel-item${index === 0 && "acive"}`}
//                   data-bs-interval="2000"
//                 >
//                   <img
//                     loading="lazy"
//                     src={value?.url}
//                     alt=""
//                     className="d-blockw-100 h-100"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselProductDetail"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselProductDetail"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//         <div>MobProductDetailComponent</div>
//       </div>
//     </>
//   );
// };

// export default MobProductDetailComponent;

import React, { createRef, useEffect, useRef, useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import ProductDetailsImageComponent from "../../component/ProductDetailsComponent/ProductDetailsImageComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "./MobProductDetailComponent.css";
import AddToCartButton from "../../common/AddToCartButton";
import ProductCard from "../../common/ProductCard";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Slide } from "react-toastify";

// import { useLocation } from 'react-router-dom';

export const RightNavButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="btn btn-default w-100"
    >
      <FontAwesomeIcon icon={faArrowAltCircleDown} />
    </button>
  );
};

export const LeftNavButton = (props) => (
  <button
    onClick={props.onClick}
    type="button"
    className="btn btn-default w-100"
  >
    <FontAwesomeIcon icon={faArrowAltCircleUp} />
  </button>
);

const MobProductDetailComponent = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const productId = queryParams.get("productId");
  const pincode = queryParams.get("pincode");

  console.log("pincode", pincode);
  console.log("pincode", productId);

  useEffect(() => {
    const response = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v2/product-details?id=${productId}&pincode=${pincode}`
        );
        console.log(response.data);
        setData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    response();
  }, []);

  // console.log("product dataaaaa", data.data[0]);
  const IMAGES_LIST = [
    {
      id: 1,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fd993fcf6003a40d9cb3/8901058905663-2--640x640.png",
    },
    {
      id: 2,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fd2612a8bd02fcc39939/8901058897517-2--320x320.png",
    },
    {
      id: 3,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fd993fcf6003a40d9cb3/8901058905663-2--640x640.png",
    },
    {
      id: 4,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fbfa40afd76a948e858c/8901058897296-320x320.png",
    },
    {
      id: 5,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6532248c3b209fcd02075b72/20-oct-image-1--320x320.png",
    },
    {
      id: 6,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fd2612a8bd02fcc39939/8901058897517-2--320x320.png",
    },
    {
      id: 7,
      url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fec03fcf6003a40dbbb7/8906057021833-2--640x640.png",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const myImageRef = createRef();
  const navigate = useNavigate();

  const settings2 = {
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  const onImageClickHandler = (value, index) => {
    console.log('"test______>', value, index);
    setSelectedImageIndex(index);
    console.log("Product ImageRef?.current", myImageRef?.current);
  };

  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const isValidData = data && data.data[0];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Product Detail"}
        isEdoboLogo={true}

        // isEdoboLogo={true}

        // isEdoboLogo={false}
      />

      {data ? (
        <div>
          <div className="container-lg home-container p-0 mob-product-details-main-container">
            {/* <img
          loading="lazy"
          src={
            "https://i5.walmartimages.com/dfw/4ff9c6c9-b2f3/k2-_907c73c3-f16a-4d1e-854a-7e2473bf808b.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          }
          alt=""
          className="w-100 h-100"
        /> */}
            <div className=" m-2 mob-product-details-price-style fw-bold fs-6">
              {data.product_name}
            </div>
            <div className="mt-2 ">
              <div className="align-items-center">
                <div className="mob-product-details-largeimg-container">
                  <div className="mob-product-details-largeimg-subcontainer">
                    <img
                      className="product-image "
                      loading="lezy"
                      src={
                        "http://103.165.118.218/edobo/" + data.thumb_image_url
                      }
                      alt={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mob-product-details-image-container">
                <div className="d-flex overflow-auto">
                  {/* {IMAGES_LIST?.map((value, index) => {
                        return (
                          <div
                            key={value?.id}
                            className={`mob-product-details-imglist-container ${
                              selectedImageIndex === index ? "active-image" : ""
                            }`}
                            onClick={() => {
                              onImageClickHandler(value, index);
                            }}
                          >
                            <img
                              className="w-100 h-100 p-1"
                              loading="lazy"
                              src={value?.url}
                              alt={""}
                            />
                          </div>
                        );
                      })} */}
                </div>
              </div>
            </div>

            <div className="mt-2 p-2">
              <div className=" d-flex justify-content-between">
                <div className="fs-14 fw-bold mt-2">{data.alias}</div>
                <AddToCartButton />
              </div>

              <div className="d-flex">
                <div className="fs-14 fw-bold">{data.compare_price}</div>
                <div className="fw-bold text-decoration-line-through mob-product-details-price-style text-danger">
                  {data.price}
                </div>
              </div>
            </div>
            <div className="mt-2 bg-body-secondary">
              <div className="mt-2 bg-body-secondary">
                <div className="tab-scroll-container">
                  <div className="nav nav-underline">
                    {[
                      "Description",
                      "Key-benefits",
                      "Product-info",
                      // "Nutrition-fac",
                    ].map((tab) => (
                      <div
                        key={tab}
                        className="nav-item"
                        onClick={() => handleTabClick(tab)}
                      >
                        <div
                          className={`nav-link text-secondary ${
                            activeTab === tab ? "active text-black" : ""
                          }`}
                        >
                          {tab
                            .replace("-", " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              {activeTab === "Description" && (
                <div className="p-2">{data.long_description}</div>
              )}
              {activeTab === "Key-benefits" && (
                <div className="p-2">
                  Best Prices & Offers: Best price destination with offers
                  directly from the manufacturers.
                </div>
              )}
              {activeTab === "Product-info" && (
                <div className="p-2">
                  Please refer to product packaging for expiry.
                </div>
              )}
              {activeTab === "Nutrition-fac" && (
                <div className="p-2">
                  Contains Fibre, Folic Acid, Potassium. Beetroot helps with
                  improved blood flow, improves digestive health, and fights
                  inflammation.
                </div>
              )}
            </div>

            <div className="mt-2 ">
              <div className="fs-6 fw-bold mob-proudct-details-related-bg p-2">
                Related Products
              </div>
              <div className="gap-2 g-3">
                <Slider {...settings2}>
                  {[...Array(6)].map((value, index) => {
                    return (
                      <div key={index} className=" p-2">
                        <div className="edititable-product-image-container">
                          <ProductCard
                            imageSrc={
                              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
                            }
                            title={"Green Masala Milk"}
                            price={"₹ 41.3"}
                            mrp={"₹ 51.3"}
                            onAddtoCartClick={() => {
                              console.log("___________________");
                            }}
                            onClick={() => {
                              navigate(
                                ROUTES_NAVIGATION.PRODUCT_DETAILS +
                                  "/" +
                                  "Green Masala Milk"
                                    .toLocaleLowerCase()
                                    .replaceAll(" ", "-")
                              );
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="mt-2 ">
              <div className="fs-6 fw-bold mob-proudct-details-recomded-bg p-2">
                Recommended Products
              </div>
              <div className="gap-2 g-3">
                <Slider {...settings2}>
                  {[...Array(6)].map((value, index) => {
                    return (
                      <div key={index} className=" p-2">
                        <div className="edititable-product-image-container">
                          <ProductCard
                            imageSrc={
                              "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
                            }
                            title={"Green Masala Milk"}
                            price={"₹ 41.3"}
                            mrp={"₹ 51.3"}
                            onAddtoCartClick={() => {
                              console.log("___________________");
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-lg home-container p-0 mob-product-details-main-container">
          {/* <img
          loading="lazy"
          src={
            "https://i5.walmartimages.com/dfw/4ff9c6c9-b2f3/k2-_907c73c3-f16a-4d1e-854a-7e2473bf808b.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          }
          alt=""
          className="w-100 h-100"
        /> */}
          <div className=" m-2 mob-product-details-price-style fw-bold fs-6">
            Exotic Vegetables
          </div>
          <div className="mt-2 ">
            <div className="align-items-center">
              <div className="mob-product-details-largeimg-container">
                <div className="mob-product-details-largeimg-subcontainer">
                  <img
                    className="product-image "
                    loading="lezy"
                    src={
                      IMAGES_LIST?.length > 0 &&
                      IMAGES_LIST[selectedImageIndex]?.url
                    }
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <div className="mob-product-details-image-container">
              <div className="d-flex overflow-auto">
                {IMAGES_LIST?.map((value, index) => {
                  return (
                    <div
                      key={value?.id}
                      className={`mob-product-details-imglist-container ${
                        selectedImageIndex === index ? "active-image" : ""
                      }`}
                      onClick={() => {
                        onImageClickHandler(value, index);
                      }}
                    >
                      <img
                        className="w-100 h-100 p-1"
                        loading="lazy"
                        src={value?.url}
                        alt={""}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-2 p-2">
            <div className=" d-flex justify-content-between">
              <div className="fs-14 fw-bold mt-2">Broccoli</div>
              <AddToCartButton />
            </div>

            <div className="d-flex">
              <div className="fs-14 fw-bold">₹50</div>
              <div className="fw-bold text-decoration-line-through mob-product-details-price-style text-danger">
                ₹100
              </div>
            </div>
          </div>

          <div className="mt-2 bg-body-secondary">
            <div className="nav nav-underline justify-content-around">
              <div
                className="nav-item"
                onClick={() => handleTabClick("Description")}
              >
                <div
                  className={`nav-link text-secondary ${
                    activeTab === "Description" ? " active text-black" : ""
                  }`}
                >
                  Description
                </div>
              </div>
              <div
                className="nav-item"
                onClick={() => handleTabClick("Key-benefits")}
              >
                <div
                  className={`nav-link text-secondary ${
                    activeTab === "Key-benefits" ? "active text-black" : ""
                  }`}
                >
                  Key benefits
                </div>
              </div>
              <div
                className="nav-item"
                onClick={() => handleTabClick("Product-info")}
              >
                <div
                  className={`nav-link text-secondary ${
                    activeTab === "Product-info" ? "active text-black" : ""
                  }`}
                >
                  Product info
                </div>
              </div>
              <div
                className="nav-item"
                onClick={() => handleTabClick("Nutrition-fac")}
              >
                <div
                  className={`nav-link text-secondary ${
                    activeTab === "Nutrition-fac" ? "active text-black" : ""
                  }`}
                >
                  Nutrition facts
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            {activeTab === "Description" && (
              <div className="p-2">
                This is the dummy text for description. This is the dummy text
                for description. This is the dummy text for description. This is
                the dummy text for description. This is the dummy text for
                description. This is the dummy text for description.
              </div>
            )}
            {activeTab === "Key-benefits" && (
              <div className="p-2">
                Best Prices & Offers Best price destination with offers directly
                from the manufacturers.
              </div>
            )}
            {activeTab === "Product-info" && (
              <div className="p-2">
                Please refer product packaging for expiry.
              </div>
            )}
            {activeTab === "Nutrition-fac" && (
              <div className="p-2">
                Contains Fibre, Folic acid, Potassium.Beetroot helps with
                improved blood flow, improve digestive health and fight
                inflammation.
              </div>
            )}
          </div>

          <div className="mt-2 ">
            <div className="fs-6 fw-bold mob-proudct-details-related-bg p-2">
              Related Products
            </div>
            <div className="gap-2 g-3">
              <Slider {...settings2}>
                {[...Array(6)].map((value, index) => {
                  return (
                    <div key={index} className=" p-2">
                      <div className="edititable-product-image-container">
                        <ProductCard
                          imageSrc={
                            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
                          }
                          title={"Green Masala Milk"}
                          price={"₹ 41.3"}
                          mrp={"₹ 51.3"}
                          onAddtoCartClick={() => {
                            console.log("___________________");
                          }}
                          onClick={() => {
                            navigate(
                              ROUTES_NAVIGATION.PRODUCT_DETAILS +
                                "/" +
                                "Green Masala Milk"
                                  .toLocaleLowerCase()
                                  .replaceAll(" ", "-")
                            );
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="mt-2 ">
            <div className="fs-6 fw-bold mob-proudct-details-recomded-bg p-2">
              Recommended Products
            </div>
            <div className="gap-2 g-3">
              <Slider {...settings2}>
                {[...Array(6)].map((value, index) => {
                  return (
                    <div key={index} className=" p-2">
                      <div className="edititable-product-image-container">
                        <ProductCard
                          imageSrc={
                            "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png"
                          }
                          title={"Green Masala Milk"}
                          price={"₹ 41.3"}
                          mrp={"₹ 51.3"}
                          onAddtoCartClick={() => {
                            console.log("___________________");
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobProductDetailComponent;
