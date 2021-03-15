import React from "react";
import Button from "../Button";

const ButtonDrw = ({ className = "", ...props }) => {
  const onClick = (e) => e.stopPropagation();

  return (
    <Button
      className={`btn-mydr-pp ${className}`}
      // type="secondary"
      size="S"
      onClick={onClick}
      {...props}
    >
      Umów się
    </Button>
  );
};

export default ButtonDrw;
