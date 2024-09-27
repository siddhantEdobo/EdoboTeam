import React from "react";
import "./ProductDetailsCard.css";
import ProductDetailsImageComponent from "./ProductDetailsImageComponent";
import ProductDetailsDescriptionComponent from "./ProductDetailsDescriptionComponent";
// import RelatedProductComponent from "./RelatedProductComponent";
import ProductCard from "../../common/ProductCard";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
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
  },
  {
    id: 2,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 2. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 3. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 4,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 3. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 5,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 3. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 6,
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Combo",
    description:
      "This is a short description of Product 3. You can provide additional details here.",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
];

const ProductDetailsComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container home-container">
        <div className="row">
          <div className="col-6 ">
            <ProductDetailsImageComponent />
          </div>
          <div className="col-6">
            <ProductDetailsDescriptionComponent />
          </div>
          {/* <div
            className="accordion"
            id="accordionExample"
            style={{ background: "none", marginTop: "10px" }}
          >
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Products Details
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Key Features
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        Made with wholegrains of Corn and Oats to add the
                        perfect crunch to your breakfast. Calcium and Vitamin D
                        combination helps you maintain bone health. Source of
                        Iron, Folic acid, B-Vitamins and Fibre.
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Ingredients
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        some this on key product
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Shelf Life
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        some this on key product
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Manufacturer Details
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        some this on key product
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        FSSAI License
                      </h3>
                      <p style={{ fontSize: "12px" }}>11522008000380</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Disclaimer
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div>
                      <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Disclaimer
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        Every effort is made to maintain accuracy of all
                        information. However, actual product packaging and
                        materials may contain more and/or different information.
                        It is recommended not to solely rely on the information
                        presented
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container">
        <div>
          <h4 style={{ marginLeft: "4%", marginBottom: "2%" }}>
            Related Products
          </h4>
        </div>
        <div className="productdetails-scrollable-container">
          <div className="row row-cols-5">
            {products?.map((productId) => (
              <div className="col" key={parseInt(productId)}>
                <ProductCard
                  imageSrc={products[productId].imageSrc}
                  title={products[productId].title}
                  price={products[productId].price}
                  mrp={products[productId].mrp}
                  onClick={() => {
                    navigate(
                      ROUTES_NAVIGATION.PRODUCT_DETAILS +
                        "/" +
                        productId?.title.toLocaleLowerCase().replaceAll(" ", "-")
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
