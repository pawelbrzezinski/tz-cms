import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { graphql, StaticQuery } from "gatsby";

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

import SEO from "../../components/SEO";

const REVIEWS = [
  {
    author: "Sandra S.",
    city: "Warszawa",
    review:
      "Znamię z jakim przyszłam nie było groźne, ale najzwyczajniej mi się nie podobało, bo było w widocznym miejscu, w okolicy policzka. Zdecydowałam się je usunąć, po zabiegu nie było żadnych komplikacji. Wszystko dobrze się zagoiło, w ogóle nic nie widać.",
  },
  {
    author: "Szymon M.",
    city: "Warszawa",
    review:
      "Odwiedziłem już kilka przychodni leczące zmiany skórne, ale dopiero tutaj przy pomocy nowoczesnego sprzętu określono prawidłowo moje znamię, które zostało już usunięte.",
  },
  {
    author: "Marianna W.",
    city: "Warszawa",
    review:
      "Chciałam się umówić na laserowe usunięcie nietypowego pieprzyka na nodze jednak po rozmowie z Panią w rejestracji zdecydowałam się najpierw na badanie wszystkich znamion. Całe szczęście, bo znamię które chciałam usunąć laserem okazało się czerniakiem! Dziękuję wszystkim za pomoc! Jestem teraz pod stałą kontrolą.",
  },
];

const OFFERS = [
  {
    type: "chirurgiczne",
    title: "Usuwanie znamion",
    desc:
      "Każda niepokojąca zmiana skórna powinna być usunięta chirurgicznie gdyż tylko na podstawie badania histopatologicznego można postawić jednoznaczną diagnozę. Przed wykonaniem zabiegu pacjent powinien poddać się badaniu dermatoskopowemu.",
  },

  {
    type: "niechirurgiczne",
    title: "Nieinwazyjne Usuwanie Znamion",
    desc:
      "Nieinwazyjne usuwanie łagodnych pieprzyków  laserem Co2 lub metodą krioterapii jest zarezerwowane dla łagodnych zmian skórnych. Lekarz po wykonaniu badania dermatoskopowego wszystkich znamion kwalifikuje znamiona do odpowiedniej metody zabiegowej.",
  },
  {
    type: "badanie",
    title: "Badanie znamion",
    desc:
      "Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć.",
  },
];

const PRICES = [
  {
    isOpened: true,
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
    categoryName: "Konsultacje onkologiczne - czerniak",
    items: [
      {
        price: "200",
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

const WarszawaUsuwanieZnamionPage = ({ graph }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Jakie są przeciwwskazania do wykonania badania?",
      text:
        "Dermatoskopia jest całkowicie nieinwazyjną metodą diagnostyki, nie ma żadnych przeciwwskazań do jej wykonania. Badaniu mogą poddać się kobiety w ciąży, karmiące piersią, osoby obciążone poważnymi chorobami przewlekłymi czy też dzieci. Dermatoskopia polega na wykonywaniu zdjęć znamion w powiększeniu stąd może zostać wykonana u każdego.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy czerniak boli?",
      text:
        "Dolegliwości bólowe nie są charakterystycznym objawem dla czerniaka, natomiast ich obecność bądź brak nie przesądza w żadnym wypadku diagnozy. Czerniak może rozwijać się po cichu, bez bólu i zupełnie niezauważalnie i z roku na rok zajmować coraz większą powierzchnię Twojej skóry. Najczęstszy czerniak szerzący się powierzchownie (SSMM - superficial spreading melanoma malignum), może wzrastać niezauważalnie nawet kilka lat!",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />}>
      <SEO
        title="Centrum Usuwania Znamion i Pieprzyków - twojeznamiona.pl"
        description="Warszawa - Usuwanie Znamion. Czy wiesz, że aby bezpiecznie usunąć znamię należy je wcześniej zbadać? Chirurgiczne usuwanie niepokojących pieprzyków. Laserowe usuwanie łagodnych zmian skórnych. Ile to kosztuje - cennik. Umów się!"
        keywords="badanie znamion, warszawa, dermatoskopia"
      />
      <Hero
        h1="Warszawskie Centrum Badania i Usuwania Znamion"
        oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
        oneLinerMore="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={<CtaCennik />}
      />
      <Offer
        className="home_offer"
        h5="W naszym Centrum Badania i Usuwania Znamion w procesie diagnostycznym uczestniczą dermatolodzy, chirurdzy oraz onkolodzy, zapewniając pacjentom kompleksową opiekę i profesjonalną  diagnostykę."
        data={OFFERS}
      />
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
          data:
            "Przystanek tramwajowy Sokołowska. W pobliżu stacji metra Młynów",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} />

      <Reviews className="home_reviews" data={REVIEWS} />
      <Surgery className="home_two_col_section_left_img" />
      <ProcedureDetails className="home_two_col_section_right_img" />
      <ImportantInfo className="home_important_info" />
      <Dermoscopy className="home_two_col_section_right_img" />
      <Videodermoscopy className="home_two_col_section_left_img" />
      <RiskGroup className="home_risk_group" />
      
      <Faq className="home_faq" data={FAQS} />
      <Abcde className="home_abcde" />
      <Oncology className="home_two_col_section_left_img" />
      <Cta className="home_cta" constactCtaComponent={<CtaUmowSie />} />
    </Layout>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        ImageGallery1: allFile(
          filter: {
            relativePath: { regex: "/Centrum Badania Znamion w Warszawie.jpg/" }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 350, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ImageGallery2: allFile(
          filter: {
            relativePath: {
              regex: "/Centrum Badania Znamion w Warszawie_1.jpg/"
            }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 350, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ImageGallery3: allFile(
          filter: {
            relativePath: {
              regex: "/Centrum Badania Znamion w Warszawie_2.jpg/"
            }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 350, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ImageGallery5: allFile(
          filter: {
            relativePath: {
              regex: "/Centrum Badania Znamion w Warszawie_4.jpg/"
            }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 350, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq1Image: allFile(filter: { relativePath: { regex: "/faq1.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 144, maxHeight: 269, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq2Image: allFile(filter: { relativePath: { regex: "/faq2.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 144, maxHeight: 269, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq1ImageMobile: allFile(
          filter: { relativePath: { regex: "/faq-1-mobile.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 288, maxHeight: 179, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq2ImageMobile: allFile(
          filter: { relativePath: { regex: "/faq-2-mobile.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 288, maxHeight: 179, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <WarszawaUsuwanieZnamionPage
        graph={{
          gallery: [
            data.ImageGallery1.nodes[0],
            data.ImageGallery2.nodes[0],
            data.ImageGallery3.nodes[0],
            data.ImageGallery5.nodes[0],
          ],
          faqs: {
            1: {
              image: data.Faq1Image.nodes[0],
              imageMobile: data.Faq1ImageMobile.nodes[0],
            },
            2: {
              image: data.Faq2Image.nodes[0],
              imageMobile: data.Faq2ImageMobile.nodes[0],
            },
          },
        }}
        {...props}
      />
    )}
  />
);
