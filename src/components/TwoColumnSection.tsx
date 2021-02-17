import React from "react";
import "../styles/two_column_section.scss";

export const H2_CLASS_NAME = "two_column_section_h2";
export const H5_CLASS_NAME = "two_column_section_h5";
export const INTRO_TEXT_CLASS_NAME = "two_column_section_intro_text";

const TwoColumnSection = ({
  className = "",
  containerClassName = "",
  children,
  color = "white",
  reverse = false
}) => {
  const reverseClassName = reverse ? "two_column_section-reverse" : "";

  return (
    <div
      className={`two_column_section ${className} two_column_section-${color} ${reverseClassName}`}
    >
      <div className={`${containerClassName} `}>
        <div className="two_column_section_container">{children}</div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
