import React, { useState } from "react";
import Button from "../Button";

import "../../styles/covid.scss";
import CovidIcon from "../../img/covid_icon.svg";
import Modal from "../Modal";

const Covid = ({ className = "", children }) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className={className}>
      <div className="covid_wrapper">
        <div className="covid_container">
          <div className="covid_container_text_wrapper">
            <img src={CovidIcon} alt="Covid - informacje" />
            <h2>
              W trosce o Twoje bezpieczeństwo wprowadziliśmy specjalne
              procedury, które będą obowiązywać przed i podczas wizyty w Centrum Badania Znamion.
            </h2>
          </div>
          
          <div>
            <Button type="secondary" onClick={() => setModalOpened(true)}>
              <span>Dowiedz się więcej</span>
            </Button>
            <Modal
              isOpened={isModalOpened}
              onClose={() => setModalOpened(false)}
            >
              <div className="covid_modal_body">
                <div className="covid_modal_body_icon_wrapper">
                  <img src={CovidIcon} alt="Covid - informacje" />
                </div>
                <div>
                  <h3>
                    Specjalne procedury, <br />
                    obowiązujące przed i podczas wizyty w Centrum Badania Znamion.
                  </h3>
                  {children}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
