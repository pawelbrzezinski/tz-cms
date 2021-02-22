import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BubbleSection from "../BubbleSection";
import Button from "../Button";

import BadanieZnamionImage from "../../img/badanie_znamion_offer.png";
import KonsultacjeImage from "../../img/konsultacje_onkologiczne_offer.png";
import UsuwanieZnamionImage from "../../img/usuwanie_znamion_offer.png";

import "../../styles/offer_card.scss";

const OfferCard = ({ image, title = "", desc = "" }) => {
  return (
    <div className="offer_card">
      <div>
        <img src={image} alt={title} title={title} />
      </div>
      <h5>{title}</h5>
      <div className="smallbody">{desc}</div>
    </div>
  );
};

const Offer = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Jak możemy Ci pomóc?"
      h2="Nasze usługi"
      h5="W naszym Centrum Badania Znamion w procesie diagnostycznym uczestniczą dermatolodzy, chirurdzy oraz onkolodzy, zapewniając pacjentom kompleksową opiekę i profesjonalną  diagnostykę."
      color="violet"
    >
      <div className="container">
        <div className="cards">
          <OfferCard
            image={BadanieZnamionImage}
            title="Badanie znamion"
            desc="Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć."
          />
          <OfferCard
            image={UsuwanieZnamionImage}
            title="Usuwanie znamion"
            desc="Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem Co2 lub metodą krioterapii."
          />
          <OfferCard
            image={KonsultacjeImage}
            title="Konsultacje onkologiczne"
            desc="Konsultacja onkologiczna w zakresie nowotworów skóry, w tym czerniaka złośliwego. Pacjent otrzymuje zalecenia po usunięciu zmiany nowotworowej, dotyczące badań kontrolnych, leczenia uzupełniającego, a także leczenia zaawansowanego czerniaka."
          />
        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się na wizytę
            </AnchorLink>
          </Button>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Offer;
