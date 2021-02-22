import React from "react";
import BubbleSection from "../BubbleSection";

const GalleryCard = ({ data = { src: "" } }) => {
  return (
    <div>
      <img
        src={data.src}
        title="Zdjęcie ośrodka"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

const Reviews = ({ className = "", data = [] }) => (
  <div className={className}>
    <BubbleSection
      introText="Zdjęcia ośrodka"
      h2="Galeria"
      color="blue"
      reverse
    >
      <div className="container">
        <div className="cards">
          {data.map((item, idx) => (
            <GalleryCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Reviews;
