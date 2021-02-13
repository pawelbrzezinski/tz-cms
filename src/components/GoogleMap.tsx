import React from "react";
import GoogleMapReact from "google-map-react";

import "../styles/google_map.scss";

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        lightness: "30",
      },
      {
        saturation: "-50",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9a9da1",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f9f9fb",
      },
    ],
  },

  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f9f9fb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f9f9fb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f9f9fb",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#f7f8f8",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#e0e2eb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b3b3b9",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d4e0cf",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#447530",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f0f1f4",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f0f1f4",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#fde8c2",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fddb98",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#fddb98",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#e9bc62",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#a9acbc",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f0f1f4",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e1e2eb",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FFF7EB",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#e0e2eb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dcf3f3",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#dcf3f3",
      },
    ],
  },
];

const Marker = ({ lat, lng }) => {
  return (
    <div className="google_marker_wrapper">
      <div className="marker_bubble">
        <p className="buble_title">Nobel Tower</p>
        <p className="buble_address">ul. Dąbrowskiego 77A, 60-101 Poznań</p>
        <p className="buble_link">
          <a href="#" title="Sprawdź dojazd">
            Sprawdź dojazd
          </a>
        </p>
      </div>

      <div className="marker_dot_wrapper">
        <div className="marker_pointer_transparent"></div>
        <div className="marker_pointer_white">
          <div className="marker_pointer_point"></div>
        </div>
      </div>
    </div>
  );
};

const GoogleMap = ({ coords = { lat: 0, lng: 0 } }) => {
  return (
    <div className="google_map_wrapper">
      <div className="google_map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAu1dg549uAcoFMp27crJ-3NecYbQDSlmk" }}
          defaultCenter={coords}
          defaultZoom={15}
          options={{
            styles: mapStyles,
            scrollwheel: false,
            fullscreenControl: false,
          }}
        >
          <Marker lat={coords.lat} lng={coords.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
