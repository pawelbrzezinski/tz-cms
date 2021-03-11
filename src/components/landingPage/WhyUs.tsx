import React from "react";
import BubbleSection from "../BubbleSection";

import BadamyImage from "../../img/Badamy.svg";
import ZapisujemyImage from "../../img/Zapisujemy.svg";
import WynikImage from "../../img/Wynik.svg";
import PrzypomienieImage from "../../img/Przypomienie.svg";
import TerminyImage from "../../img/Terminy.svg";
import DzieciImage from "../../img/Dzieci.svg";

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
            Badamy <strong>wszystkie</strong> znamiona na ciele
          </WhyUsCard>
          <WhyUsCard image={ZapisujemyImage}>
            Zapisujemy zmiany do obserwacji
          </WhyUsCard>
          <WhyUsCard image={WynikImage}>
            Wydajemy <strong>wynik</strong> lekarski
          </WhyUsCard>
          <WhyUsCard image={PrzypomienieImage}>
            Przypominamy o zalecanej <strong>kontroli</strong>
          </WhyUsCard>
          <WhyUsCard image={TerminyImage}>
            <strong>Krótkie terminy</strong> oczekiwania na wizytę
          </WhyUsCard>
          <WhyUsCard image={DzieciImage}>
            Badamy <strong>dzieci</strong>
          </WhyUsCard>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default WhyUs;
