// import React from "react";
// import "./FlipCardComponent.css";

// const FlipCardComponent = ({
//   frontContent,
//   backContent,
//   frontColor,
//   backColor,
//   activeOffer =true
// }) => {
//   return (
//     <div className="flip-card ">
//       <div className="flip-card-inner">
//         <div
//           className="flip-card-front"
//           style={{ backgroundColor: frontColor }}
//         >
//           {frontContent}
//         </div>

//         <div
//           className="flip-card-back"
//           style={{ border: `1px solid ${backColor}` }}
//         >
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCardComponent;

import React from "react";
import "./FlipCardComponent.css";

const FlipCardComponent = ({
  frontContent,
  backContent,
  frontColor,
  backColor,
  activeOffer = true,
}) => {
  return (
    <div className={`flip-card ${activeOffer ? "active" : "inactive"}`}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundColor: frontColor }}
        >
          {frontContent}
        </div>

        <div
          className="flip-card-back"
          style={{ border: `1px solid ${backColor}` }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCardComponent;
