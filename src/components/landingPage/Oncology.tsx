import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import Image from "../../img/home_oncology.png";

const Oncology = ({ className = "" }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container" reverse>
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Diagnostyka czerniaka</div>
        <h2 className={H2_CLASS_NAME}>Konsultacje Onkologiczne</h2>
        <h5 className={H5_CLASS_NAME}>
          Po rozpoznaniu czerniaka pacjent wymaga dalszej diagnostyki w postaci
          m.in. docięcia brzegów zmiany z odpowiednim marginesem oraz wykonania
          biopsji węzłów chłonnych wartowniczych. Na tym etapie niezbędna jest
          też konsultacja onkologiczna.
        </h5>
        <div className="section_text">
          W trakcie konsultacji z onkologiem pacjent otrzymuje zalecenia
          postępowania w sytuacji usunięcia zmiany nowotworowej, które dotyczą
          m.in wykonania niezbędnych badań kontrolnych, możliwości leczenia
          uzupełniającego, a także leczenia zaawansowanego czerniaka.
        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/czerniak" title="">
              Czerniak
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

export default Oncology;
