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
import { Link } from "gatsby";

import "../../styles/home.scss";

const CtaUmowSie = () => {
  return (
    <Link to="/kontakt" title="Umów się">
      Umów się
    </Link>
  );
};

const HomePage = () => (
  <Layout>
    <Hero
      h1="Ogólnopolskie Centrum Dermatoskopowego Badania Znamion"
      oneLiner="Kompleksowo zajmujemy się diagnostyką znamion aby wyeliminować
          nowotwory z życia milionów ludzi!"
      ctaPrimary={<CtaUmowSie />}
      ctaSecondary={null}
    />
    <Locations />
    <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <Reviews className="home_reviews" />
    <Melanoma className="home_melanoma"/>
    <Faq className="home_faq" />
    <Dermoscopy className="home_dermoscopy"/>
    <Videodermoscopy className="home_videodermoscopy"/>
    <RiskGroup className="home_risk_group" />
    <Abcde className="home_abcde" />
    <Surgery className="home_surgery" />
    <Cta className="home_cta" />
  </Layout>
);

export default HomePage;
