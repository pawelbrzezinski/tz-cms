import React from "react";

import "../styles/mail_button.scss";
import Icon from "../img/mail_icon_dark.svg";

const MailButton = ({ className = "" }) => {
  return (
    <span className={`mail_button ${className}`}>
      <img src={Icon} alt="Napisz do nas" />
    </span>
  );
};

export default MailButton;
