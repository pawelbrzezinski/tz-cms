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
    author: "Angelika M.",
    city: "Ustka",
    review:
      "Sposób przeprowadzenia badania sprostał moim oczekiwaniom. Bardzo dokładnie, szczegółowo i kompleksowo wykonane badanie wszystkich znamion.",
  },
  {
    author: "Agnieszka S.",
    city: "Ustka",
    review:
      "Znamię z jakim przyszłam najzwyczajniej mi się nie podobało. Cieszę się, że sprawdziłam i upewniłam się, że nie muszę się niepokoić. Polecam to miejsce. Miło i profesjonalnie.",
  },
  {
    author: "Bartosz D.",
    city: "Ustka",
    review:
      "Ładnie urządzone miejsce, dobrzy specjaliści. Szczerze polecam to miejsce wszystkim, których niepokoją jakieś znamiona. Nowoczesny gabinet, miła obsługa.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    items: [
      {
        price: "250",
        label:
          "Dermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
      },
      {
        price: "200",
        label: "Dermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Badanie kontrolne wytypowanych przez lekarza znamion do obserwacji ",
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
      "Pacjent badany jest za pomocą dermatoskopu ręcznego Heine Delta 30",
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

const UstkaBadanieZnamionPage = ({ graph }) => {
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
        description="Ustka - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, ustka, dermatoskopia"
      />
      <Hero
        h1="Centrum Dermatoskopowego Badania Znamion w Ustce"
        oneLiner="Wszystkie swoje działania skupiamy na kompleksowej diagnostyce znamion aby wyeliminować nowotwory skóry z życia milionów ludzi."
        oneLinerMore="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={<CtaCennik />}
      />
      <WhyUs className="home_why_us with_no_padding_top" />

      <Melanoma className="home_melanoma" />
      <PriceList className="home_price_list" data={PRICES} />
      <Covid className="home_covid">
        <ol>
          <li>
            Zapraszamy do Kliniki bez osób towarzyszących. W przypadku
            konieczności przyjścia w towarzystwie, prosimy, aby była to tylko
            jedna osoba. Osoba ta musi poddać się tej samej ankiecie dotyczącej
            stanu zdrowia związanego z pandemią COVID-19 oraz przestrzegać tych
            samych środków higieny i ochrony, które są wymagane od pacjenta przy
            wejściu do Kliniki.
          </li>
          <li>Prosimy o przyjście bez biżuterii i makijażu oraz w maseczce.</li>
          <li>
            Prosimy o przybycie w uzgodnionym czasie. Jeśli przyjdzie Pani/Pan
            przed czasem, w celu organizacji kontroli dostępu prosimy o
            poczekanie poza placówką.
          </li>
          <li>
            Po przybyciu do Kliniki otrzyma Pani/Pan instrukcje i zostanie
            Pani/Pan poproszona/y o wcieranie w ręce środka dezynfekcyjnego
            (roztwór wirusobójczy) przez 20-30 sekund.
          </li>
          <li>
            W przypadku spotkania innego pacjenta prosimy o zachowanie
            bezpiecznej odległości (2 metry).
          </li>
          <li>
            Opłatę najbezpieczniej jest wnosić kartą/przelewem, a nie gotówką
            (mniejsze prawdopodobieństwo zakażenia wirusowego).
          </li>
          <li>
            Jeśli podczas wizyty w Klinice okaże się, że Pani/Pan nie spełnia
            wcześniej ogłoszonych wymagań, wizyta może zostać odwołana, jeśli
            lekarz uzna to za stosowne.
          </li>
        </ol>
      </Covid>
      <Contact className="home_contact" where="w Ustce" />
      <Location
        className="home_location"
        coords={{
          lat: 54.58353472216163,
          lng: 16.856022243197042,
        }}
        googleMarker={{
          title: "Instytut Medicus Esthetic",
          data: "ul. Bulwar Portowy 9, 76-270 Ustka",
          link: "https://goo.gl/maps/Mrba261iLbwPAnCk6",
        }}
        additionalDetails="Centrum Badania Znamion znajduje się w tym samym pasażu co Auchan - Gabinety Oricea. Przed Auchan są dostępne miejsca parkingowe."
        locationInfo={{
          title: "Instytut Medicus Esthetic",
          data: "ul. Bulwar Portowy 9, 76-270 Ustka",
        }}
        hoursInfo={["pon. - pt.: 8:00 - 18:00,", "czwartek: 9:00 - 14:00"]}
        transportationInfo={{
          data: "-",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania dermatoskopowego w Ustce"
        H5={() => (
          <>
            W trakcie wizyty lekarz dokonuje oględzin całego ciała, oglądając
            dermatoskopem ręcznym wszystkie znamiona na Twojej skórze.
            Pieprzyki, które wymagają obserwacji lub usunięcia są zapisywane -
            jest to tzw. mapowanie znamion.
          </>
        )}
        Text={() => (
          <>
            Po wykonaniu badania dermatoskopowego lekarz omawia z Tobą dalsze
            zalecenia diagnostyczne. Jeśli otrzymałeś zalecenie usunięcia zmiany
            skórnej zostaniesz skierowany do chirurga celem wykonania zabiegu.
            Pamiętaj o odbiorze wyniku badania histopatologicznego niepokojącej
            zmiany!
          </>
        )}
      />
      <ImportantInfo className="home_important_info" data={INFOS} />
      <Dermoscopy className="home_two_col_section_right_img with_no_padding_top" reverse={false} />
      <RiskGroup className="home_risk_group home_risk_group--add-padding-top" />
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
          filter: { relativePath: { regex: "/ustka1.png/" } }
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
          filter: { relativePath: { regex: "/ustka2.png/" } }
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
          filter: { relativePath: { regex: "/ustka3.png/" } }
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
          filter: { relativePath: { regex: "/ustka4.png/" } }
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
      <UstkaBadanieZnamionPage
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
