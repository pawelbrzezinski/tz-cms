import React from "react";
import BubbleSection from "../../components/BubbleSection";

const RiskGroup = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection introText="Grupy ryzka" h2="Kto jest szczególnie narażony 
na wystąpienie raka skóry?" color="blue" reverse>
      <div>dupa</div>
    </BubbleSection>
  </div>
);

export default RiskGroup;
