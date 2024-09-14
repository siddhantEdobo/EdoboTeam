import React from "react";

function CustomPincode({ onPincodeUpdate }) {

    const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E`
            );
            const data = await response.json();
            const addressComponents = data.results[0].address_components;
            const pincodeComponent = addressComponents.find((component) =>
              component.types.includes("postal_code")
            );
            if (pincodeComponent) {
              const pincode = pincodeComponent.long_name;
              if (onPincodeUpdate) {
                onPincodeUpdate(pincode);
              }
            }
          } catch (error) {
            console.error("Error fetching pincode:", error);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button
      type="button"
      className="btn btn-danger rounded-5"
      onClick={handleDetectLocation}
    >
      Detect My Location 1
    </button>
  );
}

export default CustomPincode;
