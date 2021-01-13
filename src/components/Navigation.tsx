import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

import "../styles/navigation.scss";
import CallButton from "./CallButton";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav className="navigation" role="navigation" aria-label="main-navigation">
      <div className="logo">
        <Link to="/" title="Logo">
          <img src={logo} alt="Twoje Znamiona" />
        </Link>
      </div>
      <div className="navigation-items">
        <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
          Badanie Znamion
        </Link>
        <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
          Usuwanie Znamion
        </Link>
        <Link className="navigation-item" to="/czerniak">
          Konsultacje onkologiczne
        </Link>
        <Link className="navigation-item" to="/czerniak">
          Nowotwory skóry
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
        <div>
          <CallButton />
          <span>+48 781 445 685</span>
        </div>
        <Button size="M">
          <Link to="/contact">Umów się</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
