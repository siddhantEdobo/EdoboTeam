import React, { useEffect, useState } from "react";
import "./MobSearchComponent.css";
import MobHeaderComponent from "../MobHeaderNavigation";
import MobDailyNeedManuButtonComponent from "./MobDailyNeedManuButtonComponent";
import MobEdiblesComponent from "../MobHomeComponent/MobEdibleComponent/MobEdiblesComponent";
import MobCategoryBannerComponent from "../MobHomeComponent/MobCategoryBannerComponent/MobCategoryBannerComponent";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import axios from "axios";
import { useSelector } from "react-redux";

const dailyNeedsItems = [
  {
    id: 1,
    label: "Milk",
    redirect: "/fe",
  },
  {
    id: 2,
    label: "Pulses & Staples",
    redirect: "/fe",
  },
  {
    id: 3,
    label: "Curd",
    redirect: "/fe",
  },
  {
    id: 4,
    label: "Egg",
    redirect: "/fe",
  },
  {
    id: 5,
    label: "Oil",
    redirect: "/fe",
  },
  {
    id: 6,
    label: "Onion",
    redirect: "/fe",
  },
  {
    id: 7,
    label: "Bread",
    redirect: "/fe",
  },
  {
    id: 8,
    label: "Egg White",
    redirect: "/fe",
  },
];

const COLLECTIONDATA = [
  {
    id: 1,
    title: "Milk Dairy",
    description:
      "Brocollis have clusters of small, tight flower heads viu verpiuhver piuer vrpuivh piuherpuv piuevuepiu  vreivnpiuer piveriu  ipernfp erpierpveroirep  pierp reijv vei",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: true,
    startRating: "4.3",
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
    startRating: "4.3",
    allRating: "5000 Rating",
  },
  {
    id: 3,
    title: "Broccoli",
    description: "Brocollis have clusters of small, tight flower heads...",
    imageUrl:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
    price: "₹50",
    mrp: "₹100",
    discountAmount: "14% Off",
    quantity: "0",
    isNew: false,
    startRating: "4.3",
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
    startRating: "4.3",
    allRating: "5000 Rating",
  },
];

function MobSearchComponent() {
  const navigate = useNavigate();
  const [searchProductItem, setSearchProductItem] = useState("");
  const pincode = useSelector((state) => state.home.pincode);
  const [data, setData] = useState();

  const fetchData = async () => {
    if (searchProductItem) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v2/product-search?pincode=${pincode}&q=${searchProductItem}`
        );
        setData(response.data.data[0]);
        console.log("datais", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resp = [
    {
      id: 1,
      page: "manu",
      header: "Daily Need",
      resp: [
        {
          id: 1,
          label: "kejkrej",
        },
      ],
    },
    {
      id: 2,
      page: "productlist",
    },

    {
      id: 4,
      page: "category",
    },
    {
      id: 6,
      page: "productlist",
    },
  ];

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert("you have searched for - " + searchProductItem);
    // or you can send data to backend
  };

  const handle = () => {
    navigate(
      ROUTES_NAVIGATION.SEARCH + `?q=${encodeURIComponent(searchProductItem)}`
    );
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <MobHeaderComponent text={''}
        // isBack={true}
        // headerText={""}
        // isCartShow={false}
        // isEdoboLogo={true}
      >
        <div className="h-100 mob-serach-component-container flex-fill w-100">
          <input
            type="text"
            className="form-control fs-13"
            placeholder="Product Search here... "
            value={searchProductItem}
            onChange={(e) => {
              setSearchProductItem(e.target.value);
              // debounceGetAPISubStoreListHandler(e.target.value);
            }}
            onMouseEnter={handle}
            onKeyDown={handleKeypress}
          />
        </div>
      </MobHeaderComponent>
      <div className="container-lg">
        {searchProductItem?.length > 0 && data ? (
          <div
            key={data.id}
            className="d-flex product-search-item-list gap-2"
            onClick={() => {
              // setSearchProductItem("");
            }}
          >
            <div className="mob-search-imagelist-container">
              <img
                src={"http://103.165.118.218/edobo/" + data.thumb_image_url}
                alt="img"
                className="h-100 w-100"
              />
            </div>

            <div className="flex-fill">
              <div className="fs-13 fw-bold one-line-text">
                {data.product_name}
              </div>
              <div className=" two-line-text">{data.long_description}</div>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <div className="fs-12 text-decoration-line-through fw-medium text-nowrap text-danger">
                {data.compare_price}
              </div>
              <div className="fs-6 text-nowrap">{data.price}</div>
            </div>
            <div className="d-flex align-items-center">
              <AddToCartButtonCustomIcon />
            </div>
          </div>
        ) : (
          <div className="">
            {resp?.map((value) => {
              if (value?.page === "manu") {
                return (
                  <MobDailyNeedManuButtonComponent
                    key={value?.id}
                    header={value?.header}
                    dailyNeedsItems={dailyNeedsItems}
                  />
                );
              }
              if (value?.page === "category") {
                return <MobCategoryBannerComponent key={value?.id} />;
              }
              if (value?.page === "productlist") {
                return <MobEdiblesComponent key={value?.id} />;
              }
              return <div key={value?.id}></div>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default MobSearchComponent;
