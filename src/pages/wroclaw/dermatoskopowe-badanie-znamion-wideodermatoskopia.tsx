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
import ButtonDrw from "../../components/landingPage/ButtonDrw";

const REVIEWS = [
  {
    author: "Bożena G.",
    city: "Wrocław",
    review:
      "Ode mnie 5/5. Jedyne takie miejsce, gdzie bez problemu można umówić się na badanie wszystkich znamion, a mam ich naprawdę dużo. Na szczęście nic nie wykazało.",
  },
  {
    author: "Jarek O.",
    city: "Wrocław",
    review:
      "Dziękuję Pani dr za szybki termin wizyty i za tempo wszystkich przeprowadzonych badań oraz możliwość zdalnej konsultacji z onkologiem.",
  },
  {
    author: "Iga J.",
    city: "Wrocław",
    review:
      "Przeprowadzone badanie dermatoskopowe nie wykazało nic złego. Badanie wykonywane skrupulatnie. Świetne podejście do klienta. Wszyscy mili i uśmiechnięci. Cena konkurencyjna.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    button: () => (
      <ButtonDrw
        data-doctor="wrocław badanie znamion(wideodermatoskopia)"
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
    categoryName: "Nieinwazyjne usuwanie znamion",
    button: () => (
      <ButtonDrw
        data-doctor="wrocław zabiegi nieinwazyjne(krioterapia)"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "250",
        label: "Krioterapia  1 zmiana",
      },
      {
        price: "350",
        label: "Krioterapia  2-5 zmian",
      },
      {
        price: "400",
        label: "Krioterapia 6-10 zmian",
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
        label: "E-wizyta - wideokonferencja",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje dermatologiczne",
    button: () => (
      <ButtonDrw
        data-doctor="e-konsultacjadermatologiczna"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
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
    title: "Jakim urządzeniem badamy?",
    desc:
      "Pacjent badany jest za pomocą nowoczesnego sprzętu - wideodermatoskopu Fotofinder Portable Medicam 1000 Full HD",
  },
  {
    title: "Jak się przygotować do badania?",
    desc:
      "Przed badaniem należy wykonać demakijażu oraz skrócić owłosienia w miejscach, w których znajdują się znamiona, celem poprawy jakości obrazu dermatoskopowego.",
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

const WarszawaBadanieZnamionPage = ({ graph }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Czy badanie dermatoskopowe boli?",
      text:
        "Nie. Badanie dermatoskopowe to nieinwazyjna metoda oceny znamion polegająca na oglądaniu i fotografowaniu zmian skórnych. Jest to badanie całkowicie bezbolesne i nieinwazyjne. Lekarz przykłada specjalną kamerę wideodermatoskopu do powierzchni skóry i w ten sposób uzyskuje obraz znamion w dużym powiększeniu. ",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Jak często powinno się badać znamiona za pomocą dermatoskopu?",
      text:
        "Każdy z nas powinien na bieżąco kontrolować swoje znamiona, obserwując czy nie zmieniają się w czasie, a ponadto raz do roku poddać badaniu dermatoskopowemu wszystkie obecne na ciele znamiona. Osoby z podwyższonym ryzykiem zachorowania na raka skóry, powinny badać się częściej, zgodnie z zaleceniem lekarskim.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />}>
      <SEO
        title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
        description="Wrocław - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, warszawa, dermatoskopia"
      />
      <Hero
        h1="Wrocławskie Centrum Dermatoskopowego Badania Znamion"
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
      <Contact className="home_contact" where="we Wrocławiu" />
      <Location
        className="home_location"
        coords={{
          lat: 51.08785922228506,
          lng: 17.056314009859083,
        }}
        googleMarker={{
          title: "ul. Jesionowa 49/U1",
          data: "50-504 Wrocław",
          link: "https://g.page/twoje-znamiona-wroclaw?share",
        }}
        additionalDetails="Ośrodek znajduje się na parterze, wejście niezależne od strony ul. Pięknej.  Możliwość parkowania wzdłuż chodnika  przed budynkiem lub na pobliskim osiedlu."
        locationInfo={{
          title: "ul. Jesionowa 49/U1",
          data: "50-504 Wrocław",
        }}
        hoursInfo={[
          "poniedziałek: 13:00 - 19:00",
          "wtorek: 13:00 - 19:00",
          "środa: 8:30 - 14:00 ",
          "czwartek: 13:00 - 21:00",
          "piątek: 8:30 - 14:00",
          "sobota: 9:00 - 15:00",
        ]}
        transportationInfo={{
          data:
            "W pobliżu przystanku autobusowego: Transbud - dojście od strony ul. Pięknej, Kamienna - dojście od strony ul. Jesionowej",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego we Wrocławiu"
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
            relativePath: { regex: "/wroclaw-centrum-badania-znamion_1.jpg/" }
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
            relativePath: { regex: "/wroclaw-centrum-badania-znamion_2.jpg/" }
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
            relativePath: { regex: "/wroclaw-centrum-badania-znamion_5.jpg/" }
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
            relativePath: { regex: "/wroclaw-centrum-badania-znamion_4.png/" }
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
