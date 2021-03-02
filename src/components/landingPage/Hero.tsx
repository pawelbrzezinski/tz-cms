import React from "react";
import "../../styles/hero.scss";

import heroImage from "../../img/doctor_home.svg";
import Button from "../Button";

const Hero = ({
  className = "",
  h1 = "",
  oneLiner = "",
  oneLinerMore = "",
  ctaPrimary = null,
  ctaSecondary = null,
}) => (
  <div className={`hero ${className}`}>
    <div className="hero-inner">
      <div className="one-liner-wrapper">
        <h1>{h1}</h1>
        <div className="one-liner-text">{oneLiner}</div>
        {oneLinerMore && <div className="one-liner-text">{oneLinerMore}</div>}
        <div className="buttons">
          <Button>{ctaPrimary}</Button>
          {ctaSecondary && (
            <Button type="secondary" size="L">
              {ctaSecondary}
            </Button>
          )}
        </div>
      </div>

      <div className="image-wrapper">
        <img src={heroImage} alt={h1} />
      </div>
    </div>
  </div>
);

export default Hero;