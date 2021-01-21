import React from "react";
import BubbleSection from "../../components/BubbleSection";
import Button from "../../components/Button";
import OfferCard from "./OfferCard";

import BadanieZnamionImage from "../../img/badanie_znamion_offer.png";
import KonsultacjeImage from "../../img/konsultacje_onkologiczne_offer.png";
import UsuwanieZnamionImage from "../../img/usuwanie_znamion_offer.png";

const Offer = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Nasze usługi"
      h2="Jak możemy Ci pomóc?"
      color="violet"
    >
      <div className="offer_container">
        <div className="cards">
          <OfferCard image={BadanieZnamionImage} title="Badanie znamion" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis." />
          <OfferCard image={UsuwanieZnamionImage} title="Usuwanie znamion" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis." />
          <OfferCard image={KonsultacjeImage} title="Konsultacje onkologiczne" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis." />
        </div>
        <div><Button>Umów się na wizytę</Button></div>
        
      </div>
    </BubbleSection>
  </div>
);

export default Offer;
