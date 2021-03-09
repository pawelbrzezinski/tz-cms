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

const IMAGES = [CheckIcoImage1, CheckIcoImage2, CheckIcoImage3];

const ImportantInfo = ({ className = "", h2="Co warto wiedzieć o badaniu", data = [] }) => {
  return (
    <div className={className}>
      <BubbleSection
        introText="Ważne infromacje"
        h2={h2}
        color="white"
      >
        <div className="container">
          <div className="cards">
            {data.map((item, idx) => (
              <ImportantInfoCard key={idx} image={IMAGES[idx]} desc={item.desc}>
                <h4>
                  {item.title}
                </h4>
                <div>{item.desc}</div>
              </ImportantInfoCard>
            ))}
          </div>
        </div>
      </BubbleSection>
    </div>
  );
};

export default ImportantInfo;
