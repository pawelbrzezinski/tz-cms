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
import ImportantInfo from "./ImportantInfo";
import ProcedureDetails from "./ProcedureDetails";

import Location from "./Location";

const PoznanBadanieZnamionPage = () => (
  <Layout>
    <Hero
      h1="Ogólnopolskie Centrum Diagnostyki Znamion"
      oneLiner="Kompleksowo zajmujemy się diagnostyką znamion aby wyeliminować
          nowotwory z życia milionów ludzi!"
      ctaPrimary="Umów się"
      ctaSecondary="Jak to działa?"
    />
    {/* <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <PriceList className="home_price_list" />
    <Covid className="home_covid" />
    <div>Contact FORM</div>

    <Reviews className="home_reviews" />
    <Location
      className="home_location"
      coords={{
        lat: 52.4139945,
        lng: 16.9005161,
      }}
      additionalDetails="Ośrodek znajduje się na parterze w budynku Nobel Tower - wejście niezależne. Parking płatny na miejscu."
    />
    <ProcedureDetails className="home_procedure_details" />
    <Faq className="home_faq" />

    <ImportantInfo className="home_important_info" />
    <RiskGroup className="home_risk_group" /> */}
  </Layout>
);

export default PoznanBadanieZnamionPage;
