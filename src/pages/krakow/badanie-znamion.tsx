import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "gatsby";

import Hero from "../../components/landingPage/Hero";
import Layout from "../../components/Layout";
import Cta from "../../components/Cta";

import Location from "../../components/landingPage/Location";
import PriceList from "../../components/landingPage/PriceList";
import Reviews from "../../components/landingPage/Reviews";
import Dermoscopy from "../../components/landingPage/Dermoscopy";
import Oncology from "../../components/landingPage/Oncology";
import Videodermoscopy from "../../components/landingPage/Videodermoscopy";
import Surgery from "../../components/landingPage/Surgery";
import Melanoma from "../../components/landingPage/Melanoma";
import Abcde from "../../components/landingPage/Abcde";
import Gallery from "../../components/landingPage/Gallery";
import Offer from "../../components/landingPage/Offer";
import Faq from "../../components/landingPage/Faq";
import RiskGroup from "../../components/landingPage/RiskGroup";
import Covid from "../../components/landingPage/Covid";
import ImportantInfo from "../../components/landingPage/ImportantInfo";
import Contact from "../../components/landingPage/Contact";
import ProcedureDetails from "../../components/landingPage/ProcedureDetails";
import WhyUs from "../../components/landingPage/WhyUs";

//styles
import "../../styles/home.scss";

//Gallery
import CEOImge from "../../img/ceo.png";

//FAQ
import Faq1Image from "../../img/faq1.png";
import Faq1ImageMobile from "../../img/faq-1-mobile.png";
import Faq2Image from "../../img/faq2.png";
import Faq2ImageMobile from "../../img/faq-2-mobile.png";

const REVIEWS = [
  {
    author: "Katarzyna K.",
    city: "Poznań",
    review:
      "Skrupulatne i dokładne badanie wideodermatoskopowe. Polecam wszystkim, którzy szukają pomocy i ludzkich specjalistów.",
  },
  {
    author: "Anna B.",
    city: "Warszawa",
    review:
      "Nikt nie ma tyle cierpliwości, by badać moje 213 znamion kilka razy w roku. Nikt nie ma tyle taktu, bym czuła się przy tym komfortowo. Dziękuję!",
  },
  {
    author: "Dominik M.",
    city: "Wrocław",
    review:
      "Otrzymałem wynik badania dermatoskopowego, jak również zrozumiały komentarz do wyniku histopatologicznego usuniętej zmiany.",
  },
];

const GALLERY = [
  {
    src: CEOImge,
  },
  {
    src: CEOImge,
  },
  {
    src: CEOImge,
  },
  {
    src: CEOImge,
  },
  {
    src: CEOImge,
  },
  {
    src: CEOImge,
  },
];

const FAQS = [
  {
    image: Faq1Image,
    imageMobile: Faq1ImageMobile,
    title: "Czym różni się zwykły pieprzyk od czerniaka?",
    text:
      "Czerniak we wczesnym stadium na pierwszy rzuta oka może wyglądać tak samo jak zwykłe znamię barwnikowe. Są znamiona, które mogą też imitować czerniaka, dlatego tak ważne jest oglądanie znamion w powiększeniu. Niepokojące objawy, na które powinniśmy zwracać uwagę to m.in.: asymetria w obrębie znamienia; nierówne, poszarpane brzegi zmiany; wielobarwność; duży rozmiar- powyżej 6mm oraz dynamiczne zmiany w obrębie znamienia.",
  },
  {
    image: Faq2Image,
    imageMobile: Faq2ImageMobile,
    title: "Jak często powinno się badać znamiona za pomocą dermatoskopu?",
    text:
      "Każdy z nas raz do roku powinien poddać badaniu dermatoskopowemu wszystkie obecne na ciele znamiona. Powinniśmy też na bieżąco kontrolować swoje znamiona w domu, obserwując, czy nie zmieniają się w czasie. Osoby z podwyższonym ryzykiem zachorowania na raka skóry, powinny badać się częściej, zgodnie z zaleceniem lekarskim - czasami nawet co kilka miesięcy.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
];

const CtaUmowSie = () => {
  return (
    <AnchorLink href="#kontakt" title="Umów się">
      Umów się
    </AnchorLink>
  );
};
const CtaCennik = () => {
  return (
    <AnchorLink href="#cennik" title="Cennik">
      Ile to kosztuje?
    </AnchorLink>
  );
};

const PoznanBadanieZnamionPage = () => (
  <Layout constactCtaComponent={<CtaUmowSie />}>
    <Hero
      h1="Krakowskie Centrum Dermatoskopowego Badania Znamion"
      oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
      oneLinerMore=" Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
      ctaPrimary={<CtaUmowSie />}
      ctaSecondary={<CtaCennik />}
    />
    <Offer className="home_offer" />
    <WhyUs className="home_why_us" />
    <PriceList className="home_price_list" data={PRICES} />
    <Covid className="home_covid" />
    <Contact className="home_contact" />
    <Location
      className="home_location"
      coords={{
        lat: 52.4139945,
        lng: 16.9005161,
      }}
      additionalDetails="Ośrodek znajduje się na parterze w budynku Nobel Tower - wejście niezależne. Parking płatny na miejscu."
      locationInfo={{
        title: "Nobel Tower",
        data: "ul. Dąbrowskiego 77A, 60-101 Poznań",
      }}
      hoursInfo={{
        data: "pon. - pt.: 10:00⁃18:00",
      }}
      transportationInfo={{
        data: "tramwaj 18, 20",
      }}
    />
    <Gallery className="home_gallery" data={GALLERY} />
    <Reviews className="home_reviews" data={REVIEWS} />

    <ProcedureDetails className="home_procedure_details" />
    <ImportantInfo className="home_important_info" />
    <Dermoscopy className="home_dermoscopy" />
    <Videodermoscopy className="home_videodermoscopy" />
    <RiskGroup className="home_risk_group" />
    <Surgery className="home_surgery" />
    <Faq className="home_faq" data={FAQS} />
    <Abcde className="home_abcde" />
    <Melanoma className="home_melanoma" />
    <Oncology className="home_dermoscopy" />
    <Cta className="home_cta" constactCtaComponent={<CtaUmowSie />} />
  </Layout>
);

export default PoznanBadanieZnamionPage;
