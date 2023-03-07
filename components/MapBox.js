import * as React from "react";
import Map, {Marker, Popup} from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";
function MapBox() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/anirban-10/clexujkyo002o01peeyytus3m/draft"
      mapboxAccessToken={process.env.mapbox_key}
    >
        
    </Map>
  );
}

export default MapBox;
