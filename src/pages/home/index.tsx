import React from "react";
import Button from "../../components/Button";
import CallButton from "../../components/CallButton";
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

const HomePage = () => (
  <Layout>
    <Button size="L">Primary button</Button>
    <Button size="M">Primary button</Button>
    <Button size="S">Primary button</Button>
    <Button type="secondary" size="L">
      Secondary button
    </Button>
    <Button type="secondary" size="M">
      Secondary button
    </Button>
    <Button type="secondary" size="S">
      Secondary button
    </Button>
    <CallButton />
    <CallButton size="S" />
    <Hero />
    <Locations />
    <Offer />
    <WhyUs />
    <Reviews />
    <Melanoma />
    <Faq />
    <Dermoscopy />
    <Videodermoscopy />
    <RiskGroup />
    <Abcde />
    <Surgery />
  </Layout>
);

export default HomePage;
