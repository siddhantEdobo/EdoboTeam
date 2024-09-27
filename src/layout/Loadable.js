// import { Suspense, lazy } from "react";

// // project import
// import Loader from "./Loader";
// import ProductSkeleton from "../common/CustomSkeleton/ProductSkeleton";
// import HomeSkeleton from "../common/CustomSkeleton/HomeSkeleton";
// import { useLocation } from "react-router-dom";

// // ==============================|| LOADABLE - LAZY LOADING ||============================== //

// const isHomePage = location.pathname === "/"; // Adjust the condition based on your home page route

// const isLoading = true; // Set to true if data is still loading, false otherwise

// const Loadable = (Component) => (props) =>
//   (
//     <Suspense fallback={isLoading ? <ProductSkeleton /> : <HomeSkeleton />}>
//       <Component {...props} />
//     </Suspense>
//   );

// export default Loadable;

import React, { Suspense } from "react";
import ProductSkeleton from "../common/CustomSkeleton/ProductSkeleton";
import HomeSkeleton from "../common/CustomSkeleton/HomeSkeleton";

const Loadable = (Component) => (props) => {
  const isHomePage = window.location.pathname === "/";
  console.log(isHomePage, "home page location"  );

  return (
    <Suspense fallback={isHomePage ? <HomeSkeleton /> : <ProductSkeleton />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
