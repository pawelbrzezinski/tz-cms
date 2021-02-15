import React from "react";

import "../styles/map_poland.scss";

const Pin = ({
  data = {
    type: "current",
    city: "",
    hovered: false,
    position: { left: 0, top: 0 },
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
        (data.hovered && data.type === "current") ? "map_pin_wrapper--hovered" : ""
      }`}
      style={{
        left: `${data.position.left}%`,
        top: `${data.position.top}%`,
      }}
      onMouseOver={onMouseOverCb}
      onClick={onClickCb}
      onMouseOut={onMouseOutCb}
    >
      {data.type === "current" && (
        <div className="marker_bubble">
          <p className="buble_title">{data.city}</p>
          {/* <p className="buble_link">
            <span title="Wybierz miasto">Wybierz miasto</span>
          </p> */}
        </div>
      )}
      {data.type === "current" && <div className="map_pin_backdrop"></div>}

      <div className={`map_pin map_pin--${data.type}`}></div>
    </div>
  );
};

const Map = ({
  data = [],
  highlightLocation,
  unHighlightLocation,
  goToLocation,
}) => {
  return (
    <div className="map_poland">
      <div className="map_pins_wrapper">
        {data.map((pin) => (
          <Pin
            data={pin}
            onMouseOver={highlightLocation}
            onMouseOut={unHighlightLocation}
            onClick={goToLocation}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
