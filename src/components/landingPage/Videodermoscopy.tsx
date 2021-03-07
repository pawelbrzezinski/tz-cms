import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import Image from "../../img/home_wideodermatoskopia.png";

const Videodermoscopy = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container" reverse>
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Na czym to polega?</div>
        <h2 className={H2_CLASS_NAME}>Wideodermatoskopia</h2>
        <h5 className={H5_CLASS_NAME}>
          Wideodermatoskopia - komputerowe badanie znamion to obecnie{" "}
          <strong>najlepsza metoda profilaktyki</strong> groźnych nowotworów
          skóry. Badanie pieprzyków na skórze z zastosowaniem wideodermatoskopu
          polega przede wszystkim na ocenie dynamiki zmian zachodzących w
          badanych znamionach na podstawie analizy porównawczej zdjęć wykonanych
          na przestrzeni czasu. Objawy czerniaka mogą być zupełnie nieuchwytne
          gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu!
        </h5>
        <div className="section_text">
          Dzięki zaawansowanej technologii lekarz ogląda obraz znamion na
          ekranie komputera po przyłożeniu do skóry pacjenta specjalistycznej
          kamery, umożliwiającej uzyskanie nawet 140 - krotnego powiększenia
          oraz szczegółową analizę struktur znajdujących się w badanym
          znamieniu. Dzięki systemowi archiwizacji danych, lekarz mapuje -
          zapisuje w systemie zdjęcia zmian skórnych, które mają atypowy wygląd
          i powinny zostać skontrolowane za kilka miesięcy.
        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/wideodermatoskopia-komputerowe-badanie-znamion" title="">
              Wideodermatoskopia
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

export default Videodermoscopy;
