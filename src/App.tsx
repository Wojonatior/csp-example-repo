import React from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import './App.css';

const containerStyle = {
  width: "400px",
  height: "400px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "PUT_API_KEY_HERE"
  });

  const [map, setMap] = React.useState<any>(null);

  const onLoad = React.useCallback((loadedMap: any) => {
    //@ts-ignore
    const bounds = new window.google.maps.LatLngBounds();
    map?.fitBounds(bounds);
    setMap(loadedMap);
  }, [map]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={ containerStyle }
      center={ center }
      zoom={ 10 }
      onLoad={ onLoad }
      onUnmount={ onUnmount }
    >
      {/* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Content from the React App</h2>
      <MapComponent />
    </div>
  );
}

export default App;
