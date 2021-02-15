import React, { useEffect, useState } from "react";
import Map from "../../components/Map";

import "../../styles/home_locations.scss";
import CitiesList from "./CitiesList";

const CURRENT = "current";
const FUTURE = "future";

const LOCATIONS = [
  {
    city: "Poznan",
    link: "poznan/badanie-znamion",
    position: {
      left: 29,
      top: 45,
    },
    type: CURRENT,
  },
  {
    city: "Warszawa",
    link: "warszawa/badanie-znamion",
    position: {
      left: 70,
      top: 48,
    },
    type: CURRENT,
  },
  {
    city: "Wrocław",
    link: "wroclaw/badanie-znamion",
    position: {
      left: 30,
      top: 65,
    },
    type: CURRENT,
  },
  {
    city: "Kraków",
    link: "krakow/badanie-znamion",
    position: {
      left: 57,
      top: 90,
    },
    type: CURRENT,
  },
  {
    city: "Szczecin",
    link: "szczecin/badanie-znamion",
    position: {
      left: 7,
      top: 30,
    },
    type: CURRENT,
  },
  {
    city: "Łódź",
    link: "lodz/badanie-znamion",
    position: {
      left: 53,
      top: 57,
    },
    type: CURRENT,
  },

  {
    city: "Bydgoszcz",
    link: "bydgoszcz/badanie-znamion",
    position: {
      left: 37,
      top: 35,
    },
    type: CURRENT,
  },
  {
    city: "Katowice",
    link: false,
    position: {
      left: 48,
      top: 85,
    },
    type: FUTURE,
  },
  {
    city: "Ustka",
    link: false,
    position: {
      left: 28,
      top: 10,
    },
    type: FUTURE,
  },
  {
    city: "Gdańsk",
    link: false,
    position: {
      left: 43,
      top: 11,
    },
    type: FUTURE,
  },
];

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
      console.log("NAVIGATING TO: ", location.link);
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
