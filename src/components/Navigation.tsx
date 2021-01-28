import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import hamburgerIcon from "../img/hamburger_menu.svg";

import "../styles/navigation.scss";
import CallButton from "./CallButton";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav
      className="navigation sticky"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="logo">
        <Link to="/" title="Logo">
          <img src={logo} alt="Twoje Znamiona" />
        </Link>
      </div>
      <div className="navigation-items">
        <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
          Diagnostyka Znamion
        </Link>
        {/* <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
          Usuwanie Znamion
        </Link> */}
        {/* <Link className="navigation-item" to="/czerniak">
          Konsultacje onkologiczne
        </Link> */}
        <Link className="navigation-item" to="/czerniak">
          Nowotwory skóry
        </Link>
        <Link className="navigation-item" to="/czerniak">
          Nasze ośrodki
        </Link>
        <Link className="navigation-item" to="/czerniak">
          O nas
        </Link>
        <Link className="navigation-item" to="/czerniak">
          Cennik
        </Link>
        <Link className="navigation-item" to="/blog">
          Blog
        </Link>
      </div>
      <div className="navigation-contact">
        <div className="phone-wrapper">
          <CallButton className="normal-icon" />
          <span className="phone-number">+48 781 445 685</span>
        </div>
        <Button size="M" className="normal-button">
          <Link to="/contact">Umów się</Link>
        </Button>
      </div>
      <div className="navigation-items-mobile">
        <img src={hamburgerIcon} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navigation;
