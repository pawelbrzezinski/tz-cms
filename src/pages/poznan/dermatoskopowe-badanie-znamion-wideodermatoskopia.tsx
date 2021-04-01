import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { graphql, Link, StaticQuery } from "gatsby";

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
import Button from "../../components/Button";
import ButtonDrw from "../../components/landingPage/ButtonDrw";

const REVIEWS = [
  {
    author: "Jerzy W.",
    city: "Poznań",
    review:
      "Kompetentni i wykwalifikowani pracownicy. Jedyne takie miejsce w Poznaniu, gdzie bez problemu można umówić się na badanie wideodermatoskopowe - próbowałem na Ogrodową, ale nie przyjmują nowych pacjentów. Przemiła Pani odbierająca telefon - wszystko mi wytłumaczyła. Dzięki.",
  },
  {
    author: "Sandra K.",
    city: "Poznan",
    review:
      "Już dwa razy korzystałam z wizyty w tym miejscu. Za każdym razem bardzo profesjonalnie. Badanie znamion w jednej cenie pomimo tego, że mam mnóstwo znamion i badanie zajęło godzinę! Pani doktor wymroziła mi część zmian. Polecam.",
  },
  {
    author: "Emilia M.",
    city: "Poznań",
    review:
      "W życiu nie spotkałam się podczas wizyty u lekarza, aby ktoś był tak zainteresowany pacjentem jak doktor Słomiak. Podczas konsultacji na spokojnie przejrzała moje wyniki badań, obejrzała moje znamię i dopiero wtedy zajęła się jego badaniem. Znamię kwalifikowało się do usunięcia, więc to zrobiłam.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    button: () => (
      <ButtonDrw
        data-doctor="poznań badanie znamion(wideodermatoskopia)"
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
        data-doctor="chirurgiczne usuwanieznamion"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTcyOTd9.p83JsKIacAYtS6eFyuZ3NUOl2y8a6YnZmPRrQW58XMU"
      />
    ),
    items: [
      {
        price: "200",
        label: "konsultacja chirurgiczna",
        sub: "zabiegi chirurgiczne są wykonywane u pacjentów pełnoletnich",
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
        data-doctor="poznań zabiegi nieinwazyjne(krioterapia)"
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
    categoryName: "Konsultacje Onkologiczne - czerniak",
    items: [
      {
        price: "250",
        label: "konsultacja onkologiczna - nowotwory skóry",
        sub:
          "ponowna konsultacja onkologiczna (w przeciągu 6 miesięcy): 180 zł",
        button: () => (
          <ButtonDrw
            data-doctor="poznańkonsultacja onkologiczna"
            data-speciality=""
            data-visitkind=""
            data-evisit="false"
            data-appname="drw"
            data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
          />
        ),
      },

      {
        price: "200",
        label: "e-wizyta - wideokonferencja",
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
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Konsultacje dermatologiczne",
    button: () => (
      <ButtonDrw
        data-doctor="poznańkonsultacja dermatologiczna"
        data-speciality=""
        data-visitkind=""
        data-evisit="false"
        data-appname="drw"
        data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6ODk1N30.REbRVMRE5mlb3RB3K_2uc2p9D2gb2XQr9tZoslDkq8I"
      />
    ),
    items: [
      {
        price: "180",
        label: "konsultacja dermatologiczna",
        sub: "inne schorzenia skóry: trądzik, łuszczyca, grzybica itp.",
      },
      {
        price: "350",
        label: "biopsja zmiany skórnej z badaniem histopatologicznym",
      },
      {
        price: "+40",
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

const PoznanBadanieZnamionPage = ({ graph, location }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title:
        "Dotychczas dopłacałem do każdego badanego znamienia. Jak to wygląda tutaj?",
      text:
        "Lekarz obejrzy każde znamię na Twojej skórze, a koszt badania nie jest uzależniony od liczby znamion. Istotą badania dermatoskopowego jest oglądanie całego ciała i archiwizacja obrazu wszystkich atypowych zmian, które należy w przyszłości poddać badaniu kontrolnemu. Oglądanie jedynie pojedynczych, niepokojących zmian na skórze nie jest pełnowartościowym badaniem profilaktycznym i nie zwalnia z konieczności wykonania pełnej diagnostyki.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Jak przygotować się do badania znamion?",
      text:
        "Panie powinny dokonać bardzo dokładnego demakijażu twarzy, gdyż nawet delikatny podkład jest doskonale widoczny w dużym powiększeniu i zaburza obraz badanych zmian skórnych. Panowie natomiast powinni skrócić owłosienie lub ogolić się w miejscach, gdzie posiadają znamiona. Pacjent w trakcie badania zostanie poproszony przez lekarza do rozebrania się do bielizny celem dokładnego obejrzenia wszystkich znamion na ciele. ",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />} location={location}>
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
      <Contact className="home_contact" where="w Poznaniu" city="Poznan" />
      <Location
        className="home_location"
        coords={{
          lat: 52.4139945,
          lng: 16.9005161,
        }}
        googleMarker={{
          data: ["Dąbrowskiego 77A", "60-101 Poznań"],
          link: "https://g.page/twoje-znamiona-poznan?share",
        }}
        additionalDetails="Ośrodek znajduje się na parterze w budynku Nobel Tower - wejście niezależne. Parking płatny na miejscu."
        locationInfo={[
          "Gabinety Moti-med",
          "Dąbrowskiego 77A",
          "60-101 Poznań",
        ]}
        hoursInfo={["pon. - pt.: 10:00 - 20:00"]}
        transportationInfo={["Przystanek tramwajowy:", "Polna, Rynek Jeżycki"]}
      />
      <Gallery className="home_gallery" data={graph.gallery} city="poznan" />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Poznaniu"
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
      <Oncology
        className="home_two_col_section_left_img with_no_padding_top with_no_padding_bottom"
        Buttons={() => (
          <>
            <Button>
              <AnchorLink href="#kontakt" title="Umów się" offset={0}>
                Umów się
              </AnchorLink>
            </Button>
            <Button type="secondary">
              <Link
                to="/poznan/konsultacje-onkologiczne-leczenie-czerniaka"
                title="Konsultacje onkologiczne. Diagnostyka i leczenie czerniaka."
              >
                Dowiedz się więcej
              </Link>
            </Button>
          </>
        )}
      />
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
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_1.png/" }
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
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_2.png/" }
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
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_3.png/" }
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
        ImageGallery4: allFile(
          filter: {
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_4.png/" }
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
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_5.png/" }
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
        ImageGallery6: allFile(
          filter: {
            relativePath: { regex: "/Centrum-Badania-Znamion-Poznan_6.png/" }
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
            data.ImageGallery6.nodes[0],
            data.ImageGallery5.nodes[0],
            data.ImageGallery2.nodes[0],
            data.ImageGallery1.nodes[0],
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
