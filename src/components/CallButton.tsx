import React from "react";

import "../styles/call_button.scss";
import icon from "../img/call.svg";

const CallButton = ({size = "M"}) => {
  const sizes = {
    M: "call_button",
    S: "call_button-S"
  }
  return (
    <button className={sizes[size]}>
      <img src={icon} alt="Zadzwoń" />
    </button>
  );
};

export default CallButton;
