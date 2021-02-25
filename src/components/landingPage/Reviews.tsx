import React from "react";
import BubbleSection from "../BubbleSection";

import "../../styles/review_card.scss";
import StarsImage from "../../img/stars.svg";

const ReviewCard = ({ author = "", city = "", children = null }) => {
  return (
    <div className="review_card">
      <div className="review_body">{children}</div>
      <div>
        <img src={StarsImage} alt="5 gwiazdek" />
      </div>
      <div>
        <h6>{author}</h6>
        <span className="smallbody">, {city}</span>
      </div>
    </div>
  );
};

const Reviews = ({ className = "", data = [] }) => (
  <div className={className}>
    <BubbleSection
      introText="Opinie pacjentów"
      h2="Oni nam zaufali"
      color="yellow"
      reverse
    >
      <div className="container">
        <div className="cards">
          {data.map((item = { author: "", city: "", review: "" }) => (
            <ReviewCard key={item.author} author={item.author} city={item.city}>
              {item.review}
            </ReviewCard>
          ))}
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Reviews;
