import React from "react";
import { Images } from "../../assets";

const FooterComponent = () => {
  return (
    <section>
      <div className="footer-band">
        <span className="footer-band1"></span>
        <span className="footer-band2"></span>
        <span className="footer-band3"></span>
        <span className="footer-band4"></span>
      </div>
      <div className="container pt-3 w-100 mw-100">
        <footer className="py-1">
          <div className="row p-0">
            <div className="col-3">
              <div className=" d-flex">
                <img
                  src={Images.footerIcon}
                  alt="Bootstrap"
                  width="56"
                  height="56"
                  className=""
                />
                <h6 className="p-2 fw-bold">
                  30 MIN DELIVERY guaranteed to specific locations
                </h6>
              </div>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>TOP CATEGORIES</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Mask Sanitizers & Disinfectant
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pooja Essentials
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Body Care
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Tea
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Bins & Bath Ware
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>GET TO KNOW US</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Blogs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Sitemap
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-2">
              <h5>CONSUMERS ONLY</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    My Account
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="col-2">
              <h5>CONSUMERS INFORMATION</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Privacy & Cookie Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Refund & Cancellation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>EARN LITTLE MORE FROM edobo</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 ">
                  <a href="/" className="nav-link p-0 text-muted font-size-sm">
                    <div className="font-size-sm"> Become a Vendor</div>
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
          </div>

          <div className="d-flex justify-content-center py-4 my-4 border-top">
            <p>
              Copyright © 2020-23 Yosha FoodTech Pvt Ltd. All rights reserved.
              Powered by StoreHippo
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="/twitter"></use> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="/instagram"></use> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="/facebook"></use> */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterComponent;
