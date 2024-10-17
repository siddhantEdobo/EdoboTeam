import React, { useState , useEffect } from "react";
import BannerComponent from "./BannerComponent";
import useFetchProducts from "../../hooks/homeSetPincode";
import DiscountCouponComponent from "./DiscountCouponComponent";
import HouseHoldingProductComponent from "./HouseHoldingProductComponent";
import EdiblesComponent from "./EdiblesComponent";
import NonEdiblesComponent from "./NonEdiblesComponent";
import CategoryBannerComponent from "./CategoryBannerComponent";
import FeaturesComponent from "./FeaturesComponent";
import FeaturesServiceComponent from "./FeaturesServiceComponent";
import FreshVegitablsComponent from "./FreshVegitablsComponent";
import GroceryShopingComponent from "./GroceryShopingComponent";
import OneFamilyPaymentPartnerComponent from "./OneFamilyPaymentPartnerComponent";
import PopulorCategoryComponent from "./PopulorCategoryComponent";
import PromotionalBannerComponent from "./PromotionalBannerComponent";
import SpecialEventComponent from "./SpecialEventComponent";
import TopBrandsComponent from "./TopBrandsComponent";
import TopCategoryComponent from "./TopCategoryComponent";
import UVBannerComponent from "./UVBannerComponent";
import CrossBannerComponent from "./CrossBannerComponent";
import SlideMultiBanner from "./SlideMultiBanner";
import { useDispatch , useSelector } from "react-redux";
import substoreId, { setSubStoreId } from "../../redux/reducers/substoreId";

const HomeComponent = () => {
  const [Event, setEvent] = useState(false);
  
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

  console.log(productData)
  

  return (
    <div className="container-fluid">
      {Event ? <SpecialEventComponent /> : null}
      {/* <SpecialEventComponent /> */}
      <BannerComponent />
      <DiscountCouponComponent />
      <HouseHoldingProductComponent />
      <SlideMultiBanner />
      <CrossBannerComponent />
      <EdiblesComponent />
      <FreshVegitablsComponent />
      <NonEdiblesComponent />
      <FeaturesComponent />
      <GroceryShopingComponent />
      <CategoryBannerComponent />
      <PopulorCategoryComponent />
      <PromotionalBannerComponent />
      <TopCategoryComponent />
      <FeaturesServiceComponent />
      <TopBrandsComponent />
      <OneFamilyPaymentPartnerComponent />
      <UVBannerComponent />
    </div>
  );
};

export default HomeComponent;
