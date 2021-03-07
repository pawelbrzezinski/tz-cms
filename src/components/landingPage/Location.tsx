import React from "react";
import GoogleMap from "../GoogleMap";

import "../../styles/location.scss";

const Location = ({
  coords,
  additionalDetails,
  locationInfo = { title: "", data: "" },
  hoursInfo = { data: "" },
  transportationInfo = { data: "" },
  className = "",
  googleMarker
}) => (
  <div className={`${className} location`}>
    <div className="location_wrapper">
      <h5>Lokalizacja</h5>
      <h2>Jak do nas trafić?</h2>
      {additionalDetails && (
        <div className="location_additional_details">{additionalDetails}</div>
      )}
      <div className="location_info_wrapper">
        <div className="location_info_address">
          <p className="title">{locationInfo.title}</p>
          <p>{locationInfo.data}</p>
        </div>
        <div className="location_info_hours">
          <p className="title">Godziny otwarcia</p>
          <p>{hoursInfo.data}</p>
          
        </div>
        <div className="location_info_transportation">
          <p className="title">Komunikacja miejska</p>
          <p>{transportationInfo.data}</p>
        </div>
      </div>
    </div>

    <GoogleMap coords={coords} marker={googleMarker} />
  </div>
);

export default Location;
