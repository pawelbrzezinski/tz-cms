import React from "react";
import AbcdeTabs from "../../components/AbcdeTabs";
import BubbleSection from "../../components/BubbleSection";

const Abcde = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Zasada ABCDE"
      h2="Jakie są objawy czerniaka?"
      h5="Większość czerniaków w Polsce rozpoznawanych jest zbyt późno, co znacznie utrudnia późniejsze leczenie tego niebezpiecznego nowotworu."
    >
      <div className="abcde_container">
        <AbcdeTabs></AbcdeTabs>
        <div className="cards">ABCDE</div>
      </div>
    </BubbleSection>
  </div>
);

export default Abcde;
