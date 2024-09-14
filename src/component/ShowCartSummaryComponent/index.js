import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import "./ShowCartSummaryComponent.css";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../../common/AddToCartButton";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import AddToCartButtonCustomIcon from "../../common/AddToCartButtonCustomIcon";
import emptycart from "../../assets/Icon/empty-cart.png";

const ShowCartSummaryComponent = ({ items }) => {
  const navigate = useNavigate();
  const closeButtonRef = useRef();

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

      {items && items.length === 0 ? (
        <>
          <div className="offcanvas-body">
            <div className="justify-content-center text-center">
              <div className="my-5">
                <img src={emptycart} alt="empty cart" width={100} />
              </div>
              <div className="fs-4 fw-bold my-2">It's raining discounts!</div>
              <div className="fs-13 fw-semibold">just not in your cart</div>
              <button className="btn btn-danger rounded-5 mt-3 w-75">
                Quick, Grab then here!
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
        </>
      ) : (
        <>
          <div className="offcanvas-body">
            {[...Array(3)].map((value, index) => {
              return (
                <div key={index} className=" border-bottom p-3">
                  <div className="row">
                    <div className="col border showcartsummar-fixed-size-container ">
                      <img
                        loading="lezy"
                        src="https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6136e2ca20d2f2aea22eb138/grocery-staples-oils-300X300.jpg"
                        alt={""}
                        className="h-100 w-100 object-fit-cover "
                      />
                    </div>
                    <div className="col-7 ps-2 pe-2">
                      <div>
                        <div className="showcartsummar-bg-dark">
                          <h6 className="showcartsummar-col2-title showcartsummar-bg-dark m-0 ">
                            Parle Kismi Assorted Toffees
                          </h6>
                        </div>
                        <div className="showcartsummar-text-container ">
                          <div className="fs-14 fw-bold">₹50</div>
                          <div className="fs-12">245.5Gm</div>
                        </div>
                        <div className="align-items-center justify-content-center d-flex pt-2">
                          <AddToCartButtonCustomIcon quantity={1} />
                        </div>
                      </div>
                    </div>
                    <div className="col pt-2">
                      <div className="cursor-pointer text-danger">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="offcanvas-bottom">
            <div className="fs-7 d-flex w-100 justify-content-between border-bottom 1 border-danger-subtle p-1">
              <div className="fs-7 fw-bold">Sub Total</div>
              <div className="m-1 fw-bold">₹3,597</div>
            </div>
            <div className="d-flex w-100 justify-content-between p-1 mt-1 ">
              <div>Total</div>
              <div className="m-1 fw-bold">₹3,597</div>
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
