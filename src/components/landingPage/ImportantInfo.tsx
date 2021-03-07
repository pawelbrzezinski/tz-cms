import React from "react";
import BubbleSection from "../BubbleSection";

import CheckIcoImage1 from "../../img/check_ico_1.svg";
import CheckIcoImage2 from "../../img/check_ico_2.svg";
import CheckIcoImage3 from "../../img/check_ico_3.svg";

import "../../styles/important_info_card.scss";

const ImportantInfoCard = ({ image, desc = "", children = null }) => {
  return (
    <div className="important_info_card">
      <div>
        <img src={image} alt={desc} title={desc} />
      </div>
      <div>{children}</div>
    </div>
  );
};

const ImportantInfo = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Ważne infromacje"
      h2="Co warto wiedzieć o badaniu"
      color="white"
    >
      <div className="container">
        <div className="cards">
          <ImportantInfoCard image={CheckIcoImage1} desc="Ile trwa badanie?">
            <h4>Ile trwa badanie?</h4>
            <div>
              Badanie wszystkich znamion - 30-40 min. Badanie kontrolne znamion
              wyznaczonych przez lekarza - 15-20 min.
            </div>
          </ImportantInfoCard>
          <ImportantInfoCard
            image={CheckIcoImage2}
            desc="Jak się przygotować do badania?"
          >
            <h4>Jak się przygotować do badania?</h4>
            <div>
              Przed badaniem należy wykonać demakijażu oraz skrócić owłosienia w
              miejscach, w których znajdują się znamiona, celem poprawy jakości
              obrazu dermatoskopowego.
            </div>
          </ImportantInfoCard>
          <ImportantInfoCard
            image={CheckIcoImage3}
            desc="Jakim urządzeniem badamy?"
          >
            <h4>Jakim urządzeniem badamy?</h4>
            <div>
              Pacjent badany jest za pomocą nowoczesnego sprzętu -
              wideodermatoskopu Fotofinder Portable Medicam 1000 Full HD
            </div>
          </ImportantInfoCard>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default ImportantInfo;
