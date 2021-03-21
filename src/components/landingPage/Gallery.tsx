import { Link } from "gatsby";
import React from "react";
import Alert from "../Alert";
import BubbleSection from "../BubbleSection";
import Button from "../Button";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const GalleryCard = ({ data }) => {
  return (
    <div>
      <PreviewCompatibleImage
        imageInfo={{
          image: data,
          alt: "Zdjęcie ośrodka",
          title: "Zdjęcie ośrodka",
        }}
        styles={{
          display: "block",
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

const Gallery = ({
  className = "",
  color = "blue",
  data = [],
  noAlert = false,
  introText="Zdjęcia ośrodka",
  h2="Galeria"
}) => (
  <div className={`${className} gallery`}>
    <BubbleSection
      introText={introText}
      h2={h2}
      color={color}
      reverse
    >
      <div className="container">
        <div className="cards">
          {data.map((item, idx) => (
            <GalleryCard key={idx} data={item} />
          ))}
        </div>
        {!noAlert && (
          <Alert button={AlertButton}>
            Nasz zespół tworzą doświadczeni lekarze, którzy wspólnie, z pasją
            działają na rzecz <strong>zmniejszenia umieralności</strong> z
            powodu nowotworów skóry w Polsce.
          </Alert>
        )}
      </div>
    </BubbleSection>
  </div>
);

export default Gallery;
