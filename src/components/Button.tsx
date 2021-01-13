import React from "react";

import "../styles/button.scss";

const Button = ({ children, type = "primary", size = "L" }) => {
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
    <button className={`button ${types[type]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

export default Button;
