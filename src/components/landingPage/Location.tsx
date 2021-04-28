import React, { Fragment, useEffect, useState } from "react";
import GoogleMap from "../GoogleMap";

import "../../styles/location.scss";
import useInViewPort from "../useInViewPort";

const Location = ({
  coords,
  additionalDetails,
  locationInfo = [],
  hoursInfo = [],
  transportationInfo = [],
  className = "",
  googleMarker,
}) => {
  const [nodeRef, isVisible] = useInViewPort();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowMap(true);
    }
  }, [isVisible]);

  return (
    <div ref={nodeRef} className={`${className} location`}>
      <div className="location_wrapper">
        <h5>Jak do nas trafić?</h5>
        <h2>Lokalizacja</h2>

        {additionalDetails && (
          <div className="location_additional_details">{additionalDetails}</div>
        )}
        <div className="location_info_wrapper">
          <div className="location_info_address">
            <h3 className="title">Adres</h3>
            {locationInfo.map((info, idx) => (
              <p key={idx}>{info}</p>
            ))}
          </div>
          <div className="location_info_hours">
            <h3 className="title">Godziny otwarcia</h3>
            {hoursInfo.map((info, idx) => (
              <p key={idx}>{info}</p>
            ))}
          </div>
          <div className="location_info_transportation">
            <h3 className="title">Dojazd</h3>
            {transportationInfo.map((info, idx) => (
              <p key={idx}>{info}</p>
            ))}
          </div>
        </div>
      </div>

      {showMap ? <GoogleMap coords={coords} marker={googleMarker} /> : null}
    </div>
  );
};

export default Location;
