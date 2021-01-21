import React from "react";

import "../../styles/faq_card.scss";

const FaqCard = ({ image, title = "", children = "" }) => {
  return (
    <div className="faq_card">
      <div>
        <img src={image} alt={title} title={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <div className="smallbody">{children}</div>
      </div>
    </div>
  );
};
export default FaqCard;
