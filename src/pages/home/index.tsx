import React from "react";
import Hero from "../../components/landingPage/Hero";
import Layout from "../../components/Layout";

import Dermoscopy from "../../components/landingPage/Dermoscopy";
import Videodermoscopy from "../../components/landingPage/Videodermoscopy";
import Surgery from "../../components/landingPage/Surgery";
import Melanoma from "../../components/landingPage/Melanoma";
import Abcde from "../../components/landingPage/Abcde";
import Reviews from "../../components/landingPage/Reviews";
import Offer from "../../components/landingPage/Offer";
import Faq from "../../components/landingPage/Faq";
import RiskGroup from "../../components/landingPage/RiskGroup";
import WhyUs from "../../components/landingPage/WhyUs";


import Locations from "./Locations";
import Cta from "../../components/Cta";
import { Link } from "gatsby";

import "../../styles/home.scss";


//FAQ
import Faq1Image from "../../img/faq1.png";
import Faq1ImageMobile from "../../img/faq-1-mobile.png";
import Faq2Image from "../../img/faq2.png";
import Faq2ImageMobile from "../../img/faq-2-mobile.png";


const CtaUmowSie = () => {
  return (
    <Link to="/kontakt" title="Umów się">
      Umów się
    </Link>
  );
};

const REVIEWS = [
  {
    author: "Katarzyna K.",
    city: "Poznań",
    review: "Skrupulatne i dokładne badanie wideodermatoskopowe. Polecam wszystkim, którzy szukają pomocy i ludzkich specjalistów."
  },
  {
    author: "Anna B.",
    city: "Warszawa",
    review: "Nikt nie ma tyle cierpliwości, by badać moje 213 znamion kilka razy w roku. Nikt nie ma tyle taktu, bym czuła się przy tym komfortowo. Dziękuję!"
  },
  {
    author: "Dominik M.",
    city: "Wrocław",
    review: "Otrzymałem wynik badania dermatoskopowego, jak również zrozumiały komentarz do wyniku histopatologicznego usuniętej zmiany."
  }
]

const FAQS = [
  {
    image: Faq1Image,
    imageMobile:Faq1ImageMobile,
    title:"Czym różni się zwykły pieprzyk od czerniaka?",
    text: "Czerniak we wczesnym stadium na pierwszy rzuta oka może wyglądać tak samo jak zwykłe znamię barwnikowe. Są znamiona, które mogą też imitować czerniaka, dlatego tak ważne jest oglądanie znamion w powiększeniu. Niepokojące objawy, na które powinniśmy zwracać uwagę to m.in.: asymetria w obrębie znamienia; nierówne, poszarpane brzegi zmiany; wielobarwność; duży rozmiar- powyżej 6mm oraz dynamiczne zmiany w obrębie znamienia."
  },
  {
    image: Faq2Image,
    imageMobile:Faq2ImageMobile,
    title:"Jak często powinno się badać znamiona za pomocą dermatoskopu?",
    text: "Każdy z nas raz do roku powinien poddać badaniu dermatoskopowemu wszystkie obecne na ciele znamiona. Powinniśmy też na bieżąco kontrolować swoje znamiona w domu, obserwując, czy nie zmieniają się w czasie. Osoby z podwyższonym ryzykiem zachorowania na raka skóry, powinny badać się częściej, zgodnie z zaleceniem lekarskim - czasami nawet co kilka miesięcy."
  }
]

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
    <Reviews className="home_reviews" data={REVIEWS} />
    <Melanoma className="home_melanoma"/>
    <Faq className="home_faq" data={FAQS} />
    <Dermoscopy className="home_dermoscopy"/>
    <Videodermoscopy className="home_videodermoscopy"/>
    <RiskGroup className="home_risk_group" />
    <Abcde className="home_abcde" />
    <Surgery className="home_surgery" />
    <Cta className="home_cta" />
  </Layout>
);

export default HomePage;
