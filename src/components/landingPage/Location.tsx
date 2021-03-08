import React, { useState } from "react";
import GoogleMap from "../GoogleMap";

import "../../styles/location.scss";

const THRESHOLD = 0;

function useInViewPort() {
  let nodeRef = React.useRef(null);
  let observerRef = React.useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { THRESHOLD }
    );

    observerRef.current.observe(nodeRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      observerRef.current.disconnect();
    }
  }, [isVisible]);

  return [nodeRef, isVisible];
}

const Location = ({
  coords,
  additionalDetails,
  locationInfo = { title: "", data: "" },
  hoursInfo = { data: "" },
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
            <p>{hoursInfo.data}</p>
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
