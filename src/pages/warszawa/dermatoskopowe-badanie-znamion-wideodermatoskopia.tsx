import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
import ImageGallery1 from "../../img/warszawa/Centrum Badania Znamion w Warszawie.jpg";
import ImageGallery2 from "../../img/warszawa/Centrum Badania Znamion w Warszawie_1.jpg";
import ImageGallery3 from "../../img/warszawa/Centrum Badania Znamion w Warszawie_2.jpg";
import ImageGallery5 from "../../img/warszawa/Centrum Badania Znamion w Warszawie_4.jpg";

//FAQ
import Faq1Image from "../../img/faq1.png";
import Faq1ImageMobile from "../../img/faq-1-mobile.png";
import Faq2Image from "../../img/faq2.png";
import Faq2ImageMobile from "../../img/faq-2-mobile.png";
import SEO from "../../components/SEO";

const REVIEWS = [
  {
    author: "Aleksandra K.",
    city: "Warszawa",
    review:
      "Sposób przeprowadzenia badania sprostał moim oczekiwaniom. Dokładnie, szczegółowo i kompleksowo wszystko sprawdzone.",
  },
  {
    author: "Krystyna H.",
    city: "Warszawa",
    review:
      "Już Panie w recepcji są niezwykle uprzejme. Miałam umówioną wizytę, ale wypadło mi coś w pracy. Zadzwoniłam, aby ją przełożyć z czym nie było problemu. Wczoraj byłam na sprawdzeniu swoich znamion. Wszystko jest Ok, dziękuję za miłą konsultację.",
  },
  {
    author: "Ryszard M.",
    city: "Warszawa",
    review:
      "Ładnie urządzone miejsce, dobrzy specjaliści. Szczerze polecam to miejsce wszystkim, których niepokoją jakieś znamiona.",
  },
];

const GALLERY = [
  {
    src: ImageGallery2,
  },
  {
    src: ImageGallery1,
  },
  {
    src: ImageGallery3,
  },
  {
    src: ImageGallery5,
  },
];

const FAQS = [
  {
    image: Faq1Image,
    imageMobile: Faq1ImageMobile,
    title: "Jakie są przeciwwskazania do wykonania badania?",
    text:
      "Dermatoskopia jest całkowicie nieinwazyjną metodą diagnostyki, nie ma żadnych przeciwwskazań do jej wykonania. Badaniu mogą poddać się kobiety w ciąży, karmiące piersią, osoby obciążone poważnymi chorobami przewlekłymi czy też dzieci. Dermatoskopia polega na wykonywaniu zdjęć znamion w powiększeniu stąd może zostać wykonana u każdego.",
  },
  {
    image: Faq2Image,
    imageMobile: Faq2ImageMobile,
    title: "Czy czerniak boli?",
    text:
      "Dolegliwości bólowe nie są charakterystycznym objawem dla czerniaka, natomiast ich obecność bądź brak nie przesądza w żadnym wypadku diagnozy. Czerniak może rozwijać się po cichu, bez bólu i zupełnie niezauważalnie i z roku na rok zajmować coraz większą powierzchnię Twojej skóry. Najczęstszy czerniak szerzący się powierzchownie (SSMM - superficial spreading melanoma malignum), może wzrastać niezauważalnie nawet kilka lat!",
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
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    items: [
      {
        price: "500",
        label: "Usunięcie 1 zmiany skórnej",
      },
      {
        price: "120",
        label: "Badanie histopatologiczne 1 zmiany",
      },
      {
        price: "360",
        label: "Usunięcie kolejnej zmiany w trakcie jednej wizyty",
      },
      {
        price: "200",
        label: "Konsultacja chirurgiczna",
      },
      {
        price: "350",
        label: "Biopsja z badaniem histopatologicznym",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Nieinwazyjne usuwanie znamion",
    items: [
      {
        price: "500",
        label: "Usuwanie laserowe 1 zmiany skórnej - laser CO2	",
      },
      {
        price: "10",
        label: "Usuwanie każdej kolejnej zmiany w trakcie jednej wizyty",
      },
      {
        price: "250",
        label: "Krioterapia 1 zmiany skórnej",
      },
      {
        price: "10",
        label: "Krioterapia każdej kolejnej zmiany w trakcie jednej wizyty",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje Onkologiczne - czerniak",
    items: [
      {
        price: "200",
        label: "E-wizyta - wideokonferencja",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje dermatologiczne",
    items: [
      {
        price: "250",
        label: "Konsultacja dermatologiczna",
      },
      {
        price: "150",
        label: "E-wizyta - wideokonferencja",
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
    <SEO
      title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
      description="Warszawa - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
      keywords="badanie znamion, warszawa, dermatoskopia"
    />
    <Hero
      h1="Warszawskie Centrum Dermatoskopowego Badania Znamion"
      oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
      oneLinerMore="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
      ctaPrimary={<CtaUmowSie />}
      ctaSecondary={<CtaCennik />}
    />
    <Offer className="home_offer" />
    <Melanoma className="home_melanoma" />
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
      googleMarker={{
        title: "ul. Sokołowska 9/U-02",
        data: "Dzielnica - Wola, 01-142 Warszawa",
        link: "https://g.page/twoje-znamiona-warszawa?share",
      }}
      additionalDetails="Centrum Badania Znamion znajduje się w tym samym pasażu co Auchan - Gabinety Oricea. Przed Auchan są dostępne miejsca parkingowe."
      locationInfo={{
        title: "ul. Sokołowska 9/U-02",
        data: "Dzielnica - Wola, 01-142 Warszawa",
      }}
      hoursInfo={{
        data: "pon. - pt.: 10:00⁃19:00, czwartek: 8:00 - 19:00 ",
      }}
      transportationInfo={{
        data: "Przystanek tramwajowy Sokołowska. W pobliżu stacji metra Młynów",
      }}
    />
    <Gallery className="home_gallery" data={GALLERY} />

    <Reviews className="home_reviews" data={REVIEWS} />

    <ProcedureDetails className="home_procedure_details" />
    <ImportantInfo className="home_important_info" />
    <Dermoscopy className="home_dermoscopy" />
    <Videodermoscopy className="home_videodermoscopy" />
    <RiskGroup className="home_risk_group" />
    <Surgery className="home_videodermoscopy" />
    <Faq className="home_faq" data={FAQS} />
    <Abcde className="home_abcde" />
    <Oncology className="home_videodermoscopy" />
    <Cta className="home_cta" constactCtaComponent={<CtaUmowSie />} />
  </Layout>
);

export default PoznanBadanieZnamionPage;
