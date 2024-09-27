import React, { useState } from "react";
import "./MapCustomComponent.css";
import Autocomplete from "react-google-autocomplete";

const AutoSuggestionbox = ({ onPlaceSelected }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  console.log(selectedPlace);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    const pincode = extractPincode(place);
    const address = place.formatted_address;
    console.log("Pincode:", pincode);
    console.log("Address:", address);
    if (onPlaceSelected) {
      onPlaceSelected({
        pincode: pincode,
        address: address,
      });
    }
  };

  const extractPincode = (place) => {
    let pincode = "";
    if (place.address_components) {
      for (const component of place.address_components) {
        if (component.types.includes("postal_code")) {
          pincode = component.long_name;
          break;
        }
      }
    }
    return pincode;
  };

  return (
    <div className="">
      <Autocomplete
        apiKey={"AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E"}
        onPlaceSelected={handlePlaceSelect}
        options={{
          types: [],
          fields: ["address_components", "formatted_address"],
          componentRestrictions: null,
        }}
      />
    </div>
  );
};

export default AutoSuggestionbox;
