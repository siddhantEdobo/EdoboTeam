import React from "react";
import "./MobWishListComponent.css";
import MobHeaderComponent from "../MobHeaderComponent";
import MobProductCard from "../../common/MobProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import CollectionProductCard from "../../common/CollectionProductCard";
import ProductSkeleton from "../../common/CustomSkeleton/ProductSkeleton";

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
const MobWishListComponent = () => {
  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Wish List"}
        isCartShow={false}
        isEdoboLogo={true}
      />

      {/* <ProductSkeleton /> */}

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
                starRating={value?.starRating}
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
    </>
  );
};

export default MobWishListComponent;
