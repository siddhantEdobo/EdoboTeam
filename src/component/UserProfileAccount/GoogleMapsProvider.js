import React from "react";
import { LoadScript } from "@react-google-maps/api";
import UserProfileAccount from "./UserProfileAccount"; // Adjust path as needed

const libraries = ["places"];

const GoogleMapsProvider = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E"
      libraries={libraries}
    >
      <UserProfileAccount />
    </LoadScript>
  );
};

export default GoogleMapsProvider;
