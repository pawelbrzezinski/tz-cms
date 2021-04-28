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

import Surgery2 from "../../components/landingPage/Surgery2";
import Laser from "../../components/landingPage/Laser";
import Melanoma from "../../components/landingPage/Melanoma";

import Gallery from "../../components/landingPage/Gallery";
import Offer from "../../components/landingPage/Offer";
import Faq from "../../components/landingPage/Faq";

import Covid from "../../components/landingPage/Covid";
import ImportantInfo from "../../components/landingPage/ImportantInfo";
import Contact from "../../components/landingPage/Contact";
import ButtonDrw from "../../components/landingPage/ButtonDrw";

//styles
import "../../styles/home.scss";

import SEO from "../../components/SEO";
import CallCta from "../../components/CallCta";

const REVIEWS = [
  {
    author: "Bartek D.",
    city: "Łódź",
    review:
      "Tak jak ta przychodnia powinny działać wszystkie. Ustalenie wizyty, bezproblemowe, Pan doktor konkretny i kompetentny.",
  },
  {
    author: "Alicja K.",
    city: "Łódź",
    review:
      "To centrum znamion to miejsce, które, zapewnia dostęp do wszystkich potrzebnych specjalistów. Dziękuję i polecam.",
  },
  {
    author: "Aleksandra C.",
    city: "Łódź",
    review:
      "Profesjonalne miejsce. Po badaniu znamion umówiłam się na usuwanie chirurgiczne niepokojącej zmiany. Pan doktor zabieg wykonał bez zarzutu! W badaniu histopatologicznym na szczęście bez zmian. Polecam to miejsce!",
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
      "Nieinwazyjne usuwanie łagodnych pieprzyków  laserem lub metodą krioterapii jest zarezerwowane dla łagodnych zmian skórnych. Lekarz po wykonaniu badania dermatoskopowego wszystkich znamion kwalifikuje znamiona do odpowiedniej metody zabiegowej.",
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
    button: () => (
      <ButtonDrw
        data-doctor="chirurgiczne usuwanieznamion"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTcxNDZ9.JF_5NARATrk7remBOYszB2nIWg6zjQLCw7JPnFnSgJs"
      />
    ),
    items: [
      {
        price: "200",
        label: "konsultacja chirurgiczna",
        sub: "Zabiegi chirurgiczne są wykonywane u pacjentów pełnoletnich",
      },
      {
        price: "400",
        label: "usunięcie 1 znamienia do 1,5cm",
        sub:
          "w standardowej lokalizacji - tułów/kończyny - w cenie kontrola, zdjęcie szwów",
      },
      {
        price: "500",
        label: "usunięcie 1 znamienia powyżej 1,5cm",
        sub:
          "w szczególnej lokalizacji np. twarz - w cenie kontrola, zdjęcie szwów",
      },
      {
        price: "80",
        label: "badanie histopatologiczne jednej zmiany",
      },
      {
        price: "250",
        label:
          "usunięcie dodatkowego znamienia w trakcie jednej wizyty do 1,5cm",
        sub: "standardowej lokalizacji - tułów/kończyny",
      },
      {
        price: "350",
        label:
          "usunięcie dodatkowego znamienia w trakcie jednej wizyty powyżej 1,5cm",

        sub: "w szczególnej lokalizacji np. twarz",
      },
      {
        price: "500",
        label: "chirurgia aparatu paznokciowego",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Nieinwazyjne usuwanie znamion ",
    button: () => (
      <ButtonDrw
        data-doctor="zabiegi nieinwazyjne(laser, krioterapia)"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTcxNDZ9.JF_5NARATrk7remBOYszB2nIWg6zjQLCw7JPnFnSgJs"
      />
    ),
    items: [
      {
        price: "250",
        label: "krioterapia 1 zmiana",
      },
      {
        price: "350",
        label: "krioterapia 2-5 zmian",
      },
      {
        price: "400",
        label: "krioterapia 6-10 zmian",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Badanie znamion - wideodermatoskopia",
    button: () => (
      <ButtonDrw
        data-doctor="badanie znamion(wideodermatoskopia)"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTcxNDZ9.JF_5NARATrk7remBOYszB2nIWg6zjQLCw7JPnFnSgJs"
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
    button: () => (
      <ButtonDrw
        data-doctor="konsultacjadermatologiczna"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTcxNDZ9.JF_5NARATrk7remBOYszB2nIWg6zjQLCw7JPnFnSgJs"
      />
    ),
    items: [
      {
        price: "190",
        label: "konsultacja dermatologiczna",
        sub: "inne schorzenia skóry: trądzik, łuszczyca, grzybica itp.",
      },
      {
        price: "350",
        label: "biopsja zmiany skórnej z badaniem histopatologicznym",
      },
      {
        price: "+70",
        label: "badanie mikrobiologiczne wymazu",
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

const INFOS = [
  {
    title: "Ile trwa zabieg?",
    desc:
      "Zabieg chirurgicznego usuwania znamion jest krótki, nie wymaga pobytu w szpitalu, trwa zwykle ok. 20-30 min.",
  },
  {
    title: "Czy usuwanie znamion boli?",
    desc:
      "Zabieg usuwania znamion odbywa się w znieczuleniu miejscowym przy zachowaniu pełnej świadomości pacjenta.",
  },
  {
    title: "Jak duża będzie blizna?",
    desc:
      "Wielkość powstałej po zabiegu blizny jest uzależniona od wielkości znamienia oraz przestrzegania zaleceń pozabiegowych.",
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

const LodzUsuwanieZnamionPage = ({ graph, location }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Czym jest badanie histopatologiczne?",
      text:
        "Badanie histopatologiczne polega na badaniu mikroskopowym pobranego materiału histologicznego (fragmentu tkanki). Otrzymane preparaty oglądane są przez patomorfologa, który na podstawie ocenianego obrazu oraz wykonanych testów w tym badań immunohistochemicznych stawia szczegółowe rozpoznanie.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy mogę usunąć znamię laserowo?",
      text:
        "Usunięcie laserowe jest możliwe jeśli po uprzednim badaniu dermatoskopowym w ocenie lekarza znamię nie budzi niepokoju onkologicznego. Usuwając znamiona laserem musimy pamiętać, że pozbawiamy się możliwości wykonania badania histopatologicznego.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />} location={location}>
      <SEO
        title="Centrum Usuwania Znamion i Pieprzyków w Łodzi - twojeznamiona.pl"
        description="Łódź - Usuwanie Znamion. Czy wiesz, że aby bezpiecznie usunąć znamię należy je wcześniej zbadać? Chirurgiczne usuwanie niepokojących pieprzyków. Laserowe usuwanie łagodnych zmian skórnych. Ile to kosztuje - cennik. Umów się!"
        keywords="badanie znamion, łódź, dermatoskopia"
      />
      <Hero
        h1="Łódzkie Centrum Badania i Usuwania Znamion"
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

      <PriceList className="home_price_list" data={PRICES} />
      <Covid className="home_covid">
        <ol>
          <li>Przyjdź na ustaloną godzinę wizyty bez osób towarzyszących.</li>
          <li>
            Przed wizytą w recepcji otrzymasz maseczkę jednorazowego użytku,
            która będzie Cię chronić przed i podczas wizyty u lekarza. Jeśli
            jesteś w maseczce - możesz pozostać w swojej.
          </li>
          <li>
            Skorzystaj z płynu znajdującego się w Ośrodku w celu dezynfekcji
            rąk.
          </li>
          <li>
            Pracownik Ośrodka zmierzy Ci temperaturę poprosi Cię o wypełnienie
            ankiety epidemiologicznej.
          </li>
          <li>
            Nasi lekarze wyposażeni są w specjalne fartuchy, maseczki oraz
            przyłbice.
          </li>
          <li>Zachęcamy Państwa do płatności bezgotówkowych.</li>
        </ol>
      </Covid>
      <Contact className="home_contact" where="w Łodzi" city="Lodz Chirurgia" />
      <Location
        className="home_location"
        coords={{
          lat: 51.7519962187279,
          lng: 19.45359902579603,
        }}
        googleMarker={{
          data: ["Radwańska 26", "90-541 Łódź"],
          link: "https://g.page/twoje-znamiona-lodz?share",
        }}
        additionalDetails="Ośrodek mieści się w Klinice Pawlikowski, w pobliżu Politechniki Łódzkiej i parku im. ks. J. Poniatowskiego, w dzielnicy Polesie. Parking - dostępny dla pacjentów Ośrodka."
        locationInfo={["Klinika Pawlikowski", "Radwańska 26", "90-541 Łódź"]}
        hoursInfo={["pon. - pt.: 09:00⁃22:00"]}
        transportationInfo={[
          "Pobliskie przystanki:",
          "Radwańska - Wólczanka",
          "Politechniki - Radwańska",
        ]}
      />
      <Gallery className="home_gallery" data={graph.gallery} city="lodz" />

      <Reviews className="home_reviews" data={REVIEWS} />
      <Surgery2 className="home_two_col_section_left_img" reverse={false} />
      <ImportantInfo
        className="home_important_info with_no_padding_top"
        h2="Chirurgiczne usuwanie pieprzyków"
        data={INFOS}
      />

      <Laser
        className="home_two_col_section_left_img with_no_padding_top"
        reverse={false}
      />

      <Faq className="home_faq" data={FAQS} />
      <Dermoscopy className="home_two_col_section_right_img" reverse={false} />
      <Oncology className="home_two_col_section_left_img with_no_padding_bottom" />
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
          filter: { relativePath: { regex: "/lodz1.jpg/" } }
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
          filter: { relativePath: { regex: "/lodz2.png/" } }
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
          filter: { relativePath: { regex: "/lodz3.png/" } }
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
          filter: { relativePath: { regex: "/lodz4.png/" } }
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
        Faq1Image: allFile(filter: { relativePath: { regex: "/faq3.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 144, maxHeight: 269, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq2Image: allFile(filter: { relativePath: { regex: "/faq4.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 144, maxHeight: 269, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Faq1ImageMobile: allFile(
          filter: { relativePath: { regex: "/faq3Mobile.png/" } }
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
          filter: { relativePath: { regex: "/faq4Mobile.png/" } }
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
      <LodzUsuwanieZnamionPage
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
