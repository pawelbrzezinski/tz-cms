import React from "react";

import "../../styles/cities_list.scss";

const City = ({
  data = {
    city: "",
    hovered: false,
  },
  onMouseOver = (x: any) => null,
  onMouseOut = (x: any) => null,
  onClick = (x: any) => null,
}) => {
  const onMouseOverCb = () => {
    onMouseOver(data);
  };

  const onMouseOutCb = () => {
    onMouseOut(data);
  };

  const onClickCb = () => {
    onClick(data);
  };

  return (
    <div
      className={`map_pin_wrapper ${
        data.hovered ? "map_pin_wrapper--hovered" : ""
      }`}
      onMouseOver={onMouseOverCb}
      onClick={onClickCb}
      onMouseOut={onMouseOutCb}
    >
      <div className={`map_pin`}>{data.city}</div>
    </div>
  );
};

const CitiesList = ({
  data = [],
  highlightLocation,
  unHighlightLocation,
  goToLocation,
}) => {
  return (
    <div className="cities_list">
      <div className="cities_list_wrapper">
        {data.map((pin) => (
          <City
            data={pin}
            onMouseOver={highlightLocation}
            onMouseOut={unHighlightLocation}
            onClick={goToLocation}
          />
        ))}
      </div>
      <div>
        strzalki
      </div>
    </div>
  );
};

export default CitiesList;
