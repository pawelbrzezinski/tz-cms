import React from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Faq from "./Faq";
import Offer from "./Offer";
import Reviews from "./Reviews";
import RiskGroup from "./RiskGroup";
import WhyUs from "./WhyUs";

import "../../styles/home.scss";
import Covid from "./Covid";
import PriceList from "./PriceList";
import { Link } from "gatsby";

import ImportantInfo from "./ImportantInfo";
import ProcedureDetails from "./ProcedureDetails";

import Location from "./Location";
import Cta from "../../components/Cta";
import Contact from "./Contact";

const CtaUmowSie = () => {
  return (
    <Link to="#cennik" title="Umów się">
      Umów się
    </Link>
  );
};
const CtaCennik = () => {
  return (
    <Link to="#cennik" title="Cennik">
      Ile to kosztuje?
    </Link>
  );
};

const PoznanBadanieZnamionPage = () => (
  <Layout>
    <Hero
      h1="Warszawskie Centrum Dermatoskopowego Badania Znamion"
      oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi. Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
      ctaPrimary={<CtaUmowSie />}
      ctaSecondary={<CtaCennik />}
    />
{/* 
    <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <PriceList className="home_price_list" />
    <Covid className="home_covid" /> */}

    <Contact className="home_contact"  />

    <Location
      className="home_location"
      coords={{
        lat: 52.4139945,
        lng: 16.9005161,
      }}
      additionalDetails="Ośrodek znajduje się na parterze w budynku Nobel Tower - wejście niezależne. Parking płatny na miejscu."
    />

    <div>GALERIA</div>

    <Reviews className="home_reviews" />

    <ProcedureDetails className="home_procedure_details" />

    <ImportantInfo className="home_important_info" />

    <div>
      DERMATOSKOPIA Z HOME
    </div>
    <div>
      WIDEODERMATOSKOPIA Z HOME
    </div>
    <RiskGroup className="home_risk_group" />

    <div>
      USUWANIE ZNAMION
    </div>

    <Faq className="home_faq" />

    <div>
      ABCDE z home
    </div>
    <div>
      CZERNIAK NIE ZAWSZE JEEST CZARNY Z HOME
    </div>
    <div>
      KONSULTACJE ONOKLOGICZNE - TAK JAK DERMATOKSOPIA Z HOME
    </div>

    <Cta className="home_cta" />
  </Layout>
);

export default PoznanBadanieZnamionPage;
