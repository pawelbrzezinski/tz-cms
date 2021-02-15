import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import hamburgerIcon from "../img/hamburger_menu.svg";
import CloseIcon from "../img/close.svg";
import ChevronIcon from "../img/chevron-up.svg";
import { Helmet } from "react-helmet";

import "../styles/navigation.scss";
import CallButton from "./CallButton";
import Button from "./Button";

const NavigationItemWithSubmenu = ({ label = "", children = null }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      className={`navigation-item dropdown ${
        isMenuOpened ? "dropdown--opened" : ""
      }`}
    >
      <div className="heading" onClick={() => setIsMenuOpened(!isMenuOpened)}>
        <span>{label}</span>
        <img
          className={isMenuOpened ? "" : "flip"}
          src={ChevronIcon}
          alt={isMenuOpened ? "Zwiń" : "Rozwiń"}
          title={isMenuOpened ? "Zwiń" : "Rozwiń"}
        />
      </div>
      <div className="submenu">{children}</div>
    </div>
  );
};

const Navigation = ({
  constactCtaComponent = <Link to="/kontakt">Umów się</Link>,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav
      className="navigation sticky"
      role="navigation"
      aria-label="main-navigation"
    >
      <Helmet
        bodyAttributes={{
          "navigation-state": isMenuOpened ? "opened" : "",
        }}
      />
      <div className="logo">
        <Link to="/" title="Logo">
          <img src={logo} alt="Twoje Znamiona" />
        </Link>
      </div>
      <div
        className={`navigation-items ${
          isMenuOpened ? "navigation-items--opened" : ""
        }`}
      >
        <NavigationItemWithSubmenu label="Diagnostyka Znamion">
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Badanie Znamion
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Usuwanie Znamion
          </Link>
        </NavigationItemWithSubmenu>

        <NavigationItemWithSubmenu label="Nowotwory skóry">
          <Link className="navigation-item" to="/czerniak">
            Czerniak
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Raki skóry
          </Link>
        </NavigationItemWithSubmenu>

        <NavigationItemWithSubmenu label="Nasze ośrodki">
          <Link className="navigation-item" to="/poznan/badanie-znamion">
            Poznań
          </Link>
          <Link className="navigation-item" to="/warszawa/badanie-znamion">
            Warszawa
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Wrocław
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Kraków
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Szczecin
          </Link>
          <Link className="navigation-item" to="/dermatoskopia-badanie-znamion">
            Łódź
          </Link>
        </NavigationItemWithSubmenu>

        <Link className="navigation-item" to="/o-nas">
          <div className="heading">O nas</div>
        </Link>
        <Link className="navigation-item" to="/cennik">
          <div className="heading">Cennik</div>
        </Link>
        <Link className="navigation-item" to="/blog">
          <div className="heading">Blog</div>
        </Link>
      </div>
      <div className="navigation-contact">
        <div className="phone-wrapper">
          <CallButton className="normal-icon" />
          <span className="phone-number">+48 781 445 685</span>
        </div>
        <Button size="M" className="normal-button">
          {constactCtaComponent}
        </Button>
        <Button size="S" className="small-button">
          {constactCtaComponent}
        </Button>
      </div>
      <div
        className="navigation-items-mobile"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        {!isMenuOpened && (
          <img className="hamburgerIcon" src={hamburgerIcon} alt="Menu" />
        )}
        {isMenuOpened && (
          <img className="closeIcon" src={CloseIcon} alt="Zamknij Menu" />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
