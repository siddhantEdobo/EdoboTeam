import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./MobBrowserCategoryComponent.css";
import { useNavigate, useParams } from "react-router-dom";
import MobHeaderComponent from "../MobHeaderNavigation";
import MobBrowseMainCategoryListComponent from "./MobBrowseMainCategoryListComponent";
import ROUTES_NAVIGATION from "../../routes/routes";
import MobBrowseSubCategoryListComponent from "./MobBrowseSubCategoryListComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faArrowDownWideShort,
  faArrowUpAZ,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import CollectionProductCard from "../../common/CollectionProductCard";
import MobOptionVarientComponent from "../MobOptionVarientComponent";
import MobFilterComponent from "../MobFilterComponent";
import { useSelector } from "react-redux";
import useFetchCategoryProducts from "../../hooks/categorySetPincode";

const category_product = [
  {
    id: 1,
    redirecturl: "fruits-vegitables",
    name: "Fruits & Vegitables",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7a28cace1263c0f31fff/fruit-and-vegetable-1-.svg",
  },
  {
    id: 2,
    redirecturl: "in-house-pantry",
    name: "In-house pantry",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/651a408aba1ac433e437ee14/sub-icon-2-480x480.png",
  },
  {
    id: 3,
    redirecturl: "party-festive-needs",
    name: "Party & festive needs",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6411adf0cec1dfaba7d6e0e5/30x30-480x480.png",
  },
  {
    id: 4,
    redirecturl: "mobile-accessories",
    name: "Mobile Accessories",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da85888df2a933e0529a5c/artboard-1-copy-13.svg",
  },
  {
    id: 5,
    redirecturl: "ghee-oils",
    name: "Ghee & oils",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7deb7259e3c918cfd699/ghee-and-oil.svg",
  },
  {
    id: 6,
    redirecturl: "eggs-meat-sea-foods",
    name: "Eggs Meat & Sea Foods",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7a935be61963b79a8aa3/egg-meat-and-sea-food-1-.svg",
  },
  {
    id: 7,
    redirecturl: "snacks-packad-food",
    name: "Snacks and packad food",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7af35be61963b79a99b2/snacks-1-.svg",
  },
  {
    id: 8,
    redirecturl: "vegetables",
    name: "Vegetables",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7b362c477a6423490fee/baby-care-1-.svg",
  },
  {
    id: 9,
    redirecturl: "vegetables",
    name: "Vegetables",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7af35be61963b79a99b2/snacks-1-.svg",
  },

  {
    id: 14,
    redirecturl: "vegetables",
    name: "Vegetables",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7b1c5be61963b79aa066/cleaner-and-households-1-.svg",
  },
];

const COLLECTIONDATA = [
  {
    id: 1,
    title: "Milk Dairy",
    alies: "milk-dairy",
    description:
      "Brocollis have clusters of small, tight flower heads viu verpiuhver piuer vrpuivh piuherpuv piuevuepiu  vreivnpiuer piveriu  ipernfp erpierpveroirep  pierp reijv vei",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: true,
    starRating: "4.3",
    allRating: "5000 Rating",
  },
  {
    id: 2,
    title: "Coconut oil",
    description: "Brocollis have clusters of small, tight flower heads...",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: false,
    starRating: "4.3",
    allRating: "5000 Rating",
  },
  {
    id: 3,
    title: "Broccoli 5ml white Cold super 200ml product ",
    description: "Brocollis",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: false,
    starRating: "4.3",
    allRating: "5000 Rating",
  },
  {
    id: 4,
    title: "Broccoli",
    description: "Brocollis have clusters of small, tight flower heads...",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: false,
    starRating: "4.3",
    allRating: "5000 Rating",
  },
];

const MobBrowserCategoryComponent = () => {
  const pincode = useSelector((state) => state.home.pincode);
  const [productData, setProductData] = useState([]);
  const { loading, fetchData, error } = useFetchCategoryProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      if (pincode) {
        const data = await fetchData(pincode);
        setProductData(data?.data);
        // setRefreshCounter((prevCounter) => prevCounter + 1);
      }
    };

    fetchProducts();
  }, [pincode, fetchData]);

  const { maincategory, subcategory } = useParams();
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState(
    productData[0]
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [isVarientModelShow, setIsVarientModelShow] = useState(false);
  const [isShortOrderShow, setIsShortOrderShow] = useState(false);
  const [isFilterShow, setIsFilterShow] = useState(false);

  const onShortOrderOpenCloseHandler = useCallback((toggle) => {
    setIsShortOrderShow(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);

  const onVarientOpenCloseHandler = useCallback((toggle) => {
    setIsVarientModelShow(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);

  const onFiltersOpenCloseHandler = useCallback((toggle) => {
    setIsFilterShow(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);

  useEffect(() => {
    if (maincategory) {
      const selectedCategory = productData?.filter(
        (value) => value?.alies === maincategory
      )[0];
      setSelectedMainCategory(selectedCategory);
    }
  }, [maincategory]);

  useEffect(() => {
    if (subcategory) {
      const selectedCategory = productData?.filter(
        (value) => value?.alies === subcategory
      )[0];
      setSelectedSubCategory(selectedCategory);
    }
  }, [subcategory]);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    setSelectedMainCategory(productData[0]);
  }, []);

  return (
    <>
      <MobHeaderComponent text={'Main Category'}
        // isBack={true}
        // headerText={maincategory}
        // isEdoboLogo={true}
      />
    
      <div className=" container-lg align-items-start m-0 home-container flex-wrap overflow-hidden mob-browse-category-main-container">
        <div className=" mob-browse-category-header-banner">
          <img
            loading="lazy"
            src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64ef3fac80a0b541b454487d/ghee-and-oil-1080x529.png"
            alt=""
            className="h-100 w-100"
          />
        </div>
        <MobBrowseSubCategoryListComponent
          categoryProduct={productData}
          selectedSubCategory={selectedSubCategory}
          onClick={(subCategory) => {
            console.log("subCategory", subCategory);
            setSelectedSubCategory(subCategory);
            navigate(
              ROUTES_NAVIGATION.BROWSE +
                "/" +
                (selectedMainCategory?.alies || "") +
                "/" +
                subCategory?.alies
            );
          }}
        />

        <div className="mt-3 mb-1" style={{ overflowX: "auto" }}>
          <div className="d-flex gap-2">
            <div
              className="mob-browse-category-filter-container"
              onClick={() => {
                onFiltersOpenCloseHandler(true);
              }}
            >
              Filter
            </div>
            <div className="mob-browse-category-filter-container">A to Z</div>
            <div className="mob-browse-category-filter-container">Z to A</div>
            <div className="mob-browse-category-filter-container">
              Low to High
            </div>
            <div className="mob-browse-category-filter-container">
              High to Low
            </div>
          </div>
        </div>

        <div className="mob-browe-category-proudct-card-container">
          {/* {COLLECTIONDATA.map((value) => {
            return (
              <div key={value?.id} className="mt-2">
                <CollectionProductCard
                  title={value?.title}
                  description={value?.description}
                  imageUrl={value?.imageUrl}
                  price={value?.price}
                  mrp={value?.mrp}
                  discountAmount={value?.discountAmount}
                  quantity={"0"}
                  isNew={value?.isNew}
                  starRating={value?.starRating}
                  allRating={value?.allRating}
                  onClick={() => {
                    console.log("onClick");
                    navigate(
                      ROUTES_NAVIGATION.PRODUCT_DETAILS +
                        "/" +
                        value?.title.toLocaleLowerCase().replaceAll(" ", "-")
                    );
                  }}
                  onWishlistClick={() => {
                    console.log("onWishlistClick");
                  }}
                  onDecrement={() => {
                    console.log("onDecrement");
                  }}
                  onIncrement={() => {
                    console.log("onIncrement");
                  }}
                  onAddtoCartClick={() => {
                    console.log("onAddtoCartClick");
                    onVarientOpenCloseHandler(true);
                  }}
                />
              </div>
            );
          })} */}
        </div>
      </div>

      <MobBrowseMainCategoryListComponent
        categoryProduct={productData}
        selectedMainCategory={selectedMainCategory}
        onClick={(mainCategrory) => {
          console.log("mainCategrory", mainCategrory);
          setSelectedMainCategory(mainCategrory);
          navigate(
            ROUTES_NAVIGATION.BROWSE +
              "/" +
              (mainCategrory?.alies || "") +
              "/all"
          );
        }}
      />

      {isVarientModelShow && (
        <>
          <div className="overlay" />
          <div
            className="offcanvas offcanvas-bottom show h-75 rounded-top-4 fade"
            tabIndex="-10"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title w-100 fs-14 fw-bold justify-content-center d-flex"
                id="optionVarientModelLabel"
              >
                Suggesions and Varients
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  console.log("-----------------------------");
                  onVarientOpenCloseHandler(false);
                }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="fs-14 fw-bold pb-2">Onion</div>
              <div className="card border-danger p-3">
                <div className="d-flex align-items-center ">
                  <div className="faicons-size">
                    <img
                      src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/originals/62da7b362c477a6423490fee/baby-care-1-.svg"
                      alt="fr"
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="ps-3 fs-14 fw-bold flex-grow-1">1 Kg</div>
                  <div className="ps-3 fs-14 fw-bold d-flex ">
                    <div className="ps-3 fs-14 fw-bold">₹ 50</div>
                    <div className="ps-3 fs-14 fw-bold text-decoration-line-through text-danger">
                      ₹ 70
                    </div>
                  </div>
                </div>
              </div>
              <div className="fs-14 fw-bold pb-2 pt-2">Get More With Combo</div>
              <MobOptionVarientComponent />
            </div>
          </div>
        </>
      )}

      {isShortOrderShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title w-100 fs-14 fw-bold d-flex">
                Sort By
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onShortOrderOpenCloseHandler(false);
                }}
              ></button>
            </div>
            <div className="offcanvas-body small">
              <div className="form-check ">
                <div className="d-flex gap-2 mt-3 justify-content-between">
                  <div className="d-flex gap-2">
                    <FontAwesomeIcon
                      icon={faArrowDownWideShort}
                      className="faicons-size"
                    />
                    <label className="fs-14 form-check-label">
                      Price: High to Low
                    </label>
                  </div>
                  <input
                    className="form-check-input faicons-size active bg-info text-danger"
                    type="radio"
                    name="exampleRadios"
                    id="short_hightolow"
                    value={"price_asc"}
                    onClick={(event) => {
                      console.log(
                        "event------------------>",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
              <div className="form-check">
                <div className="d-flex gap-2 mt-3 justify-content-between">
                  <div className="d-flex gap-2">
                    <FontAwesomeIcon
                      icon={faArrowUpWideShort}
                      className="faicons-size"
                    />
                    <label className="fs-14 form-check-label">
                      Price: Low to High
                    </label>
                  </div>
                  <input
                    className="form-check-input faicons-size"
                    type="radio"
                    name="exampleRadios"
                    id="short_lowtohigh"
                    value={"price_desc"}
                    onClick={(event) => {
                      console.log(
                        "event------------------>",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
              <div className="form-check">
                <div className="d-flex gap-2 mt-3 justify-content-between">
                  <div className="d-flex gap-2">
                    <FontAwesomeIcon
                      icon={faArrowUpAZ}
                      className="faicons-size"
                    />
                    <label
                      className="fs-14 form-check-label"
                      // for="short_nameAscending"
                    >
                      Name : Ascending
                    </label>
                  </div>
                  <input
                    className="form-check-input faicons-size"
                    type="radio"
                    name="exampleRadios"
                    id="short_nameAscending"
                    value={"name_asc"}
                    // checked={selectedShortOrder}
                    onClick={(event) => {
                      // onShortOrderOpenCloseHandler(false);
                      console.log(
                        "event------------------>",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
              <div className="form-check">
                <div className="d-flex gap-2 mt-3 justify-content-between">
                  <div className="d-flex gap-2">
                    <FontAwesomeIcon
                      icon={faArrowDownAZ}
                      className="faicons-size"
                    />
                    <label className="fs-14 form-check-label">
                      Name : Descending
                    </label>
                  </div>
                  <input
                    className="form-check-input faicons-size"
                    type="radio"
                    name="exampleRadios"
                    id="short_nameDescending"
                    value={"name_desc"}
                    onClick={(event) => {
                      console.log(
                        "event------------------>",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isFilterShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-2"
            data-bs-backdrop="static"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title w-100 fs-14 fw-bold">
                Filters
                <div className="fs-10">Filter by product</div>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onFiltersOpenCloseHandler(false);
                }}
              ></button>
            </div>
            <div className="offcanvas-body small">
              <MobFilterComponent />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobBrowserCategoryComponent;
