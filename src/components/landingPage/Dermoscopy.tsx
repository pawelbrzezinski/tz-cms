import { Link } from "gatsby";
import React from "react";
import Button from "../Button";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import Image from "../../img/home_dermoscopy.png";

const Dermoscopy = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container">
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Na czym to polega?</div>
        <h2 className={H2_CLASS_NAME}>Dermatoskopowe badanie znamion</h2>
        <h5 className={H5_CLASS_NAME}>
          Dermatoskopia polega na oglądaniu wszystkich znamion na skórze, w
          dużym powiększeniu, przy zastosowaniu urządzenia zwanego
          dermatoskopem.
        </h5>
        <div className="section_text">
          Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak
          lupka- szkło powiększające z wbudowanych źródłem światła. Takie
          dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz
          umożliwiają profilaktyczne badanie niepokojących znamion.
        </div>
        <div className="section_buttons">
          <Button>
            <Link to="/dermatoskopia" title="">
              Dowiedz się więcej
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <img src={Image} alt="Dermatoskopowe badanie znamion" />
      </div>
    </TwoColumnSection>
  </div>
);

export default Dermoscopy;
