import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// CEFAT coordinates
const center = {
  lat: 13.0728345,
  lng: 77.6026372
};

const Map = () => {
  const [infoOpen, setInfoOpen] = React.useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg' // Replace with your actual API key
  });

  const onLoad = React.useCallback(
    () => {
      setInfoOpen(true);
    },
    []
  );

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
        >
          <Marker position={center}>
            {infoOpen && (
              <InfoWindow
                position={center}
                onCloseClick={() => setInfoOpen(false)}
              >
                <div>
                  <h3 className="font-bold">CEFAT</h3>
                  <p>14, KV Jairam Rd, above Appam's Bakery & Sweets, Jakkuru</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p>Loading Map...</p>
        </div>
      )}
    </div>
  );
};

export default Map;
