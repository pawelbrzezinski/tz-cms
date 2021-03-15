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
import ButtonDrw from "../../components/landingPage/ButtonDrw";

//styles
import "../../styles/home.scss";

import SEO from "../../components/SEO";
import CallCta from "../../components/CallCta";

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

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    button: () => (
      <ButtonDrw
        data-doctor="warszawa badanie znamion(wideodermatoskopia)"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "300",
        label:
          "wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
      },
      {
        price: "200",
        label: "wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    button: () => (
      <ButtonDrw
        data-doctor="warszawachirurgiczne usuwanie znamion"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "500",
        label: "usunięcie 1 zmiany skórnej",
      },
      {
        price: "120",
        label: "badanie histopatologiczne 1 zmiany",
      },
      {
        price: "360",
        label: "usunięcie kolejnej zmiany w trakcie jednej wizyty",
      },
      {
        price: "200",
        label: "konsultacja chirurgiczna",
      },
      {
        price: "350",
        label: "biopsja z badaniem histopatologicznym",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Nieinwazyjne usuwanie znamion",
    button: () => (
      <ButtonDrw
        data-doctor="warszawa zabiegi nieinwazyjne(laser, krioterapia)"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "500",
        label: "usuwanie laserowe 1 zmiany skórnej - laser CO2	",
      },
      {
        price: "10",
        label: "usuwanie każdej kolejnej zmiany w trakcie jednej wizyty",
      },
      {
        price: "250",
        label: "krioterapia 1 zmiany skórnej",
      },
      {
        price: "10",
        label: "krioterapia każdej kolejnej zmiany w trakcie jednej wizyty",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje Onkologiczne - czerniak",
    button: () => (
      <ButtonDrw
        data-doctor="e-konsultacjaonkologiczna"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "200",
        label: "e-wizyta - wideokonferencja",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje dermatologiczne",
    items: [
      {
        price: "250",
        label: "konsultacja dermatologiczna",
        sub: "inne schorzenia skóry: trądzik, łuszczyca, grzybica itp.",
        // button: () => (
        //   <ButtonDrw
        //     data-doctor="warszawakonsultacja dermatologiczna"
        //     data-speciality=""
        //     data-visitkind=""
        //     data-evisit="false"
        //     data-appname="drw"
        //     data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
        //   />
        // ),
      },
      // {
      //   price: "150",
      //   label: "e-wizyta - wideokonferencja",
      //   button: () => (
      //     <ButtonDrw
      //       data-doctor="e-konsultacjadermatologiczna"
      //       data-speciality=""
      //       data-visitkind=""
      //       data-evisit="false"
      //       data-appname="drw"
      //       data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      //     />
      //   ),
      // },
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

const WarszawaBadanieZnamionPage = ({ graph, location }) => {
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
    <Layout constactCtaComponent={<CtaUmowSie />} location={location}>
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
      <Offer className="home_offer" data={OFFERS} />
      <Melanoma className="home_melanoma" />
      <WhyUs className="home_why_us with_no_padding_top" />
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
          <li>
            Zostanie Pani/Panu zmierzona temperatura (termometr bezdotykowy na
            podczerwień). W razie gorączki konsultacja zostanie anulowana.
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
      <Contact className="home_contact" where="w Warszawie" />
      <Location
        className="home_location"
        coords={{
          lat: 52.234637679876535,
          lng: 20.959497315423995,
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
        hoursInfo={["pon. - pt.: 10:00⁃19:00,", "czwartek: 8:00 - 19:00 "]}
        transportationInfo={{
          data:
            "Przystanek tramwajowy Sokołowska. W pobliżu stacji metra Młynów",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Warszawie"
      />
      <ImportantInfo className="home_important_info" data={INFOS} />
      <Dermoscopy
        className="home_two_col_section_right_img with_no_padding_top"
        reverse={false}
      />
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
      <WarszawaBadanieZnamionPage
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
