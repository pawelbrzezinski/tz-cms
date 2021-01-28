import React from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Faq from "./Faq";
import Offer from "./Offer";
import Reviews from "./Reviews";
import RiskGroup from "./RiskGroup";
import WhyUs from "./WhyUs";

import "../../styles/home.scss";

const PoznanBadanieZnamionPage = () => (
  <Layout>
    <Hero
      h1="Ogólnopolskie Centrum Diagnostyki Znamion"
      oneLiner="Kompleksowo zajmujemy się diagnostyką znamion aby wyeliminować
          nowotwory z życia milionów ludzi!"
      ctaPrimary="Umów się"
      ctaSecondary="Jak to działa?"
    />
    <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <div>CEENNNIIK</div>
    <div>COVID</div>
    <div>Contact FORM</div>
    <div>MAP</div>
    <Reviews className="home_reviews" />
    <div>Przebieg badania</div>
    <div>Co warto wiedziec o badaniu</div>
    <Faq className="home_faq" />
    <RiskGroup className="home_risk_group" />
  </Layout>
);

export default PoznanBadanieZnamionPage;
