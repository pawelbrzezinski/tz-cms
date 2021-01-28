import React from "react";

import "../styles/call_button.scss";
import NormalIcon from "../img/call.svg";
import CallIcon from "../img/call_icon_dark.svg";

const CallButton = ({ size = "M", className = "", type = "normal" }) => {
  const sizes = {
    M: "call_button",
    S: "call_button-S",
  };

  const types = {
    normal: NormalIcon,
    dark: CallIcon,
  };

  const icon = types[type] || NormalIcon;

  return (
    <button className={`${sizes[size]} ${className} call_button-${type}`}>
      <img src={icon} alt="Zadzwoń" />
    </button>
  );
};

export default CallButton;
