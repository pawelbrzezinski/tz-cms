import React from "react";
import AccordionPrices from "../AccordionPrices";
import BubbleSection from "../BubbleSection";


const PriceList = ({ className = "", data }) => (
  <div className={className}>
    <a className="anchor" id="cennik"></a>
    <BubbleSection h2="Cennik naszych usług" color="gray">
      <div className="container">
        <AccordionPrices priceList={data} />
      </div>
    </BubbleSection>
  </div>
);

export default PriceList;
