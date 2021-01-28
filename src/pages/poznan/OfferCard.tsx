import React from "react";

import "../../styles/offer_card.scss";

const OfferCard = ({ image, title = "", desc = "" }) => {
  return (
    <div className="offer_card">
      <div>
        <img src={image} alt={title} title={title}/>
      </div>
      <h5>{title}</h5>
      <div className="smallbody">{desc}</div>
    </div>
  );
};
export default OfferCard;
