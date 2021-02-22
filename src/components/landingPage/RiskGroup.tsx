import React from "react";

import BubbleSection from "../BubbleSection";

import Risk1Image from "../../img/risk1.png";
import Risk2Image from "../../img/risk2.png";
import Risk3Image from "../../img/risk3.png";
import Risk4Image from "../../img/risk4.png";
import Risk5Image from "../../img/risk5.png";
import Risk6Image from "../../img/risk6.png";
import Risk7Image from "../../img/risk7.png";
import Risk8Image from "../../img/risk8.png";
import Alert from "../Alert";

import "../../styles/risk_group_card.scss";

const RiskGroupCard = ({ image, title = "", children = null }) => {
  return (
    <div className="risk_group_card">
      <div>
        <img src={image} alt={title} title={title} />
      </div>
      <h5>{children || title}</h5>
    </div>
  );
};

const RiskGroup = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Grupy ryzka"
      h2="Kto jest szczególnie narażony na wystąpienie raka skóry?"
      color="blue"
      reverse
    >
      <div className="container">
        <div className="cards">
          <RiskGroupCard image={Risk1Image} title="Srednica znamion > 6 mm">
            Srednica znamion <br /> &gt; 6 mm
          </RiskGroupCard>
          <RiskGroupCard image={Risk2Image}>Jasna karnacja</RiskGroupCard>
          <RiskGroupCard image={Risk3Image}>
            Opalanie się i oparzenia słoneczne
          </RiskGroupCard>
          <RiskGroupCard image={Risk4Image}>Spadki odporności</RiskGroupCard>
          <RiskGroupCard image={Risk5Image}>
            Liczne piegi i pieprzyki na skórze
          </RiskGroupCard>
          <RiskGroupCard image={Risk6Image}>Znamiona wrodzone</RiskGroupCard>
          <RiskGroupCard image={Risk7Image}>
            Czerniak lub raki skóry w rodzinie
          </RiskGroupCard>
          <RiskGroupCard image={Risk8Image}>Okres ciąży i połogu</RiskGroupCard>
        </div>
        <Alert></Alert>
      </div>
    </BubbleSection>
  </div>
);

export default RiskGroup;
