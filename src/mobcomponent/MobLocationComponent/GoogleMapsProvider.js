// GoogleMapsProvider.js
import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const libraries = ["places"];
const googleMapsApiKey = "AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E";

const GoogleMapsProvider = ({ children }) => (
  <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
    {children}
  </LoadScript>
);

export default GoogleMapsProvider;
