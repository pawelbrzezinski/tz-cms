import React from "react";

import "../../styles/review_card.scss";
import StarsImage from "../../img/stars.svg";

const ReviewCard = ({ author = "", city = "", children = null }) => {
  return (
    <div className="review_card">
      <div className="review_body">{children}</div>
      <div>
        <img src={StarsImage} alt="5 gwiazdek"/>
      </div>
      <div>
        <h6>{author}</h6>
        <span className="smallbody">, {city}</span>
      </div>
    </div>
  );
};
export default ReviewCard;
