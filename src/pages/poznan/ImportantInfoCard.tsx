import React from "react";

import "../../styles/important_info_card.scss";

const ImportantInfoCard = ({ image, desc = "", children = null }) => {
  return (
    <div className="important_info_card">
      <div>
        <img src={image} alt={desc} title={desc} />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default ImportantInfoCard;
