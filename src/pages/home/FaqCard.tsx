import React from "react";

import "../../styles/faq_card.scss";

const FaqCard = ({ image, imageMobile, title = "", children = "" }) => {
  return (
    <div className="faq_card">
      <div>
        <img className="image" src={image} alt={title} title={title} />
        <img className="image_mobile" src={imageMobile} alt={title} title={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <div className="smallbody">{children}</div>
      </div>
    </div>
  );
};
export default FaqCard;
