import React, { useEffect, useState } from "react";
import { navigate } from "gatsby"
import Map from "../Map";

import "../../styles/home_locations.scss";
import CitiesList from "./CitiesList";

import { LOCATIONS, CURRENT } from "../../config/cities";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(LOCATIONS);
  }, [LOCATIONS]);

  const highlightLocation = (location) => {
    setLocations(
      LOCATIONS.map((l) => {
        return {
          ...l,
          hovered: l.city === location.city,
        };
      })
    );
  };

  const unHighlightLocation = () => {
    setLocations(LOCATIONS);
  };
  const goToLocation = (location = { type: "", link: "" }) => {
    if (location.type === CURRENT) {
      navigate(`/${location.link}`)
    }
  };

  return (
    <div className="home_locations">
      <div className="map_section">
        <Map
          data={locations}
          highlightLocation={highlightLocation}
          unHighlightLocation={unHighlightLocation}
          goToLocation={goToLocation}
        />
      </div>
      <div className="cities_section">
        <div className="cities_section_text">
          <h5>Gdzie jesteśmy?</h5>
          <h2>Nasze ośrodki</h2>
          <p>
            Kliknij na miasto, w którym chcesz się zbadać. Dynamicznie
            zwiększamy obszar naszej działalności, aby już wkrótce działać w
            Twoim miejscu zamieszkania!
          </p>
        </div>
        <div className="cities_list_section">
          {/* <h3>Nasze lokalizacje</h3> */}
          <div className="cities_list_section-inner">
            <CitiesList
              data={locations.filter((location) => location.type === CURRENT)}
              highlightLocation={highlightLocation}
              unHighlightLocation={unHighlightLocation}
              goToLocation={goToLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
