import React, { useState } from "react";

import "../../styles/doctor.scss";
import Modal from "../Modal";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const SplitedDescription = ({ text = "" }) => {
  const sentences = text.split(".");

  return sentences.length > 5 ? (
    <>
      <p>{sentences.slice(0, sentences.length / 2).join(".")}.</p>
      <p>{sentences.slice(sentences.length / 2).join(".")}</p>
    </>
  ) : (
    <p>{text}</p>
  );
};

const Doctor = ({
  className = "",
  data = { name: "", title: "", img: null, city: "", description: "" },
  image,
  cityAnchor,
}) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className={className}>
      {cityAnchor && <span id={cityAnchor} />}
      <div className="doctor_wrapper">
        <div className="doctor_container">
          <div className="doctor_container_text_wrapper">
            {image ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: data.name,
                }}
              />
            ) : (
              <img className="raw_img" src={data.img} alt={data.name} />
            )}

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
                  {image ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: image,
                        alt: data.name,
                      }}
                    />
                  ) : (
                    <img className="raw_img" src={data.img} alt={data.name} />
                  )}
                </div>
                <div className="doctor_modal_body_name">{data.name}</div>
                <div className="doctor_modal_body_title">{data.title}</div>
                {data.city && (
                  <div className="doctor_modal_body_city">{data.city}</div>
                )}
                <div className="doctor_modal_body_description">
                  <SplitedDescription text={data.description} />
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
