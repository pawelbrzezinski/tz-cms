import React, { useEffect } from "react";
import AccordionPrices from "../AccordionPrices";
import BubbleSection from "../BubbleSection";

import useInViewPort from "../useInViewPort";

const PriceList = ({ className = "", data }) => {
  const [nodeRef, isVisible] = useInViewPort();

  useEffect(() => {
    if (isVisible && typeof window !== "undefined") {
      const mydrScript = document.getElementsByTagName("script")[0];

      const js = document.createElement("script");

      js.src = "https://mydr.pl/static/mydr-pp.min.js";

      mydrScript.parentNode.insertBefore(js, mydrScript);

      js.onload = () => {
        const PatientsPlugin = new window.PatientsPlugin();

        PatientsPlugin.init({
          app: "https://mydr.pl/patients_plugin",
          plugin: "https://mydr.pl/static",
        });
      };
    }
  }, [isVisible]);

  return (
    <div ref={nodeRef} className={className}>
      <a className="anchor" id="cennik"></a>
      <BubbleSection
        h2="Cennik naszych usług"
        h5="Rozwiń kategorię, aby umówić się online"
        color="gray"
      >
        <div className="container">
          <AccordionPrices priceList={data} />
        </div>
      </BubbleSection>
    </div>
  );
};

export default PriceList;
