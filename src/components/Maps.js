import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  width:'400px',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCCBigT8-IrG1LiaN0X558bNpAooaVF5JU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)