import React from "react";
import "./MobEdiblesComponent.css";
import ProductCard from "../../../common/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import MobProductCard from "../../../common/MobProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/reducers/addCart";
import AddToCartButtonCustomIcon from "../../../common/AddToCartButtonCustomIcon";

const EDITIBLE = [
  {
    id: 1,
    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991",
    title: "Green Masala Milk Machroni",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  // Add more dummy data as needed
];

const MobEdiblesComponent = ({ data }) => {
  // Check if the data structure is valid before accessing
  const products = data?.data?.[6]?.items?.[0]?.products || [];
  const dispatch = useDispatch();
  const handleAddToCart = (value) => {
    dispatch(addToCart(value)); // Dispatch addToCart action with the product
  };
  return (
    <div>
      <div className="container-lg home-container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="fs-4 pb-3">home-Banner</div>
          <div className="d-flex">
            <div className="fs-14 pb-3 text-danger me-1"> More </div>
            <div className="fs-14 pb-3 text-danger me-2">
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
          </div>
        </div>
        {/* <Slider {...settings}> */}
        <div className="d-flex hide-scrollbar p-2 mob-editable-productcard-container gap-2">
          {(products.length > 0 ? products : EDITIBLE).map((value) => (
            <div key={value?.id}>
              <div className="edititable-product-image-container me-2">
                <MobProductCard
                  product={value}
                  imageSrc={
                    value?.thumb_image_url
                      ? "http://103.165.118.218/edobo/" + value?.thumb_image_url
                      : value?.url
                  }
                  title={value?.alias || value?.title}
                  price={value?.price}
                  mrp={value?.compare_price || value?.mrp}
                  description={value?.long_description || value?.description}
                  onAddtoCartClick={() => {
                    handleAddToCart(value);
                  }}
                />
                {/* <AddToCartButtonCustomIcon product={value} /> */}
              </div>
            </div>
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default MobEdiblesComponent;
