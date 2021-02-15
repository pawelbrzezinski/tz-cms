import React from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Abcde from "./Abcde";
import Dermoscopy from "./Dermoscopy";
import Faq from "./Faq";
import Locations from "./Locations";
import Melanoma from "./Melanoma";
import Offer from "./Offer";
import Reviews from "./Reviews";
import RiskGroup from "./RiskGroup";
import Surgery from "./Surgery";
import Videodermoscopy from "./Videodermoscopy";
import WhyUs from "./WhyUs";
import Cta from "../../components/Cta";

import "../../styles/home.scss";

const HomePage = () => (
  <Layout>
    <Hero
      h1="Ogólnopolskie Centrum Diagnostyki Znamion"
      oneLiner="Kompleksowo zajmujemy się diagnostyką znamion aby wyeliminować
          nowotwory z życia milionów ludzi!"
      ctaPrimary="Umów się"
      ctaSecondary="Jak to działa?"
    />
    <Locations />
    <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <Reviews className="home_reviews" />
    <Melanoma />
    <Faq className="home_faq" />
    <Dermoscopy />
    <Videodermoscopy />
    <RiskGroup className="home_risk_group" />
    <Abcde className="home_abcde" />
    <Surgery />
    <Cta className="home_cta" />
  </Layout>
);

export default HomePage;