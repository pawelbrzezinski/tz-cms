import React from "react";

import IconImage from "../img/ic_question.svg";
import "../styles/alert.scss";

const Alert = ({ children, ctaOffset = 0, button = (x) => null }) => {
  const Button = button;

  return (
    <div className="alert">
      <img src={IconImage} alt="Question" />
      <div className="alert_body">{children}</div>
      <Button ctaOffset={ctaOffset} />
    </div>
  );
};
export default Alert;
