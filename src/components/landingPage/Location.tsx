import React, { Fragment, useState } from "react";
import GoogleMap from "../GoogleMap";

import "../../styles/location.scss";
import useInViewPort from "../useInViewPort";

const Location = ({
  coords,
  additionalDetails,
  locationInfo = { title: "", data: "" },
  hoursInfo = [],
  transportationInfo = { data: "" },
  className = "",
  googleMarker,
}) => {
  const [nodeRef, isVisible] = useInViewPort();
  const [showMap, setShowMap] = useState(false);

  React.useEffect(() => {
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
            <p className="title">{locationInfo.title}</p>
            <p>{locationInfo.data}</p>
          </div>
          <div className="location_info_hours">
            <p className="title">Godziny otwarcia</p>
            <p>
              {hoursInfo.map((item, idx) => (
                <Fragment key={idx}>
                  <span>{item}</span>
                  <br />
                </Fragment>
              ))}
            </p>
          </div>
          <div className="location_info_transportation">
            <p className="title">Komunikacja miejska</p>
            <p>{transportationInfo.data}</p>
          </div>
        </div>
      </div>

      {showMap ? <GoogleMap coords={coords} marker={googleMarker} /> : null}
    </div>
  );
};

export default Location;
