import React from "react";
import { withGoogleMap,GoogleMap, Marker } from "react-google-maps";

const GMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 16.962873, lng: 82.245517 }} >
    <Marker position={{ lat: 16.962873, lng: 82.245517 }} />
  </GoogleMap>
));

const Map = () => {
  return(
    <GMap className='p-0' 
      containerElement={<div style={{height:'100%', width:'100%'}}/>} 
      mapElement={<div style={{height:`100%`}}/>}/>
 );
}
export default Map;