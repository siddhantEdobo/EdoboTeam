// import React from "react";
// import "./MobReviewedComponent.css";
// import { Images } from "../../assets";

// const MobReviewedComponent = () => {
//   return (
//     <div className="container-fluid">
//       <div className="mob-tobe-reviewed-component-emptylistimg-main-container">
//         <img
//           src={Images.ratingReviewImg}
//           alt="MobToBeReviwedComponent"
//           className="mob-tobe-reviewed-component-image"
//         />
//       </div>

//       <div className="d-flex justify-content-center ">
//         <div>
//           <div>You have no past reviews</div>
//           <div className="d-flex gap-2">
//             <div className="mt-1">Let's get started</div>
//             <div className="mob-tobe-reviewed-component-order-now">
//               Order now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobReviewedComponent;

import React, { useState } from "react";
import "./MobReviewedComponent.css";
import { Images } from "../../assets";
const MobReviewedComponent = ({ data }) => {
  // Check if data is not coming from API or if the list is empty
  const isEmpty = !data || data.length === 0;
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [text, setText] = useState("");
  const maxLength = 180; // Define your character limit here

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const reviewData = [
    {
      id: 1,
      productName: "HMT Kolam Rice/Tandool",
      lastBought: "Last bought by you - 3 months ago",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
      stars: 2, // Number of stars for this review
    },
    {
      id: 2,
      productName: "HMT Kolam Rice/Tandool",
      lastBought: "Last bought by you - 3 months ago",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
      stars: 3, // Number of stars for this review
    },
    {
      id: 3,
      productName: "HMT Kolam Rice/Tandool",
      lastBought: "Last bought by you - 3 months ago",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
      stars: 1, // Number of stars for this review
    },
    {
      id: 4,
      productName: "HMT Kolam Rice/Tandool",
      lastBought: "Last bought by you - 3 months ago",
      imageUrl:
        "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
      stars: 4, // Number of stars for this review
    },
  ];

  //   If data is not available or list is empty, show this UI

  //   if (isEmpty) {
  //     return (
  //       <div>
  //         <div className="mob-tobe-reviewed-component-emptylistimg-main-container">
  //           <img
  //             src={Images.ratingReviewImg}
  //             alt="MobToBeReviwedComponent"
  //             className="mob-tobe-reviewed-component-image"
  //           />
  //         </div>
  //         <div className="d-flex justify-content-center">
  //           <div>
  //             <div>You have no past reviews</div>
  //             <div className="d-flex gap-2">
  //               <div className="mt-1">Let's get started</div>
  //               <div className="mob-tobe-reviewed-component-order-now">
  //                 Order now
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  //   If data is available, you can render your regular UI

  return (
    <div className="container-fluid m-0 p-0">
      <div className="edobo-white">
        {reviewData.map((review) => (
          <div className="p-2 " key={review.id}>
            <div className=" d-flex border-bottom ">
              <div className="col-3 ">
                <div className="rating-and-review-img-list-container">
                  <img
                    className="w-100 h-100 "
                    src={review.imageUrl}
                    alt="productimage"
                  />
                </div>
              </div>

              <div className="col-9 ms-3">
                <div className="pb-2 ">
                  <div className="fw-bold">{review.productName}</div>
                  <div className="text-secondary">{review.lastBought}</div>

                  <div className="mt-2 d-flex justify-content-between align-items-center mob-review-component-review-edit">
                    <div>
                      <div className="d-flex">
                        {[...Array(5)].map((_, index) => (
                          <span
                            className="fs-6 me-1"
                            key={index}
                            style={{
                              color: index < review.stars ? "red" : "lightgrey",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="fw-bold fs-10">Better Quality</div>
                    </div>

                    {/* <div
                      className={`mb-2 d-flex justify-content-center align-items-center border p-2 w-25 me-2 fw-bold ${
                        isActive
                          ? "text-success border-success"
                          : "text-danger border-danger"
                      }`}
                      onClick={toggleActive}
                      data-bs-toggle="collapse"
                      data-bs-target={`#writeReviewCollapse${review.id}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`writeReviewCollapse${review.id}`}
                    >
                      Edit
                    </div> */}

                    {/* <div
                        className="mb-2 d-flex justify-content-center align-items-center border text-danger border-danger w-25 p-2 me-2 fw-bold"
                        data-bs-toggle="collapse"
                        data-bs-target={`#writeReviewCollapse${review.id}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls={`writeReviewCollapse${review.id}`}
                        >
                        Edit
                        </div> */}

                    {/* <div
                      className="mb-2 d-flex justify-content-center align-items-center border text-danger border-danger w-25 p-2 me-2 fw-bold"
                      data-bs-toggle="collapse"
                      href={`#writeReviewCollapse${review.id}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`writeReviewCollapse${review.id}`}
                    >
                      Edit
                    </div> */}
                  </div>

                  {/* <div
                    className="collapse"
                    id={`writeReviewCollapse${review.id}`}
                  >
                    <div className="p-1 fw-bold">Product Review</div>

                    <div className="w-100">
                      <textarea
                        placeholder="E.g. : Good product..."
                        className="form-control fs-10"
                        aria-label="with textarea"
                        value={text}
                        onChange={handleChange}
                      ></textarea>
                      <div className="justify-content-end">
                        {maxLength - text.length}/{maxLength}
                      </div>
                    </div>

                    <div className="cursor-pointer mt-3 fw-bold p-1 border border-danger rounded-2 w-50 h-25 d-flex justify-content-center text-danger mb-2">
                      Submit
                    </div>
                  </div> */}
                </div>

                <div>
                  <div>
                    Review Date: <span className="">1 month ago</span>{" "}
                  </div>
                  <div>
                    Status:{" "}
                    <span className="fw-bold text-success">Published</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobReviewedComponent;
