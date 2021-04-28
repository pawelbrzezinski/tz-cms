import React from "react";
import "../styles/bubble_section.scss";

const BubbleSection = ({
  className = "",
  children,
  introText = "",
  color = "white",
  h2 = "",
  h5 = "",
  reverse = false,
}) => {
  const reverseClassName = reverse ? "bubble-section-reverse-border" : "";

  return (
    <div
      className={`bubble-section ${className} bubble-section-${color} ${reverseClassName}`}
    >
      {(h2 || h5 || introText) && (
        <header>
          {introText && <div className="smallbody">{introText}</div>}
          {h2 && <h2>{h2}</h2>}
          {h5 && <div className="h5">{h5}</div>}
        </header>
      )}
      <div>{children}</div>
    </div>
  );
};

export default BubbleSection;
