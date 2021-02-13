import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import "../../styles/contact.scss";
import CallButton from "../../components/CallButton";
import MailButton from "../../components/MailButton";
import Button from "../../components/Button";
import Cta from "../../components/Cta";
import CITIES from "../../config/cities";

const CityItem = ({ label = "", address1 = "", address2 = "" }) => (
  <div className="contact_list_item">
    <div>
      <h4>{label}</h4>
      <div className="address">
        <p>{address1}</p>
        <p>{address2}</p>
      </div>
    </div>
    <Button type="secondary" size="M">
      Wybierz
    </Button>
  </div>
);

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Kontakt</title>
    </Helmet>
    <div className="contact">
      <div className="contact_cities">
        <h1>Nasze ośrodki</h1>
        <div className="contact_cities_instructions">
          Wybierz miasto, w którym chcesz się zbadać. Dynamicznie zwiększamy
          obszar naszej działalności, aby już wkrótce działać w Twoim miejscu
          zamieszkania!
        </div>
        <div className="contact_cities_list_wrapper">
          {CITIES.map((city) => (
            <CityItem key={city.label} {...city} />
          ))}
        </div>
      </div>
      <div className="contact_details_wrappper">
        <div className="contact_details_wrappper_sticky">
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
            <div className="contact_info_wrapper">
              <CallButton type="dark" size="S" />
              <span className="phone-number">+48 781 445 685</span>
            </div>
            <div className="contact_info_wrapper">
              <MailButton />
              <span className="phone-number">zbadamy@twojeznamiona.pl</span>
            </div>
          </div>
          <div className="operations_wrappper">
            <h4>Dział Operacyjny</h4>
            <div className="contact_person">Ida Słowicka</div>
            <div className="contact_person_details">
              <p>e-mail: ida.slowicka@twojeznamiona.pl</p>
              <p>telefon: +48 794 445 685</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cta className="home_cta" />
  </Layout>
);

export default ContactPage;
