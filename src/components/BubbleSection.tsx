import React from "react";
import "../styles/bubble_section.scss";

const BubbleSection = ({
  className = "",
  children,
  introText = "",
  color = "white",
  h2 = "",
  reverse = false,
}) => {
  const reverseClassName = reverse ? "bubble-section-reverse-border" : "";

  return (
    <div
      className={`bubble-section ${className} bubble-section-${color} ${reverseClassName}`}
    >
      <header>
        <div className="smallbody">{introText}</div>
        <h2>{h2}</h2>
      </header>

      <div>{children}</div>
    </div>
  );
};

export default BubbleSection;
