// import React, { useState } from "react";
// import MobHeaderComponent from "../MobHeaderComponent";

// import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

// const MobCutomerSupportFAQHelpQueriesComponent = () => {
//   const helpQueriers = [
//     {
//       id: 1,
//       icon: faCircleQuestion,
//       name: "FAQ's",
//     },
//     {
//       id: 2,
//       icon: faCircleQuestion,
//       name: "General",
//     },
//   ];

//   return (
//     <>
//       <MobHeaderComponent
//         isBack={true}
//         headerText={"Help With Queries"}
//         isCartShow={false}
//       />
//       <div className="container-fluid m-0 p-0 t">
//         <div className="mob-cart-choose-change-location-container-heading">
//           <div className="">FAQ's</div>
//         </div>

//         <div class="accordion" id="accordionPanelsStayOpenExample">
//           <div class="accordion-item">
//             <h2 class="accordion-header">
//               <button
//                 class="accordion-button"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#panelsStayOpen-collapseOne"
//                 aria-expanded="true"
//                 aria-controls="panelsStayOpen-collapseOne"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="panelsStayOpen-collapseOne"
//               class="accordion-collapse collapse show"
//             >
//               <div class="accordion-body">
//                 <strong>This is the first item's accordion body.</strong> It is
//                 shown by default, until the collapse plugin adds the appropriate
//                 classes that we use to style each element. These classes control
//                 the overall appearance, as well as the showing and hiding via
//                 CSS transitions. You can modify any of this with custom CSS or
//                 overriding our default variables. It's also worth noting that
//                 just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div class="accordion-item">
//             <h2 class="accordion-header">
//               <button
//                 class="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#panelsStayOpen-collapseTwo"
//                 aria-expanded="false"
//                 aria-controls="panelsStayOpen-collapseTwo"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="panelsStayOpen-collapseTwo"
//               class="accordion-collapse collapse"
//             >
//               <div class="accordion-body">
//                 <strong>This is the second item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classes that we use to style each element. These
//                 classes control the overall appearance, as well as the showing
//                 and hiding via CSS transitions. You can modify any of this with
//                 custom CSS or overriding our default variables. It's also worth
//                 noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//           <div class="accordion-item">
//             <h2 class="accordion-header">
//               <button
//                 class="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#panelsStayOpen-collapseThree"
//                 aria-expanded="false"
//                 aria-controls="panelsStayOpen-collapseThree"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="panelsStayOpen-collapseThree"
//               class="accordion-collapse collapse"
//             >
//               <div class="accordion-body">
//                 <strong>This is the third item's accordion body.</strong> It is
//                 hidden by default, until the collapse plugin adds the
//                 appropriate classes that we use to style each element. These
//                 classes control the overall appearance, as well as the showing
//                 and hiding via CSS transitions. You can modify any of this with
//                 custom CSS or overriding our default variables. It's also worth
//                 noting that just about any HTML can go within the{" "}
//                 <code>.accordion-body</code>, though the transition does limit
//                 overflow.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobCutomerSupportFAQHelpQueriesComponent;

import React, { useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "./MobCutomerSupportFAQHelpQueriesComponent.css";
import MobBottomNavComponent from "../MobBottomNavComponent";

const MobCutomerSupportFAQHelpQueriesComponent = () => {
  const helpQueriers = [
    {
      id: 1,
      name: "Can I edit my order?",
    },
    {
      id: 2,
      name: "I want to cancel my order",
    },
    {
      id: 3,
      name: "Can I order from any location?",
    },
    {
      id: 4,
      name: "What is the delivery charges?",
    },
  ];

  return (
    <>
      <MobHeaderComponent
        isBack={true}
        headerText={"Help With Queries"}
        isCartShow={false}
        isEdoboLogo={true}
      />
      <div className="container-fluid m-0 p-0 t">
        <div className="mob-cart-choose-change-location-container-heading">
          <div className="">FAQ's</div>
        </div>

        <div className="mt-3 accordion" id="accordionPanelsStayOpenExample">
          {helpQueriers.map((query, index) => (
            <div className="accordion-item" key={index}>
              <div className="">
                <div
                  className="accordion-button fw-bold fs-13"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsStayOpen-collapse${query.id}`}
                  aria-expanded="true"
                  aria-controls={`panelsStayOpen-collapse${query.id}`}
                >
                  {query?.name}
                </div>
              </div>
              <div
                id={`panelsStayOpen-collapse${query?.id}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <strong>This is the {query.name} accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MobBottomNavComponent />
    </>
  );
};

export default MobCutomerSupportFAQHelpQueriesComponent;

// import React from "react";
// import MobHeaderComponent from "../MobHeaderComponent";
// import "./MobCutomerSupportFAQHelpQueriesComponent.css";

// const MobCutomerSupportFAQHelpQueriesComponent = () => {
//   const helpQueriers = [
//     {
//       id: 1,
//       name: "Can I edit my order?",
//     },
//     {
//       id: 2,
//       name: "I want to cancel my order",
//     },
//     {
//       id: 3,
//       name: "Can I order from any location?",
//     },
//     {
//       id: 4,
//       name: "What is the delivery charges?",
//     },
//   ];

//   return (
//     <>
//       <MobHeaderComponent
//         isBack={true}
//         headerText={"Help With Queries"}
//         isCartShow={false}
//       />
//       <div className="container-fluid m-0 p-0 t">
//         <div className="mob-cart-choose-change-location-container-heading">
//           <div className="">FAQ's</div>
//         </div>

//         <div className="accordion" id="accordionPanelsStayOpenExample">
//           {helpQueriers.map((query, index) => (
//             <div className="accordion-item" key={index}>
//               <div className="accordion-header">
//                 <button
//                   className="accordion-button fw-bold fs-13"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#panelsStayOpen-collapse${query.id}`}
//                   aria-expanded="true"
//                   aria-controls={`panelsStayOpen-collapse${query.id}`}
//                 >
//                   {query.name}
//                 </button>
//               </div>
//               <div
//                 id={`panelsStayOpen-collapse${query.id}`}
//                 className="accordion-collapse collapse"
//               >
//                 <div className="accordion-body">
//                   <strong>This is the {query.name} accordion body.</strong> It
//                   is hidden by default, until the collapse plugin adds the
//                   appropriate classes that we use to style each element. These
//                   classes control the overall appearance, as well as the showing
//                   and hiding via CSS transitions. You can modify any of this
//                   with custom CSS or overriding our default variables. It's also
//                   worth noting that just about any HTML can go within the{" "}
//                   <code>.accordion-body</code>, though the transition does limit
//                   overflow.
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobCutomerSupportFAQHelpQueriesComponent;
