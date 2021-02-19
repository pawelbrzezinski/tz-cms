import React from "react";
import BubbleSection from "../../components/BubbleSection";
import WhyUsCard from "./WhyUsCard";

import BadamyImage from "../../img/Badamy.svg";
import ZapisujemyImage from "../../img/Zapisujemy.svg";
import WynikImage from "../../img/Wynik.svg";

const WhyUs = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection introText="O nas" h2="Dlaczego my?" color="white">
      <div className="container">
        <div className="cards">
          <WhyUsCard image={BadamyImage}>
            Badamy <strong>wszystkie</strong> znamiona na całym ciele
          </WhyUsCard>
          <WhyUsCard
            image={ZapisujemyImage}
            desc="Zapisujemy znamiona do obserwacji"
          />
          <WhyUsCard
            image={WynikImage}
            desc="Wydajemy wynik lekarski"
          />
        </div>

      </div>
    </BubbleSection>
  </div>
);

export default WhyUs;
