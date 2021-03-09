import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import hamburgerIcon from "../img/hamburger_menu.svg";
import CloseIcon from "../img/close.svg";
import ChevronIcon from "../img/chevron-up.svg";
import { Helmet } from "react-helmet";
import { LOCATIONS } from "../config/cities";
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

const Navigation = ({ constactCtaComponent = null }) => {
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
          <Link className="navigation-item" to="/chirurgiczne-usuwanie-znamion">
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
          {LOCATIONS.filter((location) => location.link).map((location) => (
            <Link
              key={location.city}
              className="navigation-item"
              to={`/${location.link}`}
            >
              {location.city}
            </Link>
          ))}
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
        <a
          href="tel:+48781445685"
          title="+48781445685"
          className="phone-wrapper"
        >
          <CallButton className="normal-icon" />
          <span className="phone-number">+48 781 445 685</span>
        </a>

        <Button size="M" className="normal-button">
          {constactCtaComponent || <Link to="/kontakt">Umów się</Link>}
        </Button>
        <Button size="S" className="small-button">
          {constactCtaComponent || <Link to="/kontakt">Umów się</Link>}
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
