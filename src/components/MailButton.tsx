import React from "react";

import "../styles/mail_button.scss";
import Icon from "../img/mail_icon_dark.svg";

const MailButton = ({ className = "" }) => {
  return (
    <button className={`mail_button ${className}`}>
      <img src={Icon} alt="Napisz do nas" />
    </button>
  );
};

export default MailButton;
