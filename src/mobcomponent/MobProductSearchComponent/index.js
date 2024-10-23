import React, { useEffect, useState } from "react";
import "./MobProductSearchComponent.css";
import CollectionProductCard from "../../common/CollectionProductCard";
import { useNavigate } from "react-router-dom";
import MobHeaderComponent from "../MobHeaderComponent";
import ROUTES_NAVIGATION from "../../routes/routes";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import axios from "axios";
import { useSelector } from "react-redux";

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

const MobProductSearchComponent = (props) => {
  console.log("proops", props);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const pincode = useSelector((state) => state.home.pincode);
  const [searchProductItem, setSearchProductItem] = useState("");
  const [productListSelected, setProductListSelected] = useState(false);

  const fetchData = async () => {
    if (searchProductItem) {
      try {
        const response = await axios.get(
          `http://13.61.33.202/api/v2/product-search?pincode=${pincode}&q=${searchProductItem}`
        );
        setData(response.data.data[0]);
        console.log("datais", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setData(<div>No data Found</div>);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // alert("you have searched for - " + searchProductItem);
    setProductListSelected(false);

    navigate(
      ROUTES_NAVIGATION.SEARCH + `?q=${encodeURIComponent(searchProductItem)}`
    );
    fetchData();

    // or you can send data to backend
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={""}
        isCartShow={false}
        isEdoboLogo={true}
      >
        <div className="h-100 mob-serach-component-container flex-fill w-100">
          <input
            type="text"
            className="form-control fs-13"
            placeholder="Product Search here... "
            // value={searchProductItem}
            onClick={() => {
              //   navigate(ROUTES_NAVIGATION.SEARCH);
            }}
            onChange={(e) => {
              setSearchProductItem(e.target.value);
              fetchData();
              // debounceGetAPISubStoreListHandler(e.target.value);
            }}
            onKeyDown={handleKeypress}
            // onChange={handleChange}
          />
        </div>
      </MobHeaderComponent>
      <div className="container-lg">
        {searchProductItem?.length > 0 && data ? (
          <div className="w-100">
            <div
              key={data.id}
              className="d-flex product-search-item-list gap-2"
              onClick={() => {
                setProductListSelected(true);
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
                  {data?.product_name}
                </div>
                <div className=" two-line-text">{data?.long_description}</div>
              </div>

              <div className="d-flex gap-2 align-items-center">
                <div className="fs-12 text-decoration-line-through fw-medium text-nowrap text-danger">
                  {data?.price}
                </div>
                <div className="fs-6 text-nowrap">{data?.compare_price}</div>
              </div>
              <div className="d-flex align-items-center">
                <AddToCartButtonCustomIcon />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-lg home-container">
            {COLLECTIONDATA.map((value) => {
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
                    startRating={value?.startRating}
                    allRating={value?.allRating}
                    onClick={() => {
                      console.log("onClick");
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
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MobProductSearchComponent;
