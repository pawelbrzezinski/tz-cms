import React from "react";

import IconImage from "../img/ic_question.svg";
import "../styles/alert.scss";

const Alert = ({ children, button = () => null }) => {
  const Button = button;

  return (
    <div className="alert">
      <img src={IconImage} alt="Question" />
      <div className="alert_body">{children}</div>
      <Button />
    </div>
  );
};
export default Alert;
