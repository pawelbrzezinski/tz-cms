import React from "react";
import BubbleSection from "../BubbleSection";


import "../../styles/faq_card.scss";

const FaqCard = ({ data: { image, imageMobile, title = "", text = "" } }) => {
  return (
    <div className="faq_card">
      <div>
        <img className="image" src={image} alt={title} title={title} />
        <img
          className="image_mobile"
          src={imageMobile}
          alt={title}
          title={title}
        />
      </div>
      <div>
        <h4>{title}</h4>
        <div className="smallbody">{text}</div>
      </div>
    </div>
  );
};

const Faq = ({ className = "", data = [] }) => (
  <div className={className}>
    <BubbleSection
      introText="FAQ"
      h2="Najczęstsze pytania pacjentów"
      color="gray"
    >
      <div className="container">
        <div className="cards">
          {data.map((item) => (
            <FaqCard key={item.title} data={item} />
          ))}
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Faq;
