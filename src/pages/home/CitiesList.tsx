import React, { useCallback, useRef, useState } from "react";

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
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>();

  const scrollToIndex = useCallback((idx) => {
    const child = sliderRef.current?.children[idx] as HTMLDivElement;
    console.log("scrollToIndex",  idx);

    if (child) {
      sliderRef.current.scrollTo({
        behavior: "smooth",
        left: child.offsetLeft,
      });
    }
  }, []);

  const handleScroll = useCallback(
    (ev: React.SyntheticEvent<HTMLDivElement>) => {
      const { scrollLeft, scrollWidth } = ev.currentTarget;

      const index = Math.round((scrollLeft / scrollWidth) * data.length);
      const child = ev.currentTarget.children[index] as HTMLDivElement;

      setIndex(scrollLeft > child?.offsetLeft ? index + 1 : index);
    },
    [data]
  );

  return (
    <div className="cities_list">
      <div className="hide_scrollbar">
        <div
          className="cities_list_wrapper"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {data.map((pin) => (
            <City
              data={pin}
              onMouseOver={highlightLocation}
              onMouseOut={unHighlightLocation}
              onClick={goToLocation}
            />
          ))}
        </div>
      </div>
      <div className="arrows">
        <div onClick={() => scrollToIndex(index - 1)} className="arrow_left" />
        <div onClick={() => scrollToIndex(index + 1)} className="arrow_right" />
      </div>
    </div>
  );
};

export default CitiesList;
