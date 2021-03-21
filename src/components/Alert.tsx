import React from "react";

import IconImage from "../img/ic_question.svg";
import "../styles/alert.scss";

const Alert = ({
  children,
  ctaOffset = 0,
  button = (x) => null,
  buttonProps = {},
}) => {
  const Button = button;
  
  return (
    <div className="alert">
      <img src={IconImage} alt="Question" />
      <div className="alert_body">{children}</div>
      <Button ctaOffset={ctaOffset} {...buttonProps} />
    </div>
  );
};
export default Alert;
