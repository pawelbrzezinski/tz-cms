import React, { useState } from "react";
import Button from "../../components/Button";

import "../../styles/covid.scss";
import CovidIcon from "../../img/covid_icon.svg";
import Modal from "../../components/Modal";

const Doctor = ({ className = "" }) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className={className}>
      <div className="covid_wrapper">
        <div className="covid_container">
          <div className="covid_container_text_wrapper">
            <img src={CovidIcon} alt="Covid - informacje" />
            <h5>
              W trosce o Twoje bezpieczeństwo wprowadziliśmy specjalne
              procedury, które będą obowiązywać przed i podczas wizyty.
            </h5>
          </div>

          <div>
            <Button type="secondary" onClick={() => setModalOpened(true)}>
              Dowiedz się więcej{" "}
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
                  <h5>
                    Specjalne procedury, <br />
                    obowiązujące przed i podczas wizyty.
                  </h5>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
