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
    author: "Ines K.",
    city: "Łódź",
    review:
      "Polecam. Wizyta i badania przeprowadził bardzo konkretny i profesjonalny lekarz.",
  },
];

const PRICES = [
  {
    isOpened: true,
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
      "Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem lub metodą krioterapii.",
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

const LodzBadanieZnamionPage = ({ graph, location }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Czy mam zwiększone ryzyko raka ?",
      text:
        "Jeśli posiadasz jasną karnację, piegi lub liczne znamiona na skórze, posiadasz znamiona których średnica przekracza 5 mm, bądź doznałeś poparzeń słonecznych, w Twojej rodzinie występowały nowotwory skóry, znajdujesz się w grupie podwyższonego ryzyka rozwoju nowotworu skóry. Osoby znajdujące się w grupie podwyższonego ryzyka, powinny poddać się badaniu dwa razy w roku oraz każdorazowo w przypadku zmiany budzącej niepokój. Wskazaniem do dermatoskopii są również naczyniaki, zmiany cylindryczne, rogowacenie łojotokowe naskórka, zmiany w postaci brodawek i świerzb, zmiany o charakterze dermatofibroma (histiocytoma).",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy wszystkie znamiona powinno się badać?",
      text:
        "Tak, ważne jest, żeby nie pominąć żadnej części ciała w trakcie badania znamion. Stąd też nazwa badanie znamion całego ciała lub badanie znamion z mapowaniem ciała. Często zdarza się, że znajdujemy niepokojące zmiany w miejscach, których sam Pacjent nie mógł łatwo zobaczyć.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />} location={location}>
      <SEO
        title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
        description="Łódź - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, łódź, dermatoskopia"
      />
      <Hero
        h1="Łódzkie Centrum Dermatoskopowego Badania Znamion"
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
      <Contact className="home_contact" where="w Łodzi" city="Lodz" />
      <Location
        className="home_location"
        coords={{
          lat: 51.7519962187279,
          lng: 19.45359902579603,
        }}
        googleMarker={{
          title: "Klinika Pawlikowski",
          data: "Radwańska 26, 90-541 Łódź",
          link: "https://g.page/twoje-znamiona-lodz?share",
        }}
        additionalDetails="Ośrodek mieści się w Klinice Pawlikowski, w pobliżu Politechniki Łódzkiej i parku im. ks. J. Poniatowskiego, w dzielnicy Polesie. Parking - dostępny dla pacjentów Ośrodka."
        locationInfo={{
          title: "Klinika Pawlikowski",
          data: "Radwańska 26, 90-541 Łódź",
        }}
        hoursInfo={["pon. - pt.: 09:00⁃22:00"]}
        transportationInfo={{
          data:
            "Pobliskie przystanki: Radwańska - Wólczanka, Politechniki - Radwańska.",
        }}
      />
      <Gallery className="home_gallery" data={graph.gallery} city="lodz" />

      <Reviews className="home_reviews" data={REVIEWS} />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Łodzi"
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
      <LodzBadanieZnamionPage
        graph={{
          gallery: [
            data.ImageGallery3.nodes[0],
            data.ImageGallery1.nodes[0],
            data.ImageGallery2.nodes[0],
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
