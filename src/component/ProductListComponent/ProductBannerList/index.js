// ProductBannerList.js

// import React from "react";
// import "./ProductBannerList.css"; // Import your CSS file
// import BannerImage from "../../../assets/ProductBannerVegitable.png";

// const ProductBannerList = () => {
//   return (
//     <div>
//       <div className="banner-container">
//         <img
//           src={BannerImage} // Replace with the actual path to your banner image
//           alt="Banner Image"
//           className="banner-image"
//         />
//       </div>
//       <div>Buy Fresh Vegitable Online</div>
//     </div>
//   );
// };

// export default ProductBannerList;

// ProductBannerList.js

import React from "react";
import "./ProductBannerList.css"; // Import your CSS file
import ProductCard from "../../../common/ProductCard";
import BannerImage from "../../../assets/ProductBannerVegitable.png";
import ProductFilterModalComponent from "./ProductFilterModalComponent";
// import FilterModalComponent from "./"

const products = [
  {
    id: 1,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 1. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
    discount: "17% off",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fe73ec7e7a6a3500ed13/8901058905656-2--320x320.png",
    title: "Cabbage 500gm - 900gm",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹61.3",
    mrp: "₹531.3",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502fe73ec7e7a6a3500ed13/8901058905656-2--320x320.png",
    title: "Banana Raw 500 Gm",
    description:
      "This is a short description of Product 1. You can provide additional details here.",
    price: "₹ 451.3",
    mrp: "₹ 4001.3",
  },
  {
    id: 4,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eece0fb0249f8a0f4c60/8901453000024-320x320.png",
    title: "Product 2",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 681.3",
    mrp: "₹ 691.3",
  },
  {
    id: 5,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eca33fcf6003a40c09f8/8908013746026-320x320.png",
    title: "Product 1",
    description:
      "This is a short description of Product 1. You can provide additional details here.",
    price: "₹ 31.3",
    mrp: "₹ 31.3",
  },
  {
    id: 6,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eadcd4765e38729b8eff/8901725012557-2--320x320.png",
    title: "Product 2",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 451.3",
    mrp: "₹ 451.3",
  },
  {
    id: 7,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eb80d4765e38729b9d8a/8901120143726-320x320.png",
    title: "Product 2",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 342.3",
    mrp: "₹ 342.3",
  },
  {
    id: 8,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eba6bc232a38cb7ca6d3/8901207004421-320x320.png",
    title: "Product 2",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 441.3",
    mrp: "₹ 441.3",
  },
  {
    id: 9,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502eba6bc232a38cb7ca6d3/8901207004421-320x320.png",
    title: "Product 2",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 441.3",
    mrp: "₹ 441.3",
    discount: "17% off",
  },
];

const ProductBannerList = () => {
  return (
    <div>
      <div className="container-xxl">
        <img
          src={BannerImage}
          alt="Special Sale Banner"
          className="banner-image"
        />
      </div>

      <div className="my-4 d-flex justify-content-between ms-2 me-3">
        <div className="fs-6 fw-bold text-danger">
          Buy Fresh Vegetables Online
        </div>

        <div className="d-flex gap-2 ">
          <div className="product-card-sort-filter-container">Veg</div>
          <div className="product-card-sort-filter-container">Non-Veg</div>
          <div className="product-card-sort-filter-container">Vegan</div>
          <div className="product-card-sort-filter-container">Eggitarian</div>
          <div className="product-card-sort-container">
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option selected>Sort By</option>
              <option value="1">Price(Low to high)</option>
              <option value="2">Price(High to Low)</option>
              <option value="3">Name(Accending order)</option>
              <option value="4">Name (Descending order)</option>
            </select>
          </div>
          <div
            aria-current="page"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasProductFilter"
            aria-controls="offcanvasRight"
          >
            <div className="product-card-sort-filter-container">Filter</div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasProductFilter"
        aria-labelledby="offcanvasRightLabel"
      >
        <ProductFilterModalComponent />
      </div>

      <div className="">
        <div className="row">
          {products.map((product) => (
            <div className=" col-lg-3 col-4" key={product.id}>
              <div className="edititable-product-image-container mt-4 ">
                <ProductCard
                  // discountValue={product?.discount}
                  imageSrc={product.imageSrc}
                  title={product.title}
                  // description={product.description}
                  price={product.price}
                  mrp={product.mrp}
                  onAddtoCartClick={() => {
                    console.log("___________________");
                  }}
                />
              </div>
              {/* <ProductCard
                imageSrc={product.imageSrc}
                title={product.title}
                // description={product.description}
                price={product.price}
                mrp={product.mrp}
              /> */}
            </div>
          ))}
        </div>
      </div>
      {/* // <div className="product-list-container">
      //   {products.map((product) => (
      //     <ProductCard
      //       key={product.id}
      //       imageSrc={product.imageSrc}
      //       title={product.title}
      //       // description={product.description}
      //       price={product.price}
      //       mrp={product.mrp}
      //     />
      //   ))}
      // </div> */}
    </div>
    // <>
    //   <div className="container">
    //     <div className="row row-cols-3">
    //       {products.map((product) => (
    //         <div className="col ">
    //           <ProductCard
    //             key={product.id}
    //             imageSrc={product.imageSrc}
    //             title={product.title}
    //             // description={product.description}
    //             price={product.price}
    //             mrp={product.mrp}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
};

export default ProductBannerList;
