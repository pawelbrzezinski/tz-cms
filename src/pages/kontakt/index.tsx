import React from "react";
import Layout from "../../components/Layout";

import "../../styles/contact.scss";
import CallIcon from "../../img/call_icon_dark.svg";
import MailIcon from "../../img/mail_icon_dark.svg";
import CallButton from "../../components/CallButton";
import MailButton from "../../components/MailButton";
import Button from "../../components/Button";

const CITIES = [
  {
    label: "Poznań",
    address1: "ul. Dąbrowskiego 77A",
    address2: "60-101 Poznań",
    link: "poznan/badanie-znamion",
  },
  {
    label: "Warszawa",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Wrocław",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Kraków",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Szczecin",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Łódź",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Katowice",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Bydgoszcz",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
  {
    label: "Ustka",
    address1: "ul. Sokołowska 9/U-02",
    address2: "01-142 Warszawa  ",
    link: "warszawa/badanie-znamion",
  },
];

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
  </Layout>
);

export default ContactPage;
