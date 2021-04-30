import { Link } from "gatsby";
import React from "react";
import Alert from "../Alert";
import BubbleSection from "../BubbleSection";
import Button from "../Button";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const GalleryCard = ({ data, imageTitlePostfix = "" }) => {
  return (
    <div>
      <PreviewCompatibleImage
        imageInfo={{
          image: data,
          alt: "Centrum Badania Znamion " + imageTitlePostfix,
          title: "Centrum Badania Znamion " + imageTitlePostfix,
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

const AlertButton = ({ city = "all" }) => (
  <Button>
    <Link to={`/o-nas#${city}`} title="Poznaj naszych lekarzy">
      Poznaj Lekarzy
    </Link>
  </Button>
);

const Gallery = ({
  className = "",
  color = "blue",
  data = [],
  noAlert = false,
  introText = "Zdjęcia Centrum Badania Znamion",
  h2 = "Galeria",
  city = "all",
  imageTitlePostfix = ""
}) => (
  <div className={`${className} gallery`}>
    <BubbleSection introText={introText} h2={h2} color={color} reverse>
      <div className="container">
        <div className="cards">
          {data.map((item, idx) => (
            <GalleryCard key={idx} data={item} imageTitlePostfix={imageTitlePostfix} />
          ))}
        </div>
        {!noAlert && (
          <Alert button={AlertButton} buttonProps={{city}}>
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
