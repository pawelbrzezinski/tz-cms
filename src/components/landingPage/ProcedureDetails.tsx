import React from "react";

import "../../styles/procedure_details.scss";

import PrzebiegBadaniaImage from "../../img/przebieg-badania-dermatoskopowego.png";

const ProcedureDetails = ({ className = "" }) => (
  <div className={`${className} procedure_details`}>
    <div className="container">
      <div className="cards">
        <div>
          <h5>Na czym to polega?</h5>
          <h2>Przebieg badania wideodermatoskopowego</h2>
          <p>
            W trakcie wizyty lekarz dokonuje oględzin całego ciała, oglądając
            wideodermatoskopem <strong>wszystkie znamiona</strong> na Twojej skórze. Pieprzyki,
            które wymagają obserwacji lub usunięcia są zapisywane w systemie -
            jest to tzw. <strong>mapowanie znamion</strong>.
          </p>
          <p>
            Po badaniu lekarz omawia z Tobą dalsze zalecenia diagnostyczne, a
            <strong>wynik badania</strong> wraz z raportem zawierającym wideodermatoskopowe
            zdjęcia zmapowanych znamion wysyłamy do Ciebie drogą mailową.
          </p>
          <p>
            Jeśli otrzymałeś zalecenie usunięcia zmiany skórnej skontaktuj się z
            naszą rejestracją i umów się do jednego z naszych chirurgów.
          </p>
        </div>
        <div>
          <img
            src={PrzebiegBadaniaImage}
            alt="Przebieg badania wideodermatoskopowego"
            title="Przebieg badania wideodermatoskopowego"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProcedureDetails;
