import React from "react";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TwoColumnHomeSection = ({
  className = "",
  intro = "",
  h2 = "",
  H5,
  Text,
  Buttons,
  imageInfo,
  reverse = false
}) => (
  <div className={className}>
    <TwoColumnSection color="white" containerClassName="container" reverse={reverse}>
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>
          {intro || "Na czym to polega?"}
        </div>
        <h2 className={H2_CLASS_NAME}>{h2}</h2>
        <h5 className={H5_CLASS_NAME}>
          <H5 />
        </h5>
        <div className="section_text">
          <Text />
        </div>
        <div className="buttons">
          <Buttons />
        </div>
      </div>
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: imageInfo.image,
            alt: imageInfo.alt,
            title: imageInfo.title,
          }}
        />
      </div>
    </TwoColumnSection>
  </div>
);

export default TwoColumnHomeSection;