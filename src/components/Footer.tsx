import React, { useState } from "react";

import logo from "../img/logo.svg";
import call from "../img/call.svg";
import star from "../img/star_icon.svg";
import email from "../img/mail_icon.svg";
import fb from "../img/fb_icon.svg";
import instagram from "../img/instagram_icon.svg";
import ChevronIcon from "../img/chevron-up.svg";
import "../styles/footer.scss";

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
            <a href="#" title="Twoje Znamiona - Facebook">
              <img src={fb} alt="Twoje Znamiona - Facebook" />
            </a>
            <a href="#" title="Twoje Znamiona - Instragram">
              <img src={instagram} alt="Twoje Znamiona - Instragram" />
            </a>
          </div>
        </div>
        <div className="footer_contact_secion">
          <p className="hide_mobile">Masz pytania?</p>
          <div className="footer_contact_phone_wrapper">
            <p className="hide_mobile">Zadzwoń</p>
            <a href="#" className="footer_contact_phone_number">
              <img src={call} alt="Twoje Znamiona - Zadzwoń" />
              <span>+48 781 445 685</span>
            </a>
          </div>
          <div className="footer_contact_email_wrapper">
            <p className="hide_mobile">Napisz do nas</p>
            <a href="#" className="footer_contact_email_address">
              <img src={email} alt="Twoje Znamiona - Napisz do nas" />
              <span>zbadamy@twojeznamiona.pl</span>
            </a>
          </div>
          <div className="footer_contact_reviews_wrapper">
            <p>Oceń nas</p>
            <div className="footer_contact_reviews_container">
              <div className="footer_contact_stars_wrapper">
                <img src={star} alt="Twoje Znamiona - Opinie" />
                <img src={star} alt="Twoje Znamiona - Opinie" />
                <img src={star} alt="Twoje Znamiona - Opinie" />
                <img src={star} alt="Twoje Znamiona - Opinie" />
                <img src={star} alt="Twoje Znamiona - Opinie" />
              </div>
              <div className="footer_contact_rating_wrapper">
                <span>5,0</span> (<span>691</span> opinii)
              </div>
            </div>
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
              <a href="#" className="footer_link">
                Badanie Znamion
              </a>
              <a href="#" className="footer_link">
                Usuwanie Znamion
              </a>
              <a href="#" className="footer_link">
                Konsultacje onkologiczne
              </a>
              <a href="#" className="footer_link">
                Czerniak
              </a>
              <a href="#" className="footer_link">
                Raki skóry
              </a>
              <a href="#" className="footer_link">
                Cennik
              </a>
              <a href="#" className="footer_link">
                O nas
              </a>
            </div>
            <div>
              <a href="#" className="footer_link">
                Kontakt
              </a>
              <a href="#" className="footer_link">
                Blog
              </a>
              <a href="#" className="footer_link">
                FAQ
              </a>
              <a href="#" className="footer_link">
                Dane osobowe
              </a>
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
              <a href="#" className="footer_link">
                Poznań
              </a>
              <a href="#" className="footer_link">
                Warszawa
              </a>
              <a href="#" className="footer_link">
                Wrocław
              </a>
              <a href="#" className="footer_link">
                Kraków
              </a>
              <a href="#" className="footer_link">
                Szczecin
              </a>
              <a href="#" className="footer_link">
                Łódź
              </a>
              <a href="#" className="footer_link">
                Bydgoszcz
              </a>
            </div>
            <div>
              <a href="#" className="footer_link">
                Katowice
              </a>
              <a href="#" className="footer_link">
                Ustka
              </a>
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
