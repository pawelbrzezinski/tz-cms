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
import CallCta from "../../components/CallCta";

const REVIEWS = [
  {
    author: "Izabella M.",
    city: "Kraków",
    review:
      "Chciałam skorzystać z wizyty na NFZ, ale terminy były tak odległe, że postanowiłam poszukać prywatnej kliniki. W tym miejscu nie dość, że nie czekałam długo to zostałam bardzo kompleksowo obsłużona. Cena nie była wysoka w porównaniu do jakości usług jakie świadczą.",
  },
  {
    author: "Samanta B.",
    city: "Kraków",
    review:
      "Pojawiło się na moim ciele kilka nowych pieprzyków, niektóre miały dość nieregularne kształty, dla pewności umówiłam się na wizytę, aby obejrzał je specjalista. Każde znamię zostało dokładnie sprawdzone i na szczęście okazało się, że nie są one groźne.",
  },
  {
    author: "Amelia L.",
    city: "Kraków",
    review:
      "Miałam na ręce dość duży pieprzyk, który podczas zabawy z psem zadrapałam. Pani Doktor sprawdziła uszkodzony pieprzyk, ale też zbadała wszystkie inne znamiona i skierowała mnie na usunięcie innego znamienia, na które zupełnie nie zwracałam uwagi. Czekam na wynik.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    items: [
      {
        price: "350",
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
        price: "150",
        label: "E-wizyta - wideokonferencja",
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
      "Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem Co2 lub metodą krioterapii.",
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

const KrakowBadanieZnamionPage = ({ graph }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title:
        "Czy badanie wideodermatoskopem wykonuje się jeden raz, czy należy je powtarzać?",
      text:
        "Badanie dermatoskopowe jest profilaktycznym badaniem skóry, które powinno być wykonywane regularnie, Przy ponownym wykonaniu badania znamion można porównać zapamiętany wcześniej przez wideodermatoskop obraz znamienia z aktualnym obrazem i podjąć decyzję dotyczącą ewentualnego usunięcia zmiany. Badanie należy powtarzać co rok, natomiast w przypadku pacjentów z grupy ryzyka lub osób posiadających znamiona podejrzane zalecamy wcześniejszy termin następnego badania dermatoskopowego.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy kobiety w ciąży mogą się badać?",
      text:
        "Tak. Wideodermatoskopia jest badaniem całkowicie nieinwazyjnym, polegającym na oglądaniu obrazu znamion w powiększeniu. Badanie można wykonywać u wszystkich bez wyjątku. Kobiety w ciąży  i w trakcie połogu z uwagi na zmiany hormonalne oraz tendencję do zmiany wyglądu znamion na ciele powinny poddać się profilaktycznemu badaniu znamion.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />}>
      <SEO
        title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
        description="Kraków - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, krakow, dermatoskopia"
      />
      <Hero
        h1="Krakowskie Centrum Dermatoskopowego Badania Znamion"
        oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
        oneLinerMore="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={<CtaCennik />}
      />
      <Offer className="home_offer" data={OFFERS} />
      <Melanoma className="home_melanoma" />
      <WhyUs className="home_why_us with_no_padding_top" />
      <PriceList className="home_price_list" data={PRICES} />
      <Covid className="home_covid">
        <ol>
          <li>
            Przyjdź na ustaloną godzinę wizyty bez osób towarzyszących.
            Maksymalnie w poczekalni może znajdować się jeden pacjent.
          </li>
          <li>
            Przed wizytą w recepcji otrzymasz maseczkę jednorazowego użytku,
            która będzie Cię chronić przed i podczas wizyty u lekarza. Jeśli
            jesteś w maseczce - możesz pozostać w swojej.
          </li>
          <li>
            Skorzystaj z płynu znajdującego się w Ośrodku w celu dezynfekcji
            rąk.
          </li>
          <li>Pracownik Ośrodka zmierzy temperaturę Twojego ciała.</li>
          <li>
            Nasi lekarze wyposażeni są w specjalne fartuchy, maseczki oraz
            przyłbice.
          </li>
          <li>Zachęcamy Państwa do płatności bezgotówkowych.</li>
        </ol>
      </Covid>
      <Contact className="home_contact" where="w Krakowie" />
      <Location
        className="home_location"
        coords={{
          lat: 50.06350477942393,
          lng: 19.93467253321539,
        }}
        googleMarker={{
          title: "Centrum Dobry Lekarz",
          data: "Pl. Szczepański 3, piętro II, 31-011 Kraków",
          link: "https://g.page/twoje-znamiona-krakow?share",
        }}
        additionalDetails="Ośrodek Twoje Znamiona znajduje się w Centrum Nowoczesnych Terapii “Dobry Lekarz” na drugim piętrze - wejście prosto do rejestracji.  Wewnątrz znajduje się winda o szerokości 70 cm."
        locationInfo={{
          title: "Centrum Dobry Lekarz",
          data: "Pl. Szczepański 3, piętro II, 31-011 Kraków",
        }}
        hoursInfo={["pon. - pt.  8:00 - 20:00,", "sobota 8:00 - 12:00"]}
        transportationInfo={{
          data:
            "Lokalizacja pomiędzy teatrem Bagatelą a rynkiem. Najbliższy parking przy ul. Karmelickiej. Najwygodniejszy dojazd - tramwajem",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Krakowie"
      />
      <ImportantInfo className="home_important_info" data={INFOS} />
      <Dermoscopy className="home_two_col_section_right_img with_no_padding_top" reverse={false} />
      <Videodermoscopy className="home_two_col_section_left_img" />
      <RiskGroup className="home_risk_group" />
      <Surgery className="home_two_col_section_left_img" reverse={false} />
      <Faq className="home_faq" data={FAQS} />
      <Abcde className="home_abcde" />
      <Oncology className="home_two_col_section_left_img with_no_padding_top with_no_padding_bottom" />
      <Cta className="home_cta" constactCtaComponent={<CtaUmowSie />} />
      <CallCta />
    </Layout>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        ImageGallery1: allFile(
          filter: { relativePath: { regex: "/kr1.jpg/" } }
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
          filter: { relativePath: { regex: "/kr2.jpg/" } }
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
          filter: { relativePath: { regex: "/kr3.jpg/" } }
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
        ImageGallery4: allFile(
          filter: { relativePath: { regex: "/kr4.jpg/" } }
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
          filter: { relativePath: { regex: "/kr5.jpg/" } }
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
        ImageGallery6: allFile(
          filter: { relativePath: { regex: "/kr6.jpg/" } }
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
        ImageGallery7: allFile(
          filter: { relativePath: { regex: "/kr7.jpg/" } }
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
        ImageGallery8: allFile(
          filter: { relativePath: { regex: "/kr8.jpg/" } }
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
      <KrakowBadanieZnamionPage
        graph={{
          gallery: [
            data.ImageGallery1.nodes[0],
            data.ImageGallery5.nodes[0],
            data.ImageGallery2.nodes[0],
            data.ImageGallery6.nodes[0],
            data.ImageGallery7.nodes[0],
            data.ImageGallery8.nodes[0],
            data.ImageGallery4.nodes[0],
            data.ImageGallery3.nodes[0],
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
