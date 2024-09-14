import React, { useState } from "react";
import BannerComponent from "./BannerComponent";
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

const HomeComponent = () => {
  const [Event, setEvent] = useState(false);

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
