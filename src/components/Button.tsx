import React from "react";

import "../styles/button.scss";

const Button = ({
  children,
  onClick = (a?) => {},
  type = "primary",
  size = "L",
  className = "",
  ...rest
}) => {
  const types = {
    primary: "button-primary",
    secondary: "button-secondary",
  };

  const sizes = {
    L: "button-L",
    M: "button-M",
    S: "button-S",
  };

  return (
    <button
      onClick={onClick}
      className={`button ${className} ${types[type]} ${sizes[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
