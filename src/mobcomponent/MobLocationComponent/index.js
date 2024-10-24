// // import React, { useState } from "react";
// // import { Images } from "../../assets";
// // import "./MobLocationComponent.css";
// // import { faSearch } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // const MobLocationComponent = () => {
// //   const [pinCode, setPinCode] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [error, setError] = useState(null);
// //   const getCurrentAddress = () => {
// //     if (!navigator.geolocation) {
// //       setError("Geolocation is not supported by your browser.");
// //       return;
// //     }
// //     navigator.geolocation.getCurrentPosition(
// //       async (position) => {
// //         const { latitude, longitude } = position.coords;
// //         await getAddressFromCoordinates(latitude, longitude);
// //       },
// //       (error) => {
// //         setError(
// //           "Unable to retrieve your location. Please enable location services."
// //         );
// //       }
// //     );
// //   };
// //   const getAddressFromCoordinates = async (latitude, longitude) => {
// //     try {
// //       const response = await fetch(
// //         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&countrycodes=IN`
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         setAddress(data.address);
// //         setError(null);
// //       } else {
// //         setError("Error fetching address. Please try again later.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching address:", error);
// //       setError("Error fetching address. Please try again later.");
// //     }
// //   };
// //   const getAddressFromPinCode = async () => {
// //     try {
// //       const response = await fetch(
// //         `https://nominatim.openstreetmap.org/search?postalcode=${pinCode}&format=json&addressdetails=1&countrycodes=IN`
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         if (data.length > 0) {
// //           const addressDetails = data[0].address;
// //           setAddress(addressDetails);
// //           setError(null);
// //         } else {
// //           setAddress("");
// //           setError("No address found for the provided pin code.");
// //         }
// //       } else {
// //         setError("Error fetching address. Please try again later.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching address:", error);
// //       setError("Error fetching address. Please try again later.");
// //     }
// //   };
// //   return (
// //     <div>
// //       <div className="mt-1">
// //         <div className="d-flex justify-content-center align-items-center">
// //           <div className="mob-location-component-image-container">
// //             <img
// //               src={Images.notSelectedLocation}
// //               alt="notselectedlocation"
// //               className="w-100 h-100 "
// //             />
// //           </div>
// //         </div>
// //         <div className="d-flex justify-content-center align-items-center">
// //           <div className=" mt-2 fs-14 fw-bold">Location permission is off</div>
// //         </div>
// //         <div className="d-flex justify-content-center align-items-center">
// //           <div className="fs-12 mt-1 text-secondary ps-4 pe-3">
// //             We need your location to find the nearest store & provide you a
// //             seamless delivery experience
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-3 gap-3">
// //         <div className="mob-location-component-enable-button-container">
// //           <div>Enable Location</div>
// //         </div>
// //         <div className="d-flex justify-content-center">
// //           <div className="mob-location-component-search-loaction-container gap-2">
// //             <div className="">
// //               <FontAwesomeIcon
// //                 icon={faSearch}
// //                 className="faicons-size text-success mt-1 text-danger cursor-pointer "
// //               />
// //             </div>
// //             <div>Search your Location Manually</div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* get current location */}
// //       {/* <button onClick={getCurrentAddress}>Get Current Address</button>
// //       <br />
// //       <input
// //         type="text"
// //         value={pinCode}
// //         onChange={(e) => setPinCode(e.target.value)}
// //         placeholder="Enter Pin Code"
// //       /> */}
// //       {/* get location by pin code */}
// //       {/* <button onClick={getAddressFromPinCode}>Get Address by Pin Code</button> */}
// //       {address && (
// //         <div>
// //           <h3>Address Details</h3>
// //           <ul>
// //             {Object.entries(address).map(([key, value]) => (
// //               <li key={key}>
// //                 <strong>{key.replace(/_/g, " ")}:</strong> {value}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //       {error && <div>{error}</div>}
// //     </div>
// //   );
// // };
// // export default MobLocationComponent;
// import React, { useCallback, useState } from "react";
// import { Images } from "../../assets";
// import "./MobLocationComponent.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MobEnableLocationComponent from "./MobEnableLocationComponent";
// import MobSearchLocationManuallyComponent from "./MobSearchLocationManuallyComponent";
// import MobHeaderComponent from "../MobHeaderComponent";
// const MobLocationComponent = ({
//   onClose = () => {},
//   onConfirmLocation = () => {},
// }) => {
//   const [pinCode, setPinCode] = useState("");
//   const [address, setAddress] = useState("");
//   const [error, setError] = useState(null);
//   const [isEnableLocationShow, setIisEnableLocationShow] = useState(false);
//   const [isSearchLocationManuallyShow, setIsSearchLocationManuallyShow] =
//     useState(false);
//   const onShortEnableOpenCloseHandler = useCallback((toggle) => {
//     setIisEnableLocationShow(toggle);
//     document.body.style.overflow = !toggle ? "auto" : "hidden";
//   }, []);
//   const onShortSearchLocationManuallyOpenCloseHandler = useCallback(
//     (toggle) => {
//       setIsSearchLocationManuallyShow(toggle);
//       document.body.style.overflow = !toggle ? "auto" : "hidden";
//     },
//     []
//   );
//   const getCurrentAddress = () => {
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser.");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         await getAddressFromCoordinates(latitude, longitude);
//         onClose(); // Close off-canvas menu
//       },
//       (error) => {
//         setError(
//           "Unable to retrieve your location. Please enable location services."
//         );
//       }
//     );
//   };
//   const getAddressFromCoordinates = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&countrycodes=IN`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setAddress(data.address);
//         setError(null);
//       } else {
//         setError("Error fetching address. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error fetching address:", error);
//       setError("Error fetching address. Please try again later.");
//     }
//   };
//   return (
//     <div>
//       <div className="">
//         <div className="d-flex justify-content-center align-items-center">
//           <div className="mob-location-component-image-container">
//             <img
//               src={Images.notSelectedLocation}
//               alt="notselectedlocation"
//               className="w-100 h-100 "
//             />
//           </div>
//         </div>
//         <div className="d-flex justify-content-center align-items-center">
//           <div className=" mt-2 fs-14 fw-bold">Location permission is off</div>
//         </div>
//         <div className="d-flex justify-content-center align-items-center">
//           <div className="fs-12 mt-1 text-secondary ps-4 pe-3">
//             We need your location to find the nearest store & provide you a
//             seamless delivery experience
//           </div>
//         </div>
//       </div>
//       <div className="mt-3 gap-3">
//         <div
//           className="mob-location-component-enable-button-container"
//           onClick={onShortEnableOpenCloseHandler}
//         >
//           <div>Enable Location</div>
//         </div>
//         <div className="d-flex justify-content-center gap-2 mt-2">
//           <div
//             className="mob-location-component-search-loaction-container gap-2"
//             onClick={onShortSearchLocationManuallyOpenCloseHandler}
//           >
//             <div className="">
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="faicons-size text-success mt-1 text-danger cursor-pointer "
//               />
//             </div>
//             <div>Search your Location Manually</div>
//           </div>
//           <div
//             className="mob-location-component-search-close-btn"
//             onClick={onClose}
//           >
//             Close
//           </div>
//         </div>
//       </div>
//       {address && (
//         <div>
//           <h3>Address Details</h3>
//           <ul>
//             {Object.entries(address).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key.replace(/_/g, " ")}:</strong> {value}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {error && <div>{error}</div>}
//       {isEnableLocationShow && (
//         <>
//           <div className="overlay"></div>
//           <div
//             className="offcanvas offcanvas-bottom show h-100  "
//             tabIndex="-1"
//             data-bs-backdrop="fixed"
//             data-bs-scroll="false"
//           >
//             <div className="offcanvas-body small">
//               <div className="d-flex justify-content-end ">
//                 <button
//                   type="button"
//                   className="btn-close faicons-size "
//                   onClick={() => {
//                     // onShortOrderOpenCloseHandler(false);
//                     onClose();
//                   }}
//                 ></button>
//               </div>
//               {/* <MobHeaderComponent pinCode={pinCode} /> */}
//               <MobEnableLocationComponent
//                 onClose={() => {
//                   setIisEnableLocationShow(false);
//                   onClose();
//                 }}
//                 onConfirm={(pinCode) => {
//                   onConfirmLocation(pinCode);
//                 }}
//               />
//             </div>
//           </div>
//         </>
//       )}
//       {isSearchLocationManuallyShow && (
//         <>
//           <div className="overlay"></div>
//           <div
//             className="offcanvas offcanvas-bottom show h-100  "
//             tabIndex="-1"
//             data-bs-backdrop="fixed"
//             data-bs-scroll="false"
//           >
//             <div className="offcanvas-body small">
//               {/* <div className="d-flex justify-content-end ">
//                 <button
//                   type="button"
//                   className="btn-close faicons-size "
//                   onClick={() => {
//                     onShortOrderOpenCloseHandler(false);
//                   }}
//                 ></button>
//               </div> */}
//               <MobSearchLocationManuallyComponent
//                 onClose={() => {
//                   setIisEnableLocationShow(false);
//                   onClose();
//                 }}
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default MobLocationComponent;

// import React, { useState } from "react";
// import { Images } from "../../assets";
// import "./MobLocationComponent.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const MobLocationComponent = () => {
//   const [pinCode, setPinCode] = useState("");
//   const [address, setAddress] = useState("");
//   const [error, setError] = useState(null);
//   const getCurrentAddress = () => {
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser.");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         await getAddressFromCoordinates(latitude, longitude);
//       },
//       (error) => {
//         setError(
//           "Unable to retrieve your location. Please enable location services."
//         );
//       }
//     );
//   };
//   const getAddressFromCoordinates = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&countrycodes=IN`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setAddress(data.address);
//         setError(null);
//       } else {
//         setError("Error fetching address. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error fetching address:", error);
//       setError("Error fetching address. Please try again later.");
//     }
//   };
//   const getAddressFromPinCode = async () => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?postalcode=${pinCode}&format=json&addressdetails=1&countrycodes=IN`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         if (data.length > 0) {
//           const addressDetails = data[0].address;
//           setAddress(addressDetails);
//           setError(null);
//         } else {
//           setAddress("");
//           setError("No address found for the provided pin code.");
//         }
//       } else {
//         setError("Error fetching address. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error fetching address:", error);
//       setError("Error fetching address. Please try again later.");
//     }
//   };
//   return (
//     <div>
//       <div className="mt-1">
//         <div className="d-flex justify-content-center align-items-center">
//           <div className="mob-location-component-image-container">
//             <img
//               src={Images.notSelectedLocation}
//               alt="notselectedlocation"
//               className="w-100 h-100 "
//             />
//           </div>
//         </div>
//         <div className="d-flex justify-content-center align-items-center">
//           <div className=" mt-2 fs-14 fw-bold">Location permission is off</div>
//         </div>
//         <div className="d-flex justify-content-center align-items-center">
//           <div className="fs-12 mt-1 text-secondary ps-4 pe-3">
//             We need your location to find the nearest store & provide you a
//             seamless delivery experience
//           </div>
//         </div>
//       </div>
//       <div className="mt-3 gap-3">
//         <div className="mob-location-component-enable-button-container">
//           <div>Enable Location</div>
//         </div>
//         <div className="d-flex justify-content-center">
//           <div className="mob-location-component-search-loaction-container gap-2">
//             <div className="">
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="faicons-size text-success mt-1 text-danger cursor-pointer "
//               />
//             </div>
//             <div>Search your Location Manually</div>
//           </div>
//         </div>
//       </div>
//       {/* get current location */}
//       {/* <button onClick={getCurrentAddress}>Get Current Address</button>
//       <br />
//       <input
//         type="text"
//         value={pinCode}
//         onChange={(e) => setPinCode(e.target.value)}
//         placeholder="Enter Pin Code"
//       /> */}
//       {/* get location by pin code */}
//       {/* <button onClick={getAddressFromPinCode}>Get Address by Pin Code</button> */}
//       {address && (
//         <div>
//           <h3>Address Details</h3>
//           <ul>
//             {Object.entries(address).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key.replace(/_/g, " ")}:</strong> {value}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {error && <div>{error}</div>}
//     </div>
//   );
// };
// export default MobLocationComponent;
import React, { useCallback, useState } from "react";
import { Images } from "../../assets";
import "./MobLocationComponent.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobEnableLocationComponent from "./MobEnableLocationComponent";
import MobSearchLocationManuallyComponent from "./MobSearchLocationManuallyComponent";
import MobHeaderComponent from "../MobHeaderComponent";
const MobLocationComponent = ({
  onClose = () => {},
  onConfirmLocation = () => {},
}) => {
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [isEnableLocationShow, setIisEnableLocationShow] = useState(false);
  const [isSearchLocationManuallyShow, setIsSearchLocationManuallyShow] =
    useState(false);
  const onShortEnableOpenCloseHandler = useCallback((toggle) => {
    setIisEnableLocationShow(toggle);
    document.body.style.overflow = !toggle ? "auto" : "hidden";
  }, []);
  const onShortSearchLocationManuallyOpenCloseHandler = useCallback(
    (toggle) => {
      setIsSearchLocationManuallyShow(toggle);
      document.body.style.overflow = !toggle ? "auto" : "hidden";
    },
    []
  );
  const getCurrentAddress = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await getAddressFromCoordinates(latitude, longitude);
        onClose(); // Close off-canvas menu
      },
      (error) => {
        setError(
          "Unable to retrieve your location. Please enable location services."
        );
      }
    );
  };
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&countrycodes=IN`
      );
      if (response.ok) {
        const data = await response.json();
        setAddress(data.address);
        setError(null);
      } else {
        setError("Error fetching address. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setError("Error fetching address. Please try again later.");
    }
  };
  return (
    <div className="">
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mob-location-component-image-container">
            <img
              src={Images.notSelectedLocation}
              alt="notselectedlocation"
              className="w-100 h-100 "
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className=" mt-2 fs-14 fw-bold">Location permission is off</div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{ width: "310px" }}
            className=" fs-12 mt-2 mb-3 text-secondary ps-4 pe-3 "
          >
            We need your location to find the nearest store & provide you a
            seamless delivery experience
          </div>
        </div>
      </div>
      <div className="mt-3 gap-3">
        <div
          className="mob-location-component-enable-button-container align-items-center"
          onClick={onShortEnableOpenCloseHandler}
        >
          <div>Enable Location</div>
        </div>
        <div
          style={{ borderWidth: "1px", borderColor: "red" }}
          className="d-flex justify-content-center gap-2 mt-2"
        >
          <div
            className="mob-location-component-search-loaction-container gap-2"
            onClick={onShortSearchLocationManuallyOpenCloseHandler}
          >
            <div className="">
              <FontAwesomeIcon
                icon={faSearch}
                className="faicons-size text-success mt-1 text-danger cursor-pointer "
              />
            </div>
            <div>Search your Location Manually</div>
          </div>
        </div>
      </div>
      {address && (
        <div>
          <h3>Address Details</h3>
          <ul>
            {Object.entries(address).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div>{error}</div>}
      {isEnableLocationShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-100 "
            tabIndex="-1"
            data-bs-backdrop="fixed"
            data-bs-scroll="false"
          >
            <div className="offcanvas-body  m-0 p-0">
              <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close faicons-size "
                  onClick={() => {
                    // onShortOrderOpenCloseHandler(false);
                    onClose();
                  }}
                ></button>
              </div>
              {/* <MobHeaderComponent pinCode={pinCode} /> */}
              <MobEnableLocationComponent
                onClose={() => {
                  setIisEnableLocationShow(false);
                  onClose();
                }}
                onConfirm={(pinCode) => {
                  onConfirmLocation(pinCode);
                }}
              />
            </div>
          </div>
        </>
      )}
      {isSearchLocationManuallyShow && (
        <>
          <div className="overlay"></div>
          <div
            className="offcanvas offcanvas-bottom show h-100  "
            tabIndex="-1"
            data-bs-backdrop="fixed"
            data-bs-scroll="false"
          >
            <div className="offcanvas-body small">
              {/* <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close faicons-size "
                  onClick={() => {
                    onShortOrderOpenCloseHandler(false);
                  }}
                ></button>
              </div> */}
              <MobSearchLocationManuallyComponent
                onClose={() => {
                  setIisEnableLocationShow(false);
                  onClose();
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MobLocationComponent;
