// import React from "react";
// import "./MobTabOffersComponent.css";
// import offerCoupon1 from "../../../assets/Mob/mob-image/coupon1.png";
// import offerCoupon2 from "../../../assets/Mob/mob-image/coupon2.png";
// import offerCoupon3 from "../../../assets/Mob/mob-image/coupon3.png";
// import offerCoupon4 from "../../../assets/Mob/mob-image/coupon4.png";
// import offerCoupon5 from "../../../assets/Mob/mob-image/Offer-page-banner-2.png";
// import offerCoupon6 from "../../../assets/Mob/mob-image/Offer-page-banner-3.png";
// import backgroundbanner from "../../../assets/Mob/mob-image/offer-background-banner.png";
// import MobHeaderComponent from "../../MobHeaderComponent";

// const MobTabOffersComponent = () => {
//   return (
//     <>
//       <MobHeaderComponent
//         isBack={true}
//         isCartShow={false}
//         headerText={"Offers"}
//       />
//       <div className="container position-relative mt-2">
//         <div className="position-relative">
//           <div className="background-image-container">
//             <div className="position-absolute top-50 w-100 align-items-center justify-content-center d-flex ">
//               <div className=" p-4 mob-tab-offer-coupon-code-container shadow-sm">
//                 <span>Use Couponcode:</span>
//                 <span className="fs-1">HOWDY10</span>
//                 <div>And get Discount on First Order</div>
//               </div>
//             </div>
//             <img src={backgroundbanner} alt="r" className="h-100 w-100" />
//           </div>
//         </div>
//         <div className="position-relative align-items-center justify-content-center d-flex mob-tab-offer-coupon-code-subcontainer">
//           <div className="p-4 mob-tab-offer-coupon-code-container shadow-sm ">
//             <div className="row">
//               <div
//                 className="col mob-tab-offer-coupon-img-container m-1 cursor-pointer"
//                 // onClick={handleClick}
//               >
//                 <img
//                   src={
//                     "https://png.pngtree.com/png-clipart/20230321/original/pngtree-up-to-25-off-big-sale-discount-tag-design-png-image_8998777.png"
//                   }
//                   alt="r"
//                   className="w-100 h-100 cursor-pointer"
//                 />
//               </div>
//               <div
//                 className="col mob-tab-offer-coupon-img-container m-1 cursor-pointer"
//                 // onClick={handleClick}
//               >
//                 <img
//                   src={
//                     "https://png.pngtree.com/png-clipart/20220307/original/pngtree-25-discount-and-sale-promotion-banner-png-png-image_7424246.png"
//                   }
//                   alt="r"
//                   className="h-100 w-100"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mt-3 ">
//         <img
//           loading="lazy"
//           src={offerCoupon1}
//           alt="i"
//           className="w-100 h-100"
//         />
//         <div className="d-flex row">
//           <img
//             loading="lazy"
//             src={offerCoupon3}
//             alt="i"
//             className="w-50 h-100"
//           />
//           <img
//             loading="lazy"
//             src={offerCoupon2}
//             alt="i"
//             className="w-50 h-100"
//           />
//           <img
//             loading="lazy"
//             src={offerCoupon4}
//             alt="i"
//             className="w-100 h-100"
//           />
//           <img
//             loading="lazy"
//             src={offerCoupon5}
//             alt="i"
//             className="w-100 h-100"
//           />
//           <img
//             loading="lazy"
//             src={offerCoupon6}
//             alt="i"
//             className="w-100 h-100"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobTabOffersComponent;

import React from "react";
import "./MobTabOffersComponent.css";
import MobHeaderComponent from "../../MobHeaderComponent";
import backgroundbanner from "../../../assets/Mob/mob-image/offer-background-banner.png";
import offerCoupon1 from "../../../assets/Mob/mob-image/coupon1.png";
import offerCoupon2 from "../../../assets/Mob/mob-image/coupon2.png";
import offerCoupon3 from "../../../assets/Mob/mob-image/coupon3.png";
import offerCoupon4 from "../../../assets/Mob/mob-image/coupon4.png";
import offerCoupon5 from "../../../assets/Mob/mob-image/Offer-page-banner-2.png";
import offerCoupon6 from "../../../assets/Mob/mob-image/Offer-page-banner-3.png";

const offerImages = [
  "https://png.pngtree.com/png-clipart/20230321/original/pngtree-up-to-25-off-big-sale-discount-tag-design-png-image_8998777.png",
  "https://png.pngtree.com/png-clipart/20220307/original/pngtree-25-discount-and-sale-promotion-banner-png-png-image_7424246.png",
];

const MobTabOffersComponent = () => {
  const renderOfferImages = () => {
    return offerImages.map((imageUrl, index) => (
      <div
        key={index}
        className="col mob-tab-offer-coupon-img-container m-1 cursor-pointer"
      >
        <img
          src={imageUrl}
          alt={`offer-${index}`}
          className="w-100 h-100 cursor-pointer"
        />
      </div>
    ));
  };

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        isCartShow={false}
        headerText={"Offers"}
        isEdoboLogo={true}
      />
      <div className="container position-relative mt-2">
        <div className="position-relative">
          <div className="background-image-container">
            <div className="position-absolute top-50 w-100 align-items-center justify-content-center d-flex ">
              <div className=" p-4 mob-tab-offer-coupon-code-container shadow-sm">
                <span>Use Couponcode:</span>
                <span className="fs-1">HOWDY10</span>
                <div>And get Discount on First Order</div>
              </div>
            </div>
            <img src={backgroundbanner} alt="r" className="h-100 w-100" />
          </div>
        </div>
        <div className="position-relative align-items-center justify-content-center d-flex mob-tab-offer-coupon-code-subcontainer">
          <div className="p-4 mob-tab-offer-coupon-code-container shadow-sm ">
            <div className="row">{renderOfferImages()}</div>
          </div>
        </div>
      </div>
      <div className="container mt-3 ">
        <img
          loading="lazy"
          src={offerCoupon1}
          alt="i"
          className="w-100 h-100"
        />
        <div className="d-flex row">
          <img
            loading="lazy"
            src={offerCoupon3}
            alt="i"
            className="w-50 h-100"
          />
          <img
            loading="lazy"
            src={offerCoupon2}
            alt="i"
            className="w-50 h-100"
          />
          <img
            loading="lazy"
            src={offerCoupon4}
            alt="i"
            className="w-100 h-100"
          />
          <img
            loading="lazy"
            src={offerCoupon5}
            alt="i"
            className="w-100 h-100"
          />
          <img
            loading="lazy"
            src={offerCoupon6}
            alt="i"
            className="w-100 h-100"
          />
        </div>
      </div>
    </>
  );
};

export default MobTabOffersComponent;
