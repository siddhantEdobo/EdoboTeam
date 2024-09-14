// import React, { useState } from "react";
// import MobHeaderComponent from "../MobHeaderComponent";
// import "./MobRequestNewProductComponent.css";
// import { Images } from "../../assets";
// import { useNavigate } from "react-router-dom";
// import ROUTES_NAVIGATION from "../../routes/routes";

// const MobRequestNewProductComponent = () => {
//   const [searchRequestNewProduct, setSearchRequestNewProduct] = useState();
//   const navigate = useNavigate();

//   return (
//     <>
//       <MobHeaderComponent
//         isBack={true}
//         headerText={"Request New Product"}
//         isCartShow={false}
//       />
//       <div className="mt-3 mx-3">
//         <div
//           className="card shadow-sm p-2 cursor-pointer"
//           onClick={() => {
//             // navigate(ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT_SEARCH);
//           }}
//         >
//           <div>
//             <div className="text-danger fs-14 fw-bold">Hey Harshil Doshi,</div>
//             <div className="text-secondary">You didn't find your stuff ?</div>
//           </div>

//           <div className="mt-3 ">
//             <div class=" d-flex gap-2">
//               <div className="">
//                 <img
//                   src={Images.requestNewProductBack}
//                   className="mt-2 mob-request-new-product-component-back-btn-img"
//                   alt="Bootstrap"
//                   width="56"
//                   height="56"
//                 />
//               </div>
//               <input
//                 type="text"
//                 className="form-control fs-12 w-75"
//                 placeholder="Search here, the product you didn't found..."
//                 aria-label="Username"
//                 aria-describedby="addon-wrapping"
//                 value={searchRequestNewProduct}
//                 onChange={(e) => setSearchRequestNewProduct(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobRequestNewProductComponent;

import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import "./MobRequestNewProductComponent.css";
import { Images } from "../../assets";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import MobBottomNavComponent from "../MobBottomNavComponent";

const MobRequestNewProductComponent = () => {
  const [searchRequestNewProduct, setSearchRequestNewProduct] = useState("");
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchRequestNewProduct.trim() === "") {
      // If search input is empty, do not proceed with the search
      return;
    }
    // You would perform your search operation here. For the sake of example, I'll just set searchResultNotFound to true.
    setSearchResultNotFound(true);
    // Show search history after a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setShowSearchHistory(true);
    }, 2000);
  };

  const helpQueriers = [
    {
      id: 1,
      image:
        "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/64a2b8552736cd1430c034e2/ewf0102-320x320.png",
      name: "Cream Biscuits in Cookies & Biscuits",
    },
    {
      id: 2,
      image:
        "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/64a2b8552736cd1430c034e2/ewf0102-320x320.png",
      name: "Head & Shoulder shampoo in Soaps & Shampoo",
    },
    {
      id: 3,
      image:
        "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/64a2b8552736cd1430c034e2/ewf0102-320x320.png",
      name: "Cream Biscuits in Cookies & Biscuits",
    },
    {
      id: 4,
      image:
        "https://www.edobo.in/s/60a39f1801d30d79c4caa94b/64a2b8552736cd1430c034e2/ewf0102-320x320.png",
      name: "HMT Kolam Rice/Tandool in Rice & Rice Products",
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Request New Product"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="mt-3 mx-3">
        <div
          className="card shadow-sm p-2 cursor-pointer"
          onClick={() => {
            // navigate(ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT_SEARCH);
          }}
        >
          <div>
            <div className="text-danger fs-14 fw-bold">Hey Harshil Doshi,</div>
            <div className="text-secondary">You didn't find your stuff ?</div>
          </div>

          <div className="mt-3 ">
            <div className="d-flex gap-2">
              <div>
                <img
                  src={Images.requestNewProductBack}
                  className="mt-2 mob-request-new-product-component-back-btn-img"
                  alt="Bootstrap"
                  width="56"
                  height="56"
                />
              </div>
              <input
                type="text"
                className="form-control fs-12 w-100"
                placeholder="Search here, the product you didn't found..."
                aria-label="Search"
                aria-describedby="addon-wrapping"
                value={searchRequestNewProduct}
                onChange={(e) => setSearchRequestNewProduct(e.target.value)}
              />
            </div>
            <div
              className="btn bg-danger text-white mt-2 justify-content-center align-items-center d-flex"
              onClick={handleSearch}
            >
              Search
            </div>
          </div>
        </div>
        {/* {searchResultNotFound && (
          <div className="text-danger fs-6 mt-4 justify-content-center align-items-center d-flex ">
            No product found.
          </div>
        )} */}
        {searchResultNotFound &&
          !showSearchHistory && ( // Only show "No product found" if search history is not shown
            <div className="text-danger fs-6 mt-4 justify-content-center align-items-center d-flex ">
              No product found.
            </div>
          )}
      </div>

      {showSearchHistory && (
        <div className="mt-3">
          <div className="mob-request-new-product-component-heading-container ">
            <div className="">Search History</div>
          </div>

          <div className="mt-3  mob-request-new-product-component-border-bottom">
            <div className="list-group list-group-flush">
              {helpQueriers.map((support, index) => (
                <li
                  key={index}
                  className="list-group-item mob-drawer-manu-list  d-flex justify-content-between align-items-center"
                  aria-label="Close"
                  // onClick={support.onClick}
                >
                  <div className="d-flex align-items-center">
                    {support.image && ( // Check if image is available
                      <img
                        src={support.image}
                        alt={support.name}
                        className="me-3 border mob-request-new-product-component-history-image"
                        // style={{ width: "35px", height: "35px" }}
                      />
                    )}
                    <div>{support.name}</div>
                  </div>
                  <div>
                    {/* Add your chevron icon or any other content here */}
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className=" mt-3 d-flex  justify-content-end  align-items-center pe-4 gap-3  ">
            <div>
              <img
                src={Images.requestNewProductBack}
                className=" mob-request-new-product-component-back-btn-img"
                alt="Bootstrap"
                width="56"
                height="56"
              />
            </div>
            <div
              className=" mob-request-new-product-component--btn-request-here"
              onClick={() => {
                navigate(ROUTES_NAVIGATION.REQUEST_NEW_PRODUCT_SEARCH);
              }}
            >
              Request Here
            </div>
          </div>
        </div>
      )}
      <MobBottomNavComponent />
    </>
  );
};

export default MobRequestNewProductComponent;
