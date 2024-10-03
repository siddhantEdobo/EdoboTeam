import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../../common/AddToCartButton"; // Updated import to use the AddToCartButton
import { removeFromCart } from "../../redux/Slices/Cart/cartSlice";
import ROUTES_NAVIGATION from "../../routes/routes";
import emptycart from "../../assets/Icon/empty-cart.png";
import "./ShowCartSummaryComponent.css";
import { useNavigate } from "react-router-dom";

const ShowCartSummaryComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeButtonRef = useRef();

  // Fetching cart data from Redux
  const cartItems = useSelector((state) => state.myCart.cartItems);
  const totalPrice = useSelector((state) => state.myCart.totalPrice);
  const totalItems = useSelector((state) => state.myCart.totalItems);

  return (
    <>
      <div className="offcanvas-header edobo-red">
        <div className="d-flex text-bg-black text-white m-2">
          <FontAwesomeIcon icon={faCartShopping} width="30" height="30" />
        </div>

        <div className="d-flex w-100 justify-content-between ">
          <h6 className="offcanvas-title text-white" id="offcanvasRightLabel">
            Show Cart Summary
          </h6>
        </div>

        <button
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className="btn-close bg-dark bg-white"
          ref={closeButtonRef}
        ></button>
      </div>

      {/* Show empty cart message if there are no items */}
      {cartItems && cartItems.length === 0 ? (
        <div className="offcanvas-body">
          <div className="justify-content-center text-center">
            <div className="my-5">
              <img src={emptycart} alt="empty cart" width={100} />
            </div>
            <div className="fs-4 fw-bold my-2">It's raining discounts!</div>
            <div className="fs-13 fw-semibold">just not in your cart</div>
            <button className="btn btn-danger rounded-5 mt-3 w-75">
              Quick, Grab them here!
            </button>
            <div className="fs-6 fw-semibold my-3">Fill it up with...</div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-danger rounded-5 me-2">
                Combos
              </button>
              <button className="btn btn-outline-danger rounded-5">
                Personal Care
              </button>
            </div>
            <div className="d-flex justify-content-center my-2">
              <button className="btn btn-outline-danger rounded-5 me-2">
                Baby Care
              </button>
              <button className="btn btn-outline-danger rounded-5">
                Snacks
              </button>
            </div>
            <button className="btn btn-outline-danger rounded-5">
              Fruits & Vegetables
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="offcanvas-body">
            {/* Loop through cart items */}
            {cartItems.map((item, index) => (
              <div key={index} className="border-bottom p-3">
                <div className="row">
                  <div className="col border showcartsummar-fixed-size-container">
                    <img
                      loading="lazy"
                      src={item.imageSrc}
                      alt={item.title}
                      className="h-100 w-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-7 ps-2 pe-2">
                    <div>
                      <div className="showcartsummar-bg-dark">
                        <h6 className="showcartsummar-col2-title m-0">
                          {item.title}
                        </h6>
                      </div>
                      <div className="showcartsummar-text-container">
                        <div className="fs-14 fw-bold">₹{item.price}</div>
                        <div className="fs-12">{item.weight || "245.5Gm"}</div>
                      </div>
                      <div className="align-items-center justify-content-center d-flex pt-2">
                        {/* Use the updated AddToCartButton */}
                        <AddToCartButton id={item.id} product={item} />
                      </div>
                    </div>
                  </div>
                  <div className="col pt-2">
                    <div
                      className="cursor-pointer text-danger"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section for total and checkout */}
          <div className="offcanvas-bottom">
            <div className="fs-7 d-flex w-100 justify-content-between border-bottom border-danger-subtle p-1">
              <div className="fs-7 fw-bold">Sub Total</div>
              <div className="m-1 fw-bold">₹{totalPrice}</div>
            </div>
            <div className="d-flex w-100 justify-content-between p-1 mt-1 ">
              <div>Total</div>
              <div className="m-1 fw-bold">₹{totalPrice}</div>
            </div>

            <div className="row m-0">
              <div className="col bg-warning showcartsummar-bottom-button-container">
                <div className="fs-6 text-white">Checkout</div>
              </div>

              <div
                className="col bg-danger showcartsummar-bottom-button-container"
                onClick={() => {
                  closeButtonRef?.current?.click();
                  navigate(ROUTES_NAVIGATION.CART);
                }}
              >
                <div className="fs-6 text-white">View Cart</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowCartSummaryComponent;
