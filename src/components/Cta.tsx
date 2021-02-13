import React from "react";

import Button from "./Button";
import "../styles/cta.scss";

const Cta = ({
  className = "",
  h2 = "Nie zwlekaj! Pozwól nam zbadać Twoje znamiona.",
  text = "Rozumiesz już jak ważne jest regularne badanie skóry. Skontaktuj się z nami i dołącz do programu profilaktyki. ",
}) => {
  return (
    <div className={`${className} `}>
      <div className="call_to_action_wrapper">
        <div className="cta_body">
          {h2 && <h2>{h2}</h2>}
          {text && <div className="cta_text">{text}</div>}
        </div>
        <div className="buttons">
          <Button>Umów się na badanie</Button>
          {/* <Button type="secondary">Dowiedz się więcej</Button> */}
        </div>
      </div>
    </div>
  );
};
export default Cta;
