import React, { useState, useEffect } from "react";
import MobBannerComponent from "./MobBannerComponent/MobBannerComponent";
import MobSpecialEventComponent from "./MobSpecialEventComponent/MobSpecialEventComponent";
import MobDiscountCouponComponent from "./MobDiscountCouponComponent/MobDiscountCouponComponent";
import MobCategoryBannerComponent from "./MobCategoryBannerComponent/MobCategoryBannerComponent";
import MobFreshVegitablsComponent from "./MobFreshVegitablsComponent/MobFreshVegitablsComponent";
import MobSlideMultiBanner from "./MobSlideMultiBanner/MobSlideMultiBanner";
import MobEdiblesComponent from "./MobEdibleComponent/MobEdiblesComponent";
import MobLongSideScrollComponent from "./MobLongSideScrollComponent/MobLongSideScrollComponent";
import MobGroceryShopingComponent from "./MobGroceryShopingComponent/MobGroceryShopingComponent";
import MobPopulorCategoryComponent from "./MobPopulorCategoryComponent/MobPopulorCategoryComponent";
import MobUVBannerComponent from "./MobUVBannerComponent";
import MobHeaderComponent from "../MobHeaderComponent";
import MobVagitablesComponent from "./MobTabbingCollectionComponent";
import MobComboComponent from "./MobComboComponent";
import MobLocationComponent from "../MobLocationComponent";
import MobMainHeaderComponent from "./MobMainHeaderComponent/MobMainHeaderComponent";
import { useSelector } from "react-redux";
import MobTabbingCollectionComponent from "./MobTabbingCollectionComponent";
import useFetchProducts from "../../hooks/homeSetPincode";
import GoogleMapsProvider from "../MobLocationComponent/GoogleMapsProvider";
import ProductDetailsComponent from "../../component/ProductDetailsComponent";
import MobSlideCollectionComponent from "./MobSlideCollectionComponent";
import MobMultiBannerComponent from "./MobMultiBannerComponent/MobMultiBannerComponent";
import MobTabbingCollection from "./MobTabbingCollectionComponent";

const MobHomeComponent = () => {
  const [pinCode, setPinCode] = useState(localStorage.getItem("pinCode") || "");
  const [showLocation, setShowLocation] = useState(false);
  const [productData, setProductData] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const { loading, fetchData, error } = useFetchProducts();
  const pincode = useSelector((state) => state.home.pincode);

  useEffect(() => {
    localStorage.removeItem("pinCode");
    setPinCode(""); // Clear the pinCode state as well
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (pincode) {
        const data = await fetchData(pincode);
        setProductData(data);
      }
    };

    fetchProducts();
  }, [pincode, fetchData, refreshCounter]);

  useEffect(() => {
    if (showLocation && !pincode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLocation, pincode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pinCode) {
        setShowLocation(true);
      }
      // setShowLocation(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleConfirmLocation = (pinCode) => {
    setPinCode(pinCode);
    localStorage.setItem("pinCode", pinCode);
    setShowLocation(false);
  };

  const handleClose = () => {
    setShowLocation(false);
  };

  console.log("data is ", productData);

  return (
    <div className="home-container">
      <MobHeaderComponent />
      <MobSpecialEventComponent data={productData} />
      <MobBannerComponent data={productData} />
      {/* <MobDiscountCouponComponent data={productData} /> */}
      <MobSlideCollectionComponent data={productData} />
      {/* <MobComboComponent data={productData} /> */}
      <MobMainHeaderComponent data={productData} />
      {/* <MobPopulorCategoryComponent data={productData} /> */}
      <MobMultiBannerComponent data={productData} />
      {/* <MobGroceryShopingComponent data={productData} /> */}
      <MobTabbingCollectionComponent data={productData} />
      <MobSlideMultiBanner data={productData} />
      {/* <MobFreshVegitablsComponent data={productData} /> */}
      <MobEdiblesComponent data={productData} />
      {/* <MobLongSideScrollComponent data={productData} /> */}
      {/* <MobGroceryShopingComponent data={productData} /> */}
      <MobCategoryBannerComponent data={productData} />
      {/* <MobPopulorCategoryComponent data={productData} /> */}
      {/* <MobUVBannerComponent data={productData} /> */}
      {showLocation && !pincode && (
        <>
          <div
            className="overlay position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
            style={{ zIndex: 1050 }}
          ></div>
          <div
            className="offcanvas offcanvas-bottom show h-50 rounded-top-5"
            tabIndex="-1"
            data-bs-backdrop="static"
            data-bs-scroll="false"
            style={{ zIndex: 1060 }}
          >
            <div>
              <MobLocationComponent
                onConfirmLocation={handleConfirmLocation}
                onClose={handleClose}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobHomeComponent;
