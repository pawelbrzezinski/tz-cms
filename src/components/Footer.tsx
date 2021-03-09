import React, { useState } from "react";

import logo from "../img/logo.svg";
import call from "../img/call.svg";
import StarsImage from "../img/stars.svg";
import email from "../img/mail_icon.svg";
import fb from "../img/fb_icon.svg";
import instagram from "../img/instagram_icon.svg";
import ChevronIcon from "../img/chevron-up.svg";

import { LOCATIONS } from "../config/cities";

import "../styles/footer.scss";
import { Link } from "gatsby";

const Footer = () => {
  const [isOpenedLinks, setIsOpenedLinks] = useState(false);
  const [isOpenedCities, setIsOpenedCities] = useState(false);

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo_secion">
          <div className="footer_logo_wrapper">
            <img src={logo} alt="Twoje Znamiona" />
          </div>
          <div className="footer_social_wrapper">
            <a
              href="https://www.facebook.com/Twoje-Znamiona-102496158493976"
              target="_blank"
              title="Twoje Znamiona - Facebook"
            >
              <img src={fb} alt="Twoje Znamiona - Facebook" />
            </a>
            <a
              href="https://www.instagram.com/twojeznamiona/"
              target="_blank"
              title="Twoje Znamiona - Instragram"
            >
              <img src={instagram} alt="Twoje Znamiona - Instragram" />
            </a>
          </div>
        </div>
        <div className="footer_contact_secion">
          <p className="hide_mobile">Masz pytania?</p>
          <div className="footer_contact_phone_wrapper">
            <p className="hide_mobile">Zadzwoń</p>
            <a
              href="tel:+48781445685"
              title="+48781445685"
              className="footer_contact_phone_number"
            >
              <img src={call} alt="Twoje Znamiona - Zadzwoń" />
              <span>+48 781 445 685</span>
            </a>
          </div>
          <div className="footer_contact_email_wrapper">
            <p className="hide_mobile">Napisz do nas</p>
            <a
              href="mailto:zbadamy@twojeznamiona.pl"
              title="zbadamy@twojeznamiona.pl"
              className="footer_contact_email_address"
            >
              <img src={email} alt="Twoje Znamiona - Napisz do nas" />
              <span>zbadamy@twojeznamiona.pl</span>
            </a>
          </div>
          <div className="footer_contact_reviews_wrapper">
            <p>Oceń nas</p>
            <a
              href="https://forms.gle/WPbJ14hx5cr2MMQp6"
              target="_blank"
              title="Oceń nas"
            >
              <div className="footer_contact_reviews_container">
                <div className="footer_contact_stars_wrapper">
                  <img src={StarsImage} alt="5 gwiazdek" />
                </div>
                <div className="footer_contact_rating_wrapper">
                  <span>5,0</span> (<span>691</span> opinii)
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="footer_links_section">
          <div
            className="heading"
            onClick={() => setIsOpenedLinks(!isOpenedLinks)}
          >
            <p>Linki do stron</p>
            <img
              className={isOpenedLinks ? "" : "flip"}
              src={ChevronIcon}
              alt={isOpenedLinks ? "Zwiń" : "Rozwiń"}
              title={isOpenedLinks ? "Zwiń" : "Rozwiń"}
            />
          </div>

          <div
            className={`footer_links_wrapper ${
              !isOpenedLinks ? "hide_mobile" : ""
            }`}
          >
            <div>
              <Link to="/dermatoskopia-badanie-znamion" className="footer_link">
                Badanie Znamion
              </Link>
              <Link
                to="/wideodermatoskopia-komputerowe-badanie-znamion"
                className="footer_link"
              >
                Wideodermatoskopia
              </Link>
              <Link to="/chirurgiczne-usuwanie-znamion" className="footer_link">
                Chirurgiczne Usuwanie Znamion
              </Link>
              <Link to="/laserowe-usuwanie-znamion" className="footer_link">
                Laserowe Usuwanie Znamion
              </Link>
              <Link to="#" className="footer_link">
                Konsultacje onkologiczne
              </Link>
              <Link to="/czerniak" className="footer_link">
                Czerniak
              </Link>
              <Link
                to="/czerniak/rodzaje-czerniaka-zdjecia"
                className="footer_link"
              >
                Czerniak rodzaje
              </Link>
              <Link
                to="/czerniak/rodzaje-czerniaka/czerniak-na-dloniach-i-podeszwach-stop"
                className="footer_link"
              >
                Czerniak akralny
              </Link>
              {/* <Link to="#" className="footer_link">
                Raki skóry
              </Link> */}
            </div>
            <div>
              <Link to="/cennik" className="footer_link">
                Cennik
              </Link>
              <Link to="/o-nas" className="footer_link">
                O nas
              </Link>
              <Link to="/kontakt" className="footer_link">
                Kontakt
              </Link>
              <Link to="/blog" className="footer_link">
                Blog
              </Link>
              <Link to="/praca" className="footer_link">
                Kariera
              </Link>
              <Link to="/polityka" className="footer_link">
                Dane osobowe
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_cities_secion">
          <div
            className="heading"
            onClick={() => setIsOpenedCities(!isOpenedCities)}
          >
            <p>Nasze ośrodki</p>
            <img
              className={isOpenedCities ? "" : "flip"}
              src={ChevronIcon}
              alt={isOpenedCities ? "Zwiń" : "Rozwiń"}
              title={isOpenedCities ? "Zwiń" : "Rozwiń"}
            />
          </div>
          <div
            className={`footer_links_wrapper ${
              !isOpenedCities ? "hide_mobile" : ""
            }`}
          >
            <div>
              {LOCATIONS.filter((location) => location.link).map((location) => (
                <Link
                  key={location.city}
                  to={`/${location.link}`}
                  className="footer_link"
                >
                  {location.city}
                </Link>
              ))}
            </div>
            <div>
              <Link
                to={`/poznan/usuwanie-znamion-pieprzykow`}
                className="footer_link"
              >
                Poznan - Chirurgia
              </Link>
              <Link
                to={`/warszawa/usuwanie-znamion-pieprzykow`}
                className="footer_link"
              >
                Warszawa - Chirurgia
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_wrapper">
        twojeznamiona.pl &copy; 2015-{new Date().getFullYear()}. Wszelkie prawa
        zastrzeżone.
      </div>
    </footer>
  );
};
export default Footer;
