import React from "react";
import BubbleSection from "../../components/BubbleSection";

const Faq = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection introText="FAQ" h2="Najczęstsze pytania pacjentów" color="gray">
      <div>dupa</div>
    </BubbleSection>
  </div>
);

export default Faq;
