import React from "react";
import CheckList from "../../components/CheckList";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../../components/TwoColumnSection";
import czerniakImage from "../../img/home_czerniak.svg";

const CHECKLIST = [
  "Chcesz cieszyć się długim, zdrowym życiem, lecz martwią Cię znamiona na Twoim ciele?",
  "Obawiasz się, że plamka na Twojej skórze to czerniak?",
  "W natłoku codziennych spraw nie znalazłeś jeszcze czasu, aby to sprawdzić?",
];

const Melanoma = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container">
      <div className="home_melanoma_left_column">
        <div className={INTRO_TEXT_CLASS_NAME}>Jak rozpoznać czerniaka?</div>
        <h2 className={H2_CLASS_NAME}>Czerniak nie zawsze jest czarny</h2>
        <h5 className={H5_CLASS_NAME}>
          Pamiętaj czerniak nie zawsze jest czarny, nie zawsze szybko rośnie, a
          zmian możesz nie zauważyć gołym okiem. Zobacz jakie są rodzaje
          czerniaka.
        </h5>
        <div>
          <CheckList data={CHECKLIST} />
        </div>
      </div>
      <div>
        <img src={czerniakImage} alt="Czerniak" />
      </div>
    </TwoColumnSection>
  </div>
);

export default Melanoma;
