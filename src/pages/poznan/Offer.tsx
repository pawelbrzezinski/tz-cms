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
      introText="Jak możemy Ci pomóc?"
      h2="Nasze usługi"
      h5="W naszym Centrum Badania Znamion w procesie diagnostycznym uczestniczą dermatolodzy, chirurdzy oraz onkolodzy, zapewniając pacjentom kompleksową opiekę i profesjonalną  diagnostykę."
      color="violet"
    >
      <div className="container">
        <div className="cards">
          <OfferCard image={BadanieZnamionImage} title="Badanie znamion" desc="Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć." />
          <OfferCard image={UsuwanieZnamionImage} title="Usuwanie znamion" desc="Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem Co2 lub metodą krioterapii." />
          <OfferCard image={KonsultacjeImage} title="Konsultacje onkologiczne" desc="Konsultacja onkologiczna w zakresie nowotworów skóry, w tym czerniaka złośliwego. Pacjent otrzymuje zalecenia po usunięciu zmiany nowotworowej, dotyczące badań kontrolnych, leczenia uzupełniającego, a także leczenia zaawansowanego czerniaka." />
        </div>
        <div className="buttons"><Button>Umów się na wizytę</Button></div> 
        {/* do kontkatu */}
        
      </div>
    </BubbleSection>
  </div>
);

export default Offer;
