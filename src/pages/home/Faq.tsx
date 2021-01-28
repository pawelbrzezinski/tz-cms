import React from "react";
import BubbleSection from "../../components/BubbleSection";
import Button from "../../components/Button";
import FaqCard from "./FaqCard";

import Faq1Image from "../../img/faq1.png";
import Faq1ImageMobile from "../../img/faq-1-mobile.png";
import Faq2Image from "../../img/faq2.png";
import Faq2ImageMobile from "../../img/faq-2-mobile.png";

const Faq = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="FAQ"
      h2="Najczęstsze pytania pacjentów"
      color="gray"
    >
      <div className="faq_container">
        <div className="cards">
          <FaqCard
            image={Faq1Image}
            imageMobile={Faq1ImageMobile}
            title="Czym różni się zwykły pieprzyk od czerniaka?"
          >
            Czerniak we wczesnym stadium na pierwszy rzuta oka może wyglądać tak
            samo jak zwykłe znamię barwnikowe. Są znamiona, które mogą też
            imitować czerniaka, dlatego tak ważne jest oglądanie znamion w
            powiększeniu. Niepokojące objawy, na które powinniśmy zwracać uwagę
            to m.in.: asymetria w obrębie znamienia; nierówne, poszarpane brzegi
            zmiany; wielobarwność; duży rozmiar- powyżej 6mm oraz dynamiczne
            zmiany w obrębie znamienia.
          </FaqCard>
          <FaqCard
            image={Faq2Image}
            imageMobile={Faq2ImageMobile}
            title="Jak często powinno się badać znamiona za pomocą dermatoskopu?"
          >
            Każdy z nas raz do roku powinien poddać badaniu dermatoskopowemu
            wszystkie obecne na ciele znamiona. Powinniśmy też na bieżąco
            kontrolować swoje znamiona w domu, obserwując, czy nie zmieniają się
            w czasie. Osoby z podwyższonym ryzykiem zachorowania na raka skóry,
            powinny badać się częściej, zgodnie z zaleceniem lekarskim - czasami
            nawet co kilka miesięcy.
          </FaqCard>
        </div>
        <div className="buttons">
          <Button type="secondary">Zobacz wszystkie pytania</Button>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Faq;
