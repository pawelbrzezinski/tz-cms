import React from "react";

import "../../styles/why_us_card.scss";

const WhyUsCard = ({ image, desc = "", children = null }) => {
  return (
    <div className="why_us_card">
      <div>
        <img src={image} alt={desc} title={desc} />
      </div>
      <div>{desc || children}</div>
    </div>
  );
};
export default WhyUsCard;
