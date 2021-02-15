import React from "react";

import "../styles/modal.scss";
import CloseIcon from "../img/close.svg";

const Modal = ({ className = "" ,isOpened = false, onClose = () => null, children = null }) => {
  const classNameCombined = isOpened ? `${className} modal modal--opened` : `${className} modal`;

  return (
    <>
      {isOpened && <div className="modal_backdrop" onClick={onClose} />}
      <div className={classNameCombined}>
        <div className="modal_header">
          <img src={CloseIcon} onClick={onClose} alt="Zamknij" />
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </>
  );
};
export default Modal;
