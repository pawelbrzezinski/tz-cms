import React from "react";

import Button from "./Button";
import "../styles/alert.scss";
import IconImage from "../img/ic_question.svg";

const Alert = () => {
  return (
    <div className="alert">
      <img src={IconImage} alt="Question" />
      <div className="alert_body">
        Osoby <strong>szczególnie narażone</strong> na wystąpienie raka skóry
        powinny poddawać się dermatoskopowemu badaniu znamion z większą
        częstotliwością niż standardowe badania przeprowadzane raz do roku.
      </div>
      <Button>Umów się </Button>
    </div>
  );
};
export default Alert;
