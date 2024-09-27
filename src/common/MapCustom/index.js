import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  //   Marker,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import UserProfileAccount from "../../component/UserProfileAccount";

const libraries = ["places"];
console.log(libraries);

const CustomeMapLocation = ({ onClose = () => {}, onConfirm = () => {} }) => {
  console.log();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [searchBox, setSearchBox] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [isAddressShow, setIsAddressShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isUserProfileRendered, setIsUserProfileRendered] = useState(false); // Add state for rendering UserProfile

  console.log(pinCode);
  console.log(address);
  console.log(currentLocation);
  console.log("user data", userData);

  const handleLoad = () => {
    // LoadScript onLoad callback
  };

  const handleAddressClose = () => {
    setIsAddressShow(false);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const handleAddressOpen = () => {
    setIsAddressShow(true);
  };

  const handleConfirmContinue = () => {
    onConfirm(pinCode);
    onClose(); // Close the map directly
  };

  const onPlacesChanged = () => {
    if (searchBox !== null) {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;
      const firstPlace = places[0];
      if (firstPlace.geometry) {
        setCurrentLocation({
          lat: firstPlace.geometry.location.lat(),
          lng: firstPlace.geometry.location.lng(),
        });
      }
    }
  };

  const getAddressFromLatLng = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E`
      );
      if (response.data.results.length > 0) {
        const formattedAddress = response.data.results[0].formatted_address;
        setAddress(formattedAddress);
        const regex = /(\d{6})/;
        const match = formattedAddress.match(regex);
        if (match && match.length > 0) {
          setPinCode(match[0]);
        } else {
          setPinCode("");
        }
        const processedData = passUserDataToProfile();
        setUserData(processedData);
      }
    } catch (error) {
      console.error("Error getting address:", error);
    }
  };
  const passUserDataToProfile = () => {
    console.log("Address:", address);
    console.log("Pin Code:", pinCode);
    return { address, pinCode };
  };

  const handlePlaceSelect = (place) => {
    setAddress(place.formatted_address);
  };

  useEffect(() => {
    setInfoWindowOpen(false);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
      getAddressFromLatLng(latitude, longitude);
    });

    passUserDataToProfile();
    setIsUserProfileRendered(true);

    // // Define UserProfile component outside useEffect
    // const UserProfile = () => {
    //   console.log("UserProfile is rendered!"); // Log a message when UserProfile is rendered
    //   return (
    //     <>
    //       {userData && (
    //         <UserProfileAccount
    //           address={userData.address}
    //           pinCode={userData.pinCode}
    //         />
    //       )}
    //     </>
    //   );
    // };

    // // Render UserProfile component
    // return <UserProfile />;
  }, []);

  // useEffect(() => {
  //   // Call a function to pass address and pinCode to UserProfileAccount
  //   const passUserDataToProfile = () => {
  //     // You can do any processing here before passing the data
  //     // For now, simply log the data
  //     console.log("Address:", address);
  //     console.log("Pin Code:", pinCode);
  //   };

  //   // const UserProfile = () => {
  //   //   return (
  //   //     <>
  //   //       {address && pinCode && (
  //   //         <UserProfileAccount address={address} pinCode={pinCode} />
  //   //       )}
  //   //     </>
  //   //   );
  //   // };

  //   // UserProfile();
  //   passUserDataToProfile();
  // }, [address, pinCode]);

  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E"
        // Pass libraries as a static class property
        libraries={libraries}
        onLoad={handleLoad}
      >
        <GoogleMap
          mapContainerStyle={{
            width: "46%",
            height: "85%",
            position: "absolute",
            top: "65px",
          }}
          center={currentLocation}
          zoom={13}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            gestureHandling: "none",
            mapTypeControlOptions: { mapTypeIds: [] },
          }}
        >
          {currentLocation && (
            <>
              <MarkerF
                position={currentLocation}
                onClick={() => setInfoWindowOpen(true)}
              >
                {infoWindowOpen && (
                  <InfoWindow onCloseClick={handleInfoWindowClose}>
                    <div>Your current location: {address}</div>
                  </InfoWindow>
                )}
              </MarkerF>
              <MarkerF
                position={currentLocation}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
              />
              <MarkerF
                draggable={true}
                onDragEnd={(e) => {
                  setCurrentLocation(e.latLng.toJSON());
                  getAddressFromLatLng(e.latLng.lat(), e.latLng.lng());
                }}
                position={currentLocation}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
              />
            </>
          )}

          {currentLocation && <MarkerF position={currentLocation} />}
        </GoogleMap>
      </LoadScript>

      {isUserProfileRendered && (
        <>
          <UserProfileAccount
            address={userData?.address}
            pinCode={userData?.pinCode}
          />
        </>
      )}

      {/* {address && pinCode && (
        <UserProfileAccount {...passUserDataToProfile()} />
      )} */}

      {/* <>
        {address && pinCode && (
          <UserProfileAccount address={address} pinCode={pinCode} />
        )}
      </> */}

      {/* <UserProfileAccount address={address} pinCode={pinCode} /> */}

      {/* {isUserProfileRendered && <UserProfile />} */}

      <>
        {/* {address && pinCode && <MyComp address={address} pinCode={pinCode} />} */}
      </>
    </>
  );
};

export default CustomeMapLocation;
