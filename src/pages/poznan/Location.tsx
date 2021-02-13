import React from "react";
import GoogleMap from "../../components/GoogleMap";

import "../../styles/location.scss";

const Location = ({ coords, additionalDetails, className = "" }) => (
  <div className={`${className} location`}>
    <div className="location_wrapper">
      <h5>Lokalizacja</h5>
      <h2>Jak do nas trafić?</h2>
      {additionalDetails && (
        <div className="location_additional_details">{additionalDetails}</div>
      )}
      <div className="location_info_wrapper">
        <div className="location_info_address">
          <p className="title">Nobel Tower</p>
          <p>ul. Dąbrowskiego 77A, 60-101 Poznań</p>
        </div>
        <div className="location_info_hours">
          <p className="title">Godziny otwarcia</p>
          <p>ul. Dąbrowskiego 77A, 60-101 Poznań</p>
        </div>
        <div className="location_info_transportation">
          <p className="title">Komunikacja miejska</p>
          <p>ul. Dąbrowskiego 77A, 60-101 Poznań</p>
        </div>
      </div>
    </div>

    <GoogleMap coords={coords} />
  </div>
);

export default Location;
