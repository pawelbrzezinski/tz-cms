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
    author: "Katarzyna K.",
    city: "Poznań",
    review:
      "Skrupulatne i dokładne badanie wideodermatoskopowe. Polecam wszystkim, którzy szukają pomocy i ludzkich specjalistów.",
  },
  {
    author: "Anna B.",
    city: "Poznan",
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
        price: "200",
        label: "konsultacja chirurgiczna",
      },
      {
        price: "400",
        label:
          "usunięcie 1 znamienia (do 1,5 cm w standardowej lokalizacji - tułów/kończyny)",
        sub: "w cenie kontrola, zdjęcie szwów",
      },
      {
        price: "500",
        label:
          "usunięcie 1 znamienia (powyżej 1,5 cm lub w szczególnej lokalizacji np. twarz) ",
        sub: "w cenie kontrola, zdjęcie szwów",
      },
      {
        price: "80",
        label: "badanie histopatologiczne jednej zmiany",
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

const OFFERS = [
  {
    type: "badanie",
    title: "Badanie znamion",
    desc:
      "Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć.",
  },
  {
    type: "chirurgiczne",
    title: "Usuwanie znamion",
    desc:
      "Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion metodą krioterapii.",
  },
  {
    type: "onkologia",
    title: "Konsultacje onkologiczne",
    desc:
      "Konsultacja onkologiczna w zakresie nowotworów skóry, w tym czerniaka złośliwego. Pacjent otrzymuje zalecenia po usunięciu zmiany nowotworowej, dotyczące badań kontrolnych, leczenia uzupełniającego, a także leczenia zaawansowanego czerniaka.",
  },
];

const INFOS = [
  {
    title: "Ile trwa badanie?",
    desc:
      "Badanie wszystkich znamion - 30-40 min. Badanie kontrolne znamion wyznaczonych przez lekarza - 15-20 min.",
  },
  {
    title: "Jak się przygotować do badania?",
    desc:
      "Przed badaniem należy wykonać demakijażu oraz skrócić owłosienia w miejscach, w których znajdują się znamiona, celem poprawy jakości obrazu dermatoskopowego.",
  },
  {
    title: "Jakim urządzeniem badamy?",
    desc:
      "Pacjent badany jest za pomocą nowoczesnego sprzętu - wideodermatoskopu Fotofinder Portable Medicam 1000 Full HD",
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

const PoznanBadanieZnamionPage = ({ graph }) => {
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
        title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
        description="Poznan - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, poznan, dermatoskopia"
      />
      <Hero
        h1="Poznańskie Centrum Dermatoskopowego Badania Znamion"
        oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
        oneLinerMore="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={<CtaCennik />}
      />
      <Offer className="home_offer" data={OFFERS} />
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
          data: "Dzielnica - Wola, 01-142 Poznan",
          link: "https://g.page/twoje-znamiona-poznan?share",
        }}
        additionalDetails="Centrum Badania Znamion znajduje się w tym samym pasażu co Auchan - Gabinety Oricea. Przed Auchan są dostępne miejsca parkingowe."
        locationInfo={{
          title: "ul. Sokołowska 9/U-02",
          data: "Dzielnica - Wola, 01-142 Poznan",
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

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Poznaniu"
      />
      <ImportantInfo className="home_important_info" data={INFOS} />
      <Dermoscopy className="home_two_col_section_right_img" reverse={false} />
      <Videodermoscopy className="home_two_col_section_left_img" />
      <RiskGroup className="home_risk_group" />
      <Surgery className="home_two_col_section_left_img" reverse={false} />
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
      <PoznanBadanieZnamionPage
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
