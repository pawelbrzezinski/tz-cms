import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Button from "./Button";
import "../styles/alert.scss";
import IconImage from "../img/ic_question.svg";

const Alert = () => {
  return (
    <div className="alert">
      <img src={IconImage} alt="Question" />
      <div className="alert_body">
        Osoby <strong>szczególnie narażone</strong> na wystąpienie raka skóry
        powinny poddawać się dermatoskopowemu badaniu znamion{" "}
        <strong>z większą częstotliwością</strong> niż standardowe badania
        przeprowadzane raz do roku.
      </div>
      <Button>
        <AnchorLink href="#kontakt" title="Umów się">
          Umów się
        </AnchorLink>
      </Button>
    </div>
  );
};
export default Alert;
