import React, { useState } from "react";

const FeaturesServiceComponent = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="container-lg">
      <div className="inner-container  pt-4">
        <ul className="">
          <li>
            Shop Save more on edobo and get all your daily needs (groceries,
            fruits, vegetables, milk, bread, daily essentials at lowest prices
            guaranteed on shopping cart with same day delivered hassle-free way
            on doorstep.
          </li>
          <li>
            Buy from a miscellany of more than 4000+ branded products online
            low-price guaranteed shop without worry of getting products
            sanitized, we use UV Technology to sanitize all things.
          </li>
          <li>
            Order online fill your home pantry from our smart grocery app which
            provides super savings, best offers, low price, best buys, best
            prices, farm fresh products, organic, groceries & essentials
            contactless safely delivered.
          </li>
          <li>
            edobo is committed to providing you with exceptional service,
            insanely fresh produce & edobo Shoppers you can trust. Whatever you
            need add it in the cart. Get fresh, handpicked groceries & household
            essentials
          </li>
        </ul>
        <div className="fs-4 p-3 fs-3">APP FEATURES & SERVICES</div>
        <ul className="lh-lg">
          <li>
            Grocery or daily essentials delivery to home, office or anywhere in
            FLAT 90 mins by ordering on the most convenient grocery delivery app
            in the city!
          </li>
          <li>
            Shop online handpicked fresh fruits & vegetables, milk; cow milk &
            cow ghee; dairy products, personal care | beauty & wellness | mom &
            baby care | pet shop from top brands like Amul | Nestle | Marico |
            Pepsi | Mother Dairy | Parle | Maggie | TATA & many more.
          </li>
          <li>edobo brings the store at door</li>
          <span>
            {readMore ? (
              <>
                <li>
                  Get access to exclusive savings, coupons, sale alerts on the
                  items you love to order & don't letgo the offers.
                </li>
                <li>
                  Reorder products from past purchases for added convenience.
                </li>
                <li>
                  Shop conveniently from anywhere – whether you’re home, the
                  office or on the road.
                </li>
                You will adore edobo your daily convenience store
                <ul>
                  <li>
                    Lowest price guaranteed : 100% It’s super reasonably priced,
                    convenient, reliable
                  </li>
                  <li>
                    100% Assured quality : We do not compromise on quality
                  </li>
                  <li>Same day delivered shopping : Doorstep drop @90min</li>
                  <li>
                    On time delivery assurance : If we delay you earn additional
                    benefit of 5% off *
                  </li>
                  <li>
                    100% doorstep return & exchange policy: Didn't like the
                    product? Return it on delivery, no questions asked.
                  </li>
                  <li>
                    Offers & discounts : Receive notifications every day & avail
                    the lowest prices guaranteed.
                  </li>
                  <li>
                    No Minimum Order : Order Rs.100, Rs.500 or Rs.1000, we never
                    ask for minimum order.
                  </li>
                </ul>
                💌 Recommendation, Suggestions are always Welcome : Drop us 📧
                info@edobo.co or 📞 (+91) 908 908 908 4. 🚛Deliver Available :
                Mumbai, Navi Mumbai & Thane
              </>
            ) : (
              <span></span>
            )}
          </span>
          {/* </li> */}
        </ul>

        <div
          onClick={() => {
            setReadMore(!readMore);
          }}
          role="button"
          className="justify-content-end d-flex text-primary text-decoration-underline "
        >
          Read More
        </div>

        {/* <div className=" justify-content-end d-flex ">Read More</div> */}
      </div>
    </div>
  );
};

export default FeaturesServiceComponent;
