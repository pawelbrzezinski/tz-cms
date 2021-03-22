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
        <h5>Lokalizacja</h5>
        <h2>Jak do nas trafić?</h2>
        {additionalDetails && (
          <div className="location_additional_details">{additionalDetails}</div>
        )}
        <div className="location_info_wrapper">
          <div className="location_info_address">
            <p className="title">Adres</p>
            {locationInfo.map((info,idx)=>(
              <p key={idx}>{info}</p>
            ))}
          </div>
          <div className="location_info_hours">
            <p className="title">Godziny otwarcia</p>
            {hoursInfo.map((info,idx)=>(
              <p key={idx}>{info}</p>
            ))}
          </div>
          <div className="location_info_transportation">
            <p className="title">Dojazd</p>
            {transportationInfo.map((info,idx)=>(
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
