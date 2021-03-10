import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import CallButton from "../../components/CallButton";
import MailButton from "../../components/MailButton";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { LOCATIONS } from "../../config/cities";

import "../../styles/contact.scss";
import CallCta from "../../components/CallCta";

const CityItem = ({ city = "", link = "" }) => (
  <Link className="contact_list_item" to={`/${link}/#kontakt`} title={city}>
    <div>
      <h4>{city}</h4>
    </div>
    <Button type="secondary" size="M">
      <span>Wybierz</span>
    </Button>
  </Link>
);

const ContactInfo = () => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className="contact_nav_button">
      <div className="contact_nav_button_desktop_label">Umów się</div>
      <div
        className="contact_nav_button_mobile_label"
        onClick={() => setModalOpened(true)}
      >
        Kontakt
      </div>
      <Modal
        className="contact_modal"
        isOpened={isModalOpened}
        onClose={() => setModalOpened(false)}
      >
        <div>
          <RegistrationInfo />
        </div>
      </Modal>
    </div>
  );
};

const RegistrationInfo = () => (
  <>
    <div className="registration_wrappper">
      <h4>Rejestracja telefoniczna:</h4>
      <div className="registration_hours">
        <p>
          poniedziałek - wtorek: <strong>10:00⁃18:00</strong>
        </p>
        <p>
          środa: <strong>12:00⁃20:00</strong>
        </p>
        <p>
          czwartek - piątek: <strong>10:00⁃18:00</strong>
        </p>
      </div>
      <a
        href="tel:+48781445685"
        title="+48781445685"
        className="contact_info_wrapper"
      >
        <CallButton className="phone_button" type="dark" size="S" />
        <span className="phone-number">+48 781 445 685</span>
      </a>
      <a
        href="mailto:zbadamy@twojeznamiona.pl"
        title="zbadamy@twojeznamiona.pl"
        className="contact_info_wrapper"
      >
        <MailButton className="mail_button" />
        <span className="phone-number">zbadamy@twojeznamiona.pl</span>
      </a>
    </div>
    <div className="operations_wrappper">
      <h4>Dział Operacyjny</h4>
      <div className="contact_person">Ida Słowicka</div>
      <a
        href="tel:+48794445685"
        title="+48794445685"
        className="contact_info_wrapper"
      >
        <CallButton className="phone_button" type="dark" size="S" />
        <span className="phone-number">+48 794 445 685</span>
      </a>
      <a
        href="mailto:ida.slowicka@twojeznamiona.pl"
        title="ida.slowicka@twojeznamiona.pl"
        className="contact_info_wrapper"
      >
        <MailButton className="mail_button" />
        <span className="phone-number">ida.slowicka@twojeznamiona.pl</span>
      </a>
      <div className="contact_person_details">
        <p>
          <a href="tel:+48781445685" title="+48781445685">
            +48 794 445 685
          </a>
        </p>

        <p>
          <a
            href="mailto:ida.slowicka@twojeznamiona.pl"
            title="ida.slowicka@twojeznamiona.pl"
          >
            ida.slowicka@twojeznamiona.pl
          </a>
        </p>
      </div>
    </div>
  </>
);

const ContactPage = () => (
  <Layout constactCtaComponent={<ContactInfo />}>
    <Helmet>
      <title>Kontakt</title>
    </Helmet>
    <CallCta />
    
    <div className="contact">
      <div className="contact_cities">
        <h1>Nasze ośrodki</h1>
        <div className="contact_cities_instructions">
          <strong>Wybierz miasto</strong>, w którym chcesz się zbadać.
          Dynamicznie zwiększamy obszar naszej działalności, aby już wkrótce
          działać w Twoim miejscu zamieszkania!
        </div>
        <div className="contact_cities_list_wrapper">
          {LOCATIONS.filter((location) => location.link).map((location) => (
            <CityItem
              key={location.city}
              city={location.city}
              link={location.link}
            />
          ))}
        </div>
      </div>
      <div className="contact_details_wrappper">
        <div className="contact_details_wrappper_sticky">
          <RegistrationInfo />
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
