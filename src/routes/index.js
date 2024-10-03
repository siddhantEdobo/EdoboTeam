import React, { lazy, useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ROUTES_NAVIGATION from "./routes";
import Loadable from "../layout/Loadable";
import LoginComponent from "../component/LoginComponent";
import MobLoginComponent from "../mobcomponent/MobLoginComponent";

import useWindowDimensions from "../utils/dimensionsHelpers";
import MobBrowserCategoryComponent from "../mobcomponent/MobBrowseCategoryComponent";
import MobProfileAccountManageComponent from "../mobcomponent/MobProfileComponent/MobProfileAccountManageComponent";
import MobCutomerSupportFAQHelpQueriesComponent from "../mobcomponent/MobAboutUsComponent/MobCutomerSupportFAQHelpQueriesComponent";

import MobAccountRegisterComponent from "../mobcomponent/MobLoginComponent/MobAccountRegisterComponent";
import MobOTPVerificationComponent from "../mobcomponent/MobLoginComponent/MobOTPVerificationComponent";
import MobTabbingCollection from "../mobcomponent/MobHomeComponent/MobTabbingCollectionComponent";
import ProductListPage from "../mobcomponent/MobHomeComponent/MobTabbingCollectionComponent/productList";
import MobSlideCollectionComponent from "../mobcomponent/MobHomeComponent/MobSlideCollectionComponent";

const HomeComponent = Loadable(
  lazy(() => import("../component/HomeComponent"))
);
const MobHomeComponent = Loadable(
  lazy(() => import("../mobcomponent/MobHomeComponent"))
);
const DashboardDefault = Loadable(
  lazy(() => import("../component/HeaderComponent"))
);

const MobOfferComponent = Loadable(
  lazy(() => import("../mobcomponent/MobOfferComponent"))
);

const OfferComponent = Loadable(
  lazy(() => import("../component/OfferComponent"))
);

const OfferCouponComponent = Loadable(
  lazy(() => import("../component/OfferComponent/OfferCouponComponent"))
);

const MobOfferCouponComponent = Loadable(
  lazy(() =>
    import("../mobcomponent/MobOfferComponent/MobOfferCouponComponent")
  )
);

const MobCategoryComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCategoryComponent"))
);

const CategoryComponent = Loadable(
  lazy(() => import("../component/CategoryComponent"))
);

const ProductListComponent = Loadable(
  lazy(() => import("../component/ProductListComponent"))
);

const ProductDetailsComponent = Loadable(
  lazy(() => import("../component/ProductDetailsComponent"))
);

const EdoboStoreComponent = Loadable(
  lazy(() => import("../component/EdoboStoreComponent/Edobostoredetails"))
);

const MobProductDetailComponent = Loadable(
  lazy(() => import("../mobcomponent/MobProductDetailComponent"))
);

const MobCollectionProductComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCollectionProductComponent"))
);

const CollectionProductComponent = Loadable(
  lazy(() => import("../component/CollectionProductComponent"))
);

const ProfileComponent = Loadable(
  lazy(() => import("../component/ProfileComponent"))
);

const CouponApplyComponent = Loadable(
  lazy(() => import("../component/CouponsApplyComponent"))
);

const MobProfileComponent = Loadable(
  lazy(() => import("../mobcomponent/MobProfileComponent"))
);

const AddressComponent = Loadable(
  lazy(() => import("../component/AddressComponent"))
);

const MobCartChooseChangeLocationComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobCartComponent/MobCartChooseChangeLocationComponent"
    )
  )
);

const MobOrderTimerComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderTimerComponent/index"
    )
  )
);

const MobOrderHistoryComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderHistoryComponent/MobOrderHistoryComponent"
    )
  )
);

const MobOrderCancleSummaryComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderCancleSummaryComponent/index"
    )
  )
);

const MobOrderDetailSummaryComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderDetailsSummary/index"
    )
  )
);

const MobOrderChecklistComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobCheckListComponent/index"
    )
  )
);

const MobOrderCancleComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderCancleComponent/index"
    )
  )
);

const MobOrderReturnRequestComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderReturnRequest/index"
    )
  )
);

const MobOrderDelayComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobOrderAccountComponent/MobOrderTimerComponent/MobOrderReachedScreenComponent/MobOrderDelayScreen"
    )
  )
);

const UserOrderHistoryComponent = Loadable(
  lazy(() => import("../component/UserOrderHistoryComponent"))
);

const UserPaymentComponent = Loadable(
  lazy(() => import("../component/UserPaymentComponent"))
);

const UserSettingComponent = Loadable(
  lazy(() => import("../component/UserSettingComponent"))
);

const UserProfileAccount = Loadable(
  lazy(() => import("../component/UserProfileAccount"))
);

const UserWishlistComponent = Loadable(
  lazy(() => import("../component/UserWishlistComponent"))
);

const MobWishListComponent = Loadable(
  lazy(() => import("../mobcomponent/MobWishListComponent"))
);

const MobCartComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCartComponent"))
);
const CartComponent = Loadable(
  lazy(() => import("../component/CartComponent"))
);

const MobProceedToPayment = Loadable(
  lazy(() => import("../mobcomponent/MobCartComponent/MobProceedToPayment"))
);
const ProceedToPaymentComponent = Loadable(
  lazy(() => import("../component/CartComponent/ProceedToPaymentComponent"))
);

const MobSearchComponent = Loadable(
  lazy(() => import("../mobcomponent/MobSearchComponent"))
);

const MobProductSearchComponent = Loadable(
  lazy(() => import("../mobcomponent/MobProductSearchComponent"))
);
const MobCartCouponComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCartComponent/MobCartCouponComponent"))
);

const SearchComponent = Loadable(
  lazy(() => import("../component/SearchComponent"))
);

const MobOrderConfirmComponent = Loadable(
  lazy(() => import("../mobcomponent/MobOrderConfirmComponent"))
);
const OrderConfirmComponent = Loadable(
  lazy(() => import("../component/OrderConfirmComponent"))
);

const MobWalletComponent = Loadable(
  lazy(() => import("../mobcomponent/MobWalletComponent/index"))
);
const MyWalletComponent = Loadable(
  lazy(() => import("../component/MyWalletComponent"))
);

const MobRatingReviewsComponent = Loadable(
  lazy(() => import("../mobcomponent/MobRatingReviewsComponent"))
);

const RatingReviewsComponent = Loadable(
  lazy(() => import("../component/RatingReviewsComponent"))
);

const MobAboutUsComponent = Loadable(
  lazy(() => import("../mobcomponent/MobAboutUsComponent"))
);

const AboutUsComponent = Loadable(
  lazy(() => import("../component/AboutUsComponent"))
);
const MobCustomerSupportComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCustomerSupportComponent"))
);
const CustomerSupportComponent = Loadable(
  lazy(() => import("../component/CustomerSupportComponent"))
);
const MobRequestNewProductComponent = Loadable(
  lazy(() => import("../mobcomponent/MobRequestNewProductComponent"))
);
const RequestNewProductComponent = Loadable(
  lazy(() => import("../component/RequestNewProductComponent"))
);

const MobRequestNewProductSearchComponent = Loadable(
  lazy(() =>
    import(
      "../mobcomponent/MobRequestNewProductComponent/MobRequestNewProductSearchComponent"
    )
  )
);

const RequestNewProductSearchComponent = Loadable(
  lazy(() =>
    import(
      "../component/RequestNewProductComponent/RequestNewProductSearchComponent"
    )
  )
);

const MobCreditoComponent = Loadable(
  lazy(() => import("../mobcomponent/MobCreditoComponent/index"))
);

const RouteComponent = () => {
  const { width, isMobileView } = useWindowDimensions();
  return (
    <Routes>
      <Route path={ROUTES_NAVIGATION.HOME} element={<MainLayout />}>
        <Route
          path={ROUTES_NAVIGATION.HOME}
          index
          element={isMobileView ? <MobHomeComponent /> : <HomeComponent />}
        />
        <Route
          path={ROUTES_NAVIGATION.PRODUCT_LIST}
          element={<ProductListComponent />}
        />

        <Route
          path={ROUTES_NAVIGATION.MY_WALLET}
          element={
            isMobileView ? <MobWalletComponent /> : <MyWalletComponent />
          }
        />

        {/* Edobo store */}

        <Route
          path={ROUTES_NAVIGATION.EDOBO_STORE}
          element={isMobileView ? "" : <EdoboStoreComponent />}
        />

        {/* Cart Component */}
        <Route
          path={ROUTES_NAVIGATION.CART}
          element={isMobileView ? <MobCartComponent /> : <CartComponent />}
        />

        {/* Proceed to payment */}
        <Route
          path={ROUTES_NAVIGATION.PROCEED_PAYMENT}
          element={
            isMobileView ? (
              <MobProceedToPayment />
            ) : (
              <ProceedToPaymentComponent />
            )
          }
        />

        {/* Change Location */}
        <Route
          path={ROUTES_NAVIGATION.CHANGE_LOCATION}
          element={
            isMobileView ? (
              <MobCartChooseChangeLocationComponent />
            ) : (
              <AddressComponent />
            )
          }
        />

        {/* Request new product */}
        <Route
          path={ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT}
          element={
            isMobileView ? (
              <MobRequestNewProductComponent />
            ) : (
              <RequestNewProductComponent />
            )
          }
        />

        {/* Request new product search component  */}
        <Route
          path={ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT_SEARCH}
          element={
            isMobileView ? (
              <MobRequestNewProductSearchComponent />
            ) : (
              <RequestNewProductSearchComponent />
            )
          }
        />

        {/* edobo credito coin */}

        <Route
          path={ROUTES_NAVIGATION.CREDITO_COIN}
          element={isMobileView ? <MobCreditoComponent /> : ""}
        />

        {/* Offer Coupon apply */}

        <Route
          path={ROUTES_NAVIGATION.COUPON_APPLY}
          element={isMobileView ? "" : <CouponApplyComponent />}
        />

        {/* Order Check list */}

        <Route
          path={ROUTES_NAVIGATION.USER_ORDER}
          element={
            isMobileView ? (
              <MobOrderHistoryComponent />
            ) : (
              //order History
              <UserOrderHistoryComponent />
            )
          }
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_CHECKLIST}
          element={isMobileView ? <MobOrderChecklistComponent /> : ""}
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_RETURN}
          element={isMobileView ? <MobOrderReturnRequestComponent /> : ""}
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_CANLE_SUMMARY}
          element={isMobileView ? <MobOrderCancleSummaryComponent /> : ""}
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_DETAIL_SUMMARY}
          element={isMobileView ? <MobOrderDetailSummaryComponent /> : ""}
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_CANCLE}
          element={isMobileView ? <MobOrderCancleComponent /> : ""}
        />

        <Route
          path={ROUTES_NAVIGATION.ORDER_TIMER}
          element={isMobileView ? <MobOrderTimerComponent /> : ""}
        />

        {/* Order Delay */}

        <Route
          path={ROUTES_NAVIGATION.ORDER_DELAY}
          element={isMobileView ? <MobOrderDelayComponent /> : ""}
        />

        {/* Order Confirm component */}

        <Route
          path={ROUTES_NAVIGATION.ORDER_CONFIRM}
          element={
            isMobileView ? (
              <MobOrderConfirmComponent />
            ) : (
              <OrderConfirmComponent />
            )
          }
        />

        {/* Rating and Review component */}
        <Route
          path={ROUTES_NAVIGATION.RATING_REVIEW}
          element={
            isMobileView ? (
              <MobRatingReviewsComponent />
            ) : (
              <RatingReviewsComponent />
            )
          }
        />

        {/* About Us Component */}
        <Route
          path={ROUTES_NAVIGATION.ABOUT_US}
          element={
            isMobileView ? <MobAboutUsComponent /> : <AboutUsComponent />
          }
        />

        {/* Custmer Support component */}

        <Route
          path={ROUTES_NAVIGATION.CUSTOMER_SUPPORT}
          element={
            isMobileView ? (
              <MobCustomerSupportComponent />
            ) : (
              <CustomerSupportComponent />
            )
          }
        />

        {/* custom support FAQ's */}
        <Route
          path={ROUTES_NAVIGATION.CUSTOMER_SUPPORT_FAQ}
          element={
            isMobileView ? <MobCutomerSupportFAQHelpQueriesComponent /> : ""
          }
        />
        {/* Product Details component*/}

        <Route
          path={ROUTES_NAVIGATION.PRODUCT_DETAILS}
          element={
            isMobileView ? (
              <MobProductDetailComponent />
            ) : (
              <ProductDetailsComponent />
            )
          }
        />
        {/* Searcch Component */}
        <Route
          path={ROUTES_NAVIGATION.MOBILE_SEARCH}
          element={<MobSearchComponent />}
        />
        <Route
          path={ROUTES_NAVIGATION.SEARCH}
          element={
            isMobileView ? <MobProductSearchComponent /> : <SearchComponent />
          }
        />

        {/* Collection mob and web */}
        <Route
          path={ROUTES_NAVIGATION.COLLECTION + "/:collectionproduct"}
          element={
            isMobileView ? (
              <MobCollectionProductComponent />
            ) : (
              <CollectionProductComponent />
            )
          }
        />

        {/* no need for now */}
        {/* 
        <Route
          path={ROUTES_NAVIGATION.OFFERS}
          element={isMobileView ? <MobOfferComponent /> : <OfferComponent />}
        /> */}
        {/* no need for now */}
        <Route
          path={ROUTES_NAVIGATION.OFFERSCOUPON}
          element={
            isMobileView ? (
              <MobOfferCouponComponent />
            ) : (
              <OfferCouponComponent />
            )
          }
        />
        <Route
          path={ROUTES_NAVIGATION.ALL_COUPONS_LIST}
          element={
            isMobileView ? <MobCartCouponComponent /> : <OfferCouponComponent />
          }
        />

        <Route
          path={ROUTES_NAVIGATION.MOB_CATEGORY}
          element={
            isMobileView ? <MobCategoryComponent /> : <CategoryComponent />
          }
        />
        <Route
          path={ROUTES_NAVIGATION.BROWSE + "/:maincategory/:subcategory"}
          element={
            isMobileView ? (
              <MobBrowserCategoryComponent />
            ) : (
              <CategoryComponent />
            )
          }
        />

        {/* profile component */}
        <Route
          path={ROUTES_NAVIGATION.PROFILE}
          element={
            isMobileView ? <MobProfileComponent /> : <ProfileComponent />
          }
        >
          <Route
            path={ROUTES_NAVIGATION.USER_ACCOUNT}
            element={
              isMobileView ? (
                <MobProfileAccountManageComponent />
              ) : (
                <UserProfileAccount />
              )
            }
          />
          <Route
            path={ROUTES_NAVIGATION.USER_PAYMENT}
            element={<UserPaymentComponent />}
          />

          <Route
            path={ROUTES_NAVIGATION.USER_ORDER}
            element={
              isMobileView ? (
                <MobOrderHistoryComponent />
              ) : (
                //order History
                <UserOrderHistoryComponent />
              )
            }
          />
          <Route
            path={ROUTES_NAVIGATION.USER_ADDRESS}
            element={
              isMobileView ? (
                <MobCartChooseChangeLocationComponent />
              ) : (
                <AddressComponent />
              )
            }
          />

          {/* wish list */}
          <Route
            path={ROUTES_NAVIGATION.USER_WISHLIST}
            element={
              isMobileView ? (
                <MobWishListComponent />
              ) : (
                <UserWishlistComponent />
              )
            }
          />

          {/* <Route
            path={ROUTES_NAVIGATION.USER_WISHLIST}
            element={<UserWishlistComponent />}
          /> */}

          {/* MyWallet */}

          <Route
            path={ROUTES_NAVIGATION.USER_SETTING}
            element={<UserSettingComponent />}
          />
        </Route>
      </Route>

      {/* login component */}
      {/* <Route path={ROUTES_NAVIGATION.LOGIN} element={<LoginComponent />} /> */}

      <Route
        path={ROUTES_NAVIGATION.LOGIN}
        index
        element={isMobileView ? <MobLoginComponent /> : <LoginComponent />}
      />
      {/* otp verification component */}
      <Route
        path={ROUTES_NAVIGATION.OTP_VERIFICATION}
        index
        element={isMobileView ? <MobOTPVerificationComponent /> : ""}
      />

      {/* account register component */}
      <Route
        path={ROUTES_NAVIGATION.ACCOUNT_REGISTER}
        index
        element={isMobileView ? <MobAccountRegisterComponent /> : ""}
      />
      <Route path={"/*"} element={<Navigate to={"/"} />} />

      <Route path="/" element={<MobTabbingCollection />} />
      <Route path="/products/:alias" element={<ProductListPage />} />
      {/* 
      <Route path="/" element={<MobSlideCollectionComponent/>}/>
      <Route path="/product-detail/:productId" element={<MobPr />} /> */}
    </Routes>
  );
};

export default RouteComponent;
