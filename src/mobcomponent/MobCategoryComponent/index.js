import React, { useEffect, useState } from "react";
import "./MobCategoryComponent.css";
import fruitImage from "../../assets/Mob/mob-image/category/fruit.png";
import cutFruitImage from "../../assets/Mob/mob-image/category/cut_fruits.png";
import cutVegImage from "../../assets/Mob/mob-image/category/cut-veg.png";
import leafyImage from "../../assets/Mob/mob-image/category/leafy.png";
import vegImage from "../../assets/Mob/mob-image/category/veg.png";
import MobHeaderComponent from "../MobHeaderNavigation";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import CategorySkeleton from "../../common/CustomSkeleton/CategorySkeleton";
import useFetchProducts from "../../hooks/homeSetPincode";
import useFetchCategoryProducts from "../../hooks/categorySetPincode";
import { useSelector } from "react-redux";

const MobCategoryComponent = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const { loading, fetchData, error } = useFetchCategoryProducts();
  const pincode = useSelector((state) => state.home.pincode);

  useEffect(() => {
    const fetchProducts = async () => {
      if (pincode) {
        const data = await fetchData(pincode);
        setProductData(data);
        // setRefreshCounter((prevCounter) => prevCounter + 1);
      }
    };

    fetchProducts();
  }, [pincode, fetchData, refreshCounter]);

  const categoryData = [
    {
      id: 1,
      header: "Fruits & Vegetables",
      category_product: [
        { id: 1, redirecturl: "/Fruits", name: "Fruits", imageSrc: fruitImage },
        {
          id: 2,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutFruitImage,
        },
        {
          id: 3,
          redirecturl: "/Vegetables",
          name: "Vegetables rfgv werg",
          imageSrc: fruitImage,
        },
        {
          id: 4,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 5,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 6,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 7,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: leafyImage,
        },
        {
          id: 8,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 9,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: vegImage,
        },
        {
          id: 10,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 11,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 12,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 13,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: leafyImage,
        },
        {
          id: 14,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
      ],
    },
    {
      id: 2,
      header: "Grocery & Oil",
      category_product: [
        {
          id: 9,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: vegImage,
        },
        {
          id: 10,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 11,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 12,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
      ],
    },
    {
      id: 3,
      header: "Beverages",
      category_product: [
        {
          id: 2,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutFruitImage,
        },
        {
          id: 3,
          redirecturl: "/Vegetables",
          name: "Vegetables ",
          imageSrc: fruitImage,
        },
        {
          id: 4,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 5,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
      ],
    },
    {
      id: 4,
      header: "Egg Meat & Sea Food",
      category_product: [
        {
          id: 9,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: vegImage,
        },
        {
          id: 10,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 11,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 12,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
      ],
    },
    {
      id: 5,
      header: "Chocolates & Ice Cream",
      category_product: [
        {
          id: 5,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: cutVegImage,
        },
        {
          id: 6,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 7,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: leafyImage,
        },
        {
          id: 8,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: fruitImage,
        },
        {
          id: 9,
          redirecturl: "/Vegetables",
          name: "Vegetables",
          imageSrc: vegImage,
        },
      ],
    },
  ];

  const onCategoryClickHandler = (item, value) => {
    console.log(
      "  ROUTES_NAVIGATION.BROWSE",
      // ROUTES_NAVIGATION.BROWSE + item?.redirecturl
      ROUTES_NAVIGATION.BROWSE + "/" + value?.alies + "/" + item?.name
    );
    navigate(ROUTES_NAVIGATION.BROWSE + "/" + value?.alies + "/all");
    // navigate(ROUTES_NAVIGATION.BROWSE + item?.redirecturl + "/" + item?.name);
  };

  return (
    <div className="mob-category-container container">
      {console.log("categorydata..", productData)}
      <MobHeaderComponent text={'Category'}
        // isBack={true}
        // headerText={"Category"}
        // isCartShow={false}
        // isEdoboLogo={true}
      />

      {/* <CategorySkeleton /> */}
      {/* {categoryData.map((value) => { */}
      {productData?.data?.map((value) => {
        return (
          <div key={value?.id}>
            <div className="mob-category-card-heading">{value?.name}</div>
            <div className="mob-category-scroll-container">
              {value?.sub_categories?.map((item) => (
                <div
                  key={item.id}
                  className="mob-category-card mob-category-card-container"
                  onClick={() => {
                    onCategoryClickHandler(item, value);
                  }}
                >
                  <div className="mob-category-card-img-container">
                    <img
                      loading="lazy"
                      //   src={
                      //     "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64ef3a56395682001cb8552d/exotic-vegetables-480x480.png"
                      //   }
                      src={item?.icon}
                      alt=""
                      className="h-100 w-100"
                    />
                  </div>
                  <div className="fs-12 mob-category-card-text">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobCategoryComponent;
