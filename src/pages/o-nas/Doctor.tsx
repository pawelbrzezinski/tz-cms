import React, { useState } from "react";
import Button from "../../components/Button";

import "../../styles/doctor.scss";
import Modal from "../../components/Modal";

const Doctor = ({
  className = "",
  data = { name: "", title: "", img : null, city: "", description: "" },
}) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className={className}>
      <div className="doctor_wrapper">
        <div className="doctor_container">
          <div className="doctor_container_text_wrapper">
            <img src={data.img} alt={data.name} />
            <p className="name">{data.name}</p>
            <p className="title">{data.title}</p>
            <p className="city">{data.city}</p>
          </div>

          <div>
            <div className="link" onClick={() => setModalOpened(true)}>
              Dowiedz się więcej{" "}
            </div>
            <Modal
              isOpened={isModalOpened}
              onClose={() => setModalOpened(false)}
            >
              <div className="doctor_modal_body">
                <div className="doctor_modal_body_icon_wrapper">
                  <img src={data.img} alt={data.name} />
                </div>
                <div>
                  <h5>{data.description}</h5>
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
