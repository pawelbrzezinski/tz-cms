import { Link } from "gatsby";
import React from "react";
import Alert from "../Alert";
import BubbleSection from "../BubbleSection";
import Button from "../Button";

const GalleryCard = ({ data = { src: "" } }) => {
  return (
    <div>
      <img
        src={data.src}
        title="Zdjęcie ośrodka"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};


const AlertButton = () => (
  <Button>
    <Link to="/o-nas" title="Poznaj naszych lekarzy">
      Poznaj Lekarzy
    </Link>
  </Button>
);

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
        <Alert button={AlertButton}>
          Nasz zespół tworzą doświadczeni lekarze, którzy wspólnie, z pasją
          działają na rzecz <strong>zmniejszenia umieralności</strong> z powodu nowotworów skóry
          w Polsce.
        </Alert>
      </div>
    </BubbleSection>
  </div>
);

export default Reviews;
