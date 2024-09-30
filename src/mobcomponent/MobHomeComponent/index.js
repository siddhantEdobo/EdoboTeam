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
import { useDispatch, useSelector } from "react-redux";
import MobTabbingCollectionComponent from "./MobTabbingCollectionComponent";
import useFetchProducts from "../../hooks/homeSetPincode";
import GoogleMapsProvider from "../MobLocationComponent/GoogleMapsProvider";
import ProductDetailsComponent from "../../component/ProductDetailsComponent";
import MobSlideCollectionComponent from "./MobSlideCollectionComponent";
import MobMultiBannerComponent from "./MobMultiBannerComponent/MobMultiBannerComponent";
import MobTabbingCollection from "./MobTabbingCollectionComponent";
import MobViewCart from "./MobViewCart/index";
import { setCartItems } from "../../redux/reducers/addCart";
import substoreId, { setSubStoreId } from "../../redux/reducers/substoreId";

const MobHomeComponent = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [productData, setProductData] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const { loading, fetchData, error } = useFetchProducts();
  const pincode = useSelector((state) => state.home.pincode);
  const cartItems = useSelector((state) => state.cart.addToCart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("pinCode");
    // Clear the pinCode state as well
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (pincode) {
        const data = await fetchData(pincode);
        const substore = data?.data[0]?.sub_store_id;
        if (substore) {
          dispatch(setSubStoreId(substore));
        }
        setProductData(data);
        console.log("here find substore id", substore);
      }
    };

    fetchProducts();
  }, [pincode, fetchData, refreshCounter, dispatch]);

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
      if (!pincode) {
        setShowLocation(true);
      }
      // setShowLocation(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleConfirmLocation = (pincode) => {
    localStorage.setItem("pinCode", pincode);
    setShowLocation(false);
  };

  const handleClose = () => {
    setShowLocation(false);
  };

  console.log("data is ", productData);
  const cartItems1 = useSelector((state) => state.cart.items);

  return (
    <div className="home-container" style={{ marginTop: "60px" }}>
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
      {cartItems1.length > 0 && <MobViewCart />}
    </div>
  );
};

export default MobHomeComponent;
