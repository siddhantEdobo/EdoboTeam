import React, { useState, useEffect } from 'react';

import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import './mobOrderTrack.css'
import rider from '../../../assets/Mob/mob-image/riderImg.png'
import star from '../../../assets/Icon/star.png';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCommentDots, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MobOrderStepperComponent from '../../../mobcomponent/MobOrderAccountComponent/MobOrderTimerComponent/MobOrderStepperComponent/StepperMaps';

const libraries = ['places']; // Include libraries you need

export default function MobOrdertrackMap() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchLocation = () => {
      const location = { lat: 19.0760, lng: 72.8777 }; // Replace with real coordinates 19.0760° N, 72.8777° E
      setCurrentLocation(location);
      getAddressFromLatLng(location.lat, location.lng);
    };

    fetchLocation();
  }, []);

  const getAddressFromLatLng = (lat, lng) => {
    setAddress(`Latitude: ${lat}, Longitude: ${lng}`);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
     
    
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "0px",
          }}
          center={currentLocation}
          zoom={13}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            gestureHandling: "auto",
          }}
        >
          {currentLocation && (
            <>
              <MarkerF
                position={currentLocation}
                onClick={() => setInfoWindowOpen(true)}
              />
              {infoWindowOpen && (
                <InfoWindow onCloseClick={handleInfoWindowClose} position={currentLocation}>
                  <div>Your current location: {address}</div>
                </InfoWindow>
              )}
            </>
          )}
        </GoogleMap>
      {/* </LoadScript> */}

      {/* Bottom Overlay Container */}
      <div className='driver-detail-container' style={{
        position: 'absolute',
        bottom: '5%',
        left: '0',
        right: '0',
        marginLeft: '10px',
        marginRight: '10px',
        width: '40%',
        height: 'auto',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}>

<div className='rating-container'>
         <div className='rating-img-text-container'> 
          <img src={star} width={'25px'}/>
          <span className='rating-text'>4.2</span>
       </div>
         <span>(148 rating)</span>
        </div>

       <div className='driver-photo-name-container'>
            <img src={rider} alt='driver' className='driver-image'/>
            <div className='driver-name-container'>
               <span className='rider'>Rider</span>
               <span className='driver-name-text'>Mr. Vikas Kumar</span>
            </div>
       </div>

       <div className='call-options'>
            <div className='options'>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '8px' }} />
                Call Rider
            </div>
            <div className='options'>
                <FontAwesomeIcon icon={faCommentDots} style={{ marginRight: '8px'}} />
                Chat
            </div>
            <div className='options'>
                <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '8px' }} />
                CheckList
            </div>
       </div>

       <MobOrderStepperComponent/>
        
      </div>
    </div>
  );
}
