import React from "react";

import "../../styles/risk_group_card.scss";

const RiskGroupCard = ({ image, title = "", children = null}) => {
  return (
    <div className="risk_group_card">
      <div>
        <img src={image} alt={title} title={title}/>
      </div>
      <h5>{children || title}</h5>
    </div>
  );
};
export default RiskGroupCard;
