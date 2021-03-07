import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../styles/procedure_details.scss";

import PrzebiegBadaniaImage from "../../img/przebieg-badania-dermatoskopowego.png";
import Button from "../Button";
import { Link } from "gatsby";

import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";

const ProcedureDetails = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container">
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Na czym to polega?</div>
        <h2 className={H2_CLASS_NAME}>
          Przebieg badania wideodermatoskopowego
        </h2>
        <h5 className={H5_CLASS_NAME}>
          W trakcie wizyty lekarz dokonuje oględzin całego ciała, oglądając
          wideodermatoskopem <strong>wszystkie znamiona</strong> na Twojej
          skórze. Pieprzyki, które wymagają obserwacji lub usunięcia są
          zapisywane w systemie - jest to tzw.{" "}
          <strong>mapowanie znamion</strong>.
        </h5>
        <div className="section_text">
          Po badaniu lekarz omawia z Tobą dalsze zalecenia diagnostyczne, a
          <strong>wynik badania</strong> wraz z raportem zawierającym
          wideodermatoskopowe zdjęcia zmapowanych znamion wysyłamy do Ciebie
          drogą elektroniczną. Jeśli otrzymałeś zalecenie usunięcia zmiany
          skórnej skontaktuj się z naszą rejestracją i umów się do jednego z
          naszych chirurgów.
        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/wideodermatoskopia-komputerowe-badanie-znamion">
              Dowiedz się więcej
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <img
          src={PrzebiegBadaniaImage}
          alt="Przebieg badania wideodermatoskopowego"
          title="Przebieg badania wideodermatoskopowego"
        />
      </div>
    </TwoColumnSection>
  </div>
);

export default ProcedureDetails;
//<div className={`${className} procedure_details`}>
  //   <div className="container">
  //     <div className="cards">
  //       <div>
  //         <h5>Na czym to polega?</h5>
  //         <h2>Przebieg badania wideodermatoskopowego</h2>
  //         <p>
  //           W trakcie wizyty lekarz dokonuje oględzin całego ciała, oglądając
  //           wideodermatoskopem <strong>wszystkie znamiona</strong> na Twojej
  //           skórze. Pieprzyki, które wymagają obserwacji lub usunięcia są
  //           zapisywane w systemie - jest to tzw.{" "}
  //           <strong>mapowanie znamion</strong>.
  //         </p>
  //         <p>
  //           Po badaniu lekarz omawia z Tobą dalsze zalecenia diagnostyczne, a
  //           <strong>wynik badania</strong> wraz z raportem zawierającym
  //           wideodermatoskopowe zdjęcia zmapowanych znamion wysyłamy do Ciebie
  //           drogą elektroniczną.
  //         </p>
  //         <p>
  //           Jeśli otrzymałeś zalecenie usunięcia zmiany skórnej skontaktuj się z
  //           naszą rejestracją i umów się do jednego z naszych chirurgów.
  //         </p>
  //         <div className="buttons">
  //           <Button>
  //             <AnchorLink href="#kontakt" title="Umów się">
  //               Umów się
  //             </AnchorLink>
  //           </Button>
  //           <Button type="secondary">
  //             <Link to="/wideodermatoskopia-komputerowe-badanie-znamion">
  //               Dowiedz się więcej
  //             </Link>
  //           </Button>
  //         </div>
  //       </div>
  //       <div>
  //         <img
  //           src={PrzebiegBadaniaImage}
  //           alt="Przebieg badania wideodermatoskopowego"
  //           title="Przebieg badania wideodermatoskopowego"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </div>