import { Link } from "gatsby";
import React from "react";
import Button from "../Button";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import Image from "../../img/home_dermoscopy.png";

const Surgery = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container" reverse>
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Na czym to polega?</div>
        <h2 className={H2_CLASS_NAME}>Usuwanie znamion</h2>
        <h5 className={H5_CLASS_NAME}>
          Wideodermatoskopia to najdokładniejsza i preferowana obecnie metoda
          badania znamion. Dzięki zaawansowanej technologii lekarz ogląda obraz
          znamion na ekranie komputera po przyłożeniu do skóry pacjenta
          specjalistycznej kamery.
        </h5>
        <div className="section_text">
          Dzięki systemowi archiwizacji danych w trakcie komputerowego badania
          znamion, lekarz zapisuje w systemie zdjęcia znamion, które mają
          atypowy wygląd i powinny zostać skontrolowane za kilka miesięcy.
        </div>
        <div className="section_buttons">
          <Button>
            <Link to="/wideodermatoskopia" title="">
              Dowiedz się więcej
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <img src={Image} alt="Wideodermatoskopowe badanie znamion" />
      </div>
    </TwoColumnSection>
  </div>
);

export default Surgery;
