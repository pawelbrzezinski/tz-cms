import React from "react";
import BubbleSection from "../../components/BubbleSection";
import ImportantInfoCard from "./ImportantInfoCard";

import CheckIcoImage1 from "../../img/check_ico_1.svg";
import CheckIcoImage2 from "../../img/check_ico_2.svg";
import CheckIcoImage3 from "../../img/check_ico_3.svg";

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
              Badanie wszystkich znamion: <strong>30-40 min</strong>. Badanie
              kontrolne znamion wyznaczonych przez lekarza:{" "}
              <strong>15-20 min</strong>.
            </div>
          </ImportantInfoCard>
          <ImportantInfoCard image={CheckIcoImage2} desc="Jak się przygotować do badania?">
            <h4>Jak się przygotować do badania?</h4>
            <div>
              Prosimy o dokładne <strong>wykonanie demakijażu</strong> oraz{" "}
              <strong>skrócenie owłosienia</strong>w miejscach, w których
              znajdują się znamiona, celem poprawy jakości obrazu
              dermatoskopowego.
            </div>
          </ImportantInfoCard>
          <ImportantInfoCard image={CheckIcoImage3} desc="Jakiego urządzenia używamy?">
            <h4>Jakiego urządzenia używamy?</h4>
            <div>
              Wideodermatoskop <strong>Fotofinder Vexia Medicam 800 HD</strong>
            </div>
          </ImportantInfoCard>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default ImportantInfo;