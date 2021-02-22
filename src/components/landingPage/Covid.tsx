import React, { useState } from "react";
import Button from "../Button";

import "../../styles/covid.scss";
import CovidIcon from "../../img/covid_icon.svg";
import Modal from "../Modal";

const Covid = ({ className = "" }) => {
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
                  <ol>
                    <li>
                      Zapraszamy do Kliniki bez osób towarzyszących. W przypadku
                      konieczności przyjścia w towarzystwie, prosimy, aby była
                      to tylko jedna osoba. Osoba ta musi poddać się tej samej
                      ankiecie dotyczącej stanu zdrowia związanego z pandemią
                      COVID-19 oraz przestrzegać tych samych środków higieny i
                      ochrony, które są wymagane od pacjenta przy wejściu do
                      Kliniki.
                    </li>
                    <li>
                      Zostanie Pani/Panu zmierzona temperatura (termometr
                      bezdotykowy na podczerwień). W razie gorączki konsultacja
                      zostanie anulowana.
                    </li>
                    <li>
                      Prosimy o przyjście bez biżuterii i makijażu oraz w
                      maseczce.
                    </li>
                    <li>
                      Prosimy o przybycie w uzgodnionym czasie. Jeśli przyjdzie
                      Pani/Pan przed czasem, w celu organizacji kontroli dostępu
                      prosimy o poczekanie poza placówką.
                    </li>
                    <li>
                      Po przybyciu do Kliniki otrzyma Pani/Pan instrukcje i
                      zostanie Pani/Pan poproszona/y o wcieranie w ręce środka
                      dezynfekcyjnego (roztwór wirusobójczy) przez 20-30 sekund.
                    </li>
                    <li>
                      W przypadku spotkania innego pacjenta prosimy o zachowanie
                      bezpiecznej odległości (2 metry).
                    </li>
                    <li>
                      Jeśli podczas wizyty w Klinice okaże się, że Pani/Pan nie
                      spełnia wcześniej ogłoszonych wymagań, wizyta może zostać
                      odwołana, jeśli lekarz uzna to za stosowne.
                    </li>
                  </ol>
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
