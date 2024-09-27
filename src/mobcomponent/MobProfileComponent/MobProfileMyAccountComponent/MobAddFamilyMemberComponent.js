// import React, { useState } from "react";
// import "./MobProfileEditAccount.css";

// const MobAddFamilyMemberComponent = ({ onClose }) => {
//   const [editName, setEditName] = useState("");
//   //   const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State to manage the visibility of the success alert
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleAddSuccess = () => {
//     // setIsFamilyShow(false);
//     onClose();
//     setShowSuccess(true);

//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 5000); // 5000 milliseconds = 5 seconds
//   };

//   return (
//     <div>
//       <div className="mt-2">
//         <div className=" mt-2">
//           <div className="fw-bold">Mobile Number</div>

//           <div className=" mt-1">
//             <input
//               type="text"
//               className="form-control w-100 h-100 fs-14 p-2"
//               placeholder="Enter mobile no"
//               value={editName}
//               onChange={(e) => setEditName(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="fw-bold mt-2">Relation</div>
//         <div class="input-group mb-3 mt-1">
//           <select className="form-select" id="inputGroupSelect01">
//             <option selected>Select relationship</option>
//             <option value="1">WIfe</option>
//             <option value="2">Husband</option>
//             <option value="3">Daughter</option>
//             <option value="4">Son</option>
//             <option value="5">Mother</option>
//             <option value="6">Father</option>
//             <option value="7">Sister</option>
//             <option value="8">Brother</option>
//           </select>
//         </div>
//       </div>

//       <div className="d-flex justify-content-center align-items-center mt-5">
//         <div
//           className="mob-profile-editaccount-update"
//           onClick={() => {
//             handleAddSuccess();
//           }}
//         >
//           ADD
//         </div>
//       </div>

//       {/* Render success alert if showSuccessAlert is true */}
//       {showSuccess && (
//         <div className="alert alert-success" role="alert">
//           Invitation sent successfully.
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobAddFamilyMemberComponent;

import React, { useState } from "react";
import "./MobProfileEditAccount.css";

const MobAddFamilyMemberComponent = ({ onClose }) => {
  const [editName, setEditName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  console.log(onClose);

  const handleAddSuccess = () => {
    onClose();
    setShowSuccess(true); // Set showSuccess to true
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <div>
      <div className="mt-2">
        <div className=" mt-2">
          <div className="fw-bold">Mobile Number</div>
          <div className=" mt-1">
            <input
              type="text"
              className="form-control w-100 h-100 fs-14 p-2"
              placeholder="Enter mobile no"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
        </div>

        <div className="fw-bold mt-2">Relation</div>
        <div className="input-group mb-3 mt-1">
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Select relationship</option>
            <option value="1">WIfe</option>
            <option value="2">Husband</option>
            <option value="3">Daughter</option>
            <option value="4">Son</option>
            <option value="5">Mother</option>
            <option value="6">Father</option>
            <option value="7">Sister</option>
            <option value="8">Brother</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          className="mob-profile-editaccount-update"
          onClick={() => {
            handleAddSuccess();
          }}
        >
          ADD
        </div>
      </div>

      {/* Render success alert if showSuccess is true */}
      {showSuccess && (
        <div className="alert alert-success" role="alert">
          Invitation sent successfully.
        </div>
      )}
    </div>
  );
};

export default MobAddFamilyMemberComponent;
