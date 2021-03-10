import React from "react";

import "../styles/call_cta.scss";
import CallButton from "./CallButton";

const CallCta = () => {
  return (
    <a href="tel:+48781445685" title="+48781445685" className="call_cta">
      <div className="icon-wrapper">
        <CallButton className="normal-icon" />
        <span>Zadzwoń teraz</span>
      </div>
      <div className="phone-number">+48 781 445 685</div>
    </a>
  );
};

export default CallCta;
