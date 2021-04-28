import React from "react";
import BubbleSection from "../BubbleSection";

import PreviewCompatibleImage from "../PreviewCompatibleImage";

import "../../styles/faq_card.scss";

const FaqCard = ({ data: { image, imageMobile, title = "", text = "" } }) => {
  return (
    <div className="faq_card">
      <div>
        <PreviewCompatibleImage
          className="image"
          imageInfo={{
            image: image,
            alt: title,
            title: title,
          }}
          styles={{}}
        />
        <PreviewCompatibleImage
          className="image_mobile"
          imageInfo={{
            image: imageMobile,
            alt: title,
            title: title,
          }}
          styles={{}}
        />
      </div>
      <div>
        <h3>{title}</h3>
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
