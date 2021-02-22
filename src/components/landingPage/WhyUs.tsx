import React from "react";
import BubbleSection from "../BubbleSection";

import BadamyImage from "../../img/Badamy.svg";
import ZapisujemyImage from "../../img/Zapisujemy.svg";
import WynikImage from "../../img/Wynik.svg";

import "../../styles/why_us_card.scss";

const WhyUsCard = ({ image, desc = "", children = null }) => {
  return (
    <div className="why_us_card">
      <div>
        <img src={image} alt={desc} title={desc} />
      </div>
      <div>{desc || children}</div>
    </div>
  );
};

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
          <WhyUsCard image={WynikImage} desc="Wydajemy wynik lekarski" />
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default WhyUs;
