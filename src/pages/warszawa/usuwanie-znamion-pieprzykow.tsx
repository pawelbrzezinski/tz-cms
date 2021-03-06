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

import {
  GTM_WIDEO,
  GTM_CHIRURGIA,
  GTM_DERMATOLOGIA,
  GTM_E_ONKOLOGIA,
  GTM_NIECHIRURGIA,
  GTM_ONKOLOGIA,
} from "../../config/gtm_classes";

const GTM_LOCATION = "warszawa-usuwanie";

//styles
import "../../styles/home.scss";

import SEO from "../../components/SEO";
import CallCta from "../../components/CallCta";

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
    title: "Chirurgiczne Usuwanie Znamion",
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
    title: "Dermatoskopowe Badanie Znamion",
    desc:
      "Wideodermatoskopowe badanie wszystkich znamion na skórze z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć jest podstawowym narzędziem profilaktyki nowotworów skóry.",
  },
];

const PRICES = [
  {
    isOpened: true,
    categoryName: "Chirurgiczne usuwanie znamion",
    button: () => (
      <ButtonDrw
        data-doctor="warszawachirurgiczne usuwanie znamion"
        className={`${GTM_LOCATION} ${GTM_CHIRURGIA}`}
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
        price: "250",
        label: "konsultacja chirurgiczna",
      },
      {
        price: "390",
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
        className={`${GTM_LOCATION} ${GTM_NIECHIRURGIA}`}
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
    categoryName: "Badanie znamion - wideodermatoskopia",
    button: () => (
      <ButtonDrw
        data-doctor="warszawa badanie znamion(wideodermatoskopia)"
        className={`${GTM_LOCATION} ${GTM_WIDEO}`}
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
    categoryName: "Konsultacje Onkologiczne - czerniak",
    button: () => (
      <ButtonDrw
        data-doctor="e-konsultacjaonkologiczna"
        className={`${GTM_LOCATION} ${GTM_E_ONKOLOGIA}`}
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

const WarszawaUsuwanieZnamionPage = ({ graph, location }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Usuwać czy “nie ruszać”?",
      text:
        "Stwierdzenie, że “znamion lepiej nie ruszać” to niebezpieczny przesąd, który może mieć poważne konsekwencje zdrowotne. Pamiętajmy, że wcześnie wykryty czerniak może być całkowicie wyleczony. Każdy atypowy pieprzyk powinien być niezwłocznie usunięty chirurgicznie.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy mogę usunąć znamię laserem?",
      text:
        "Usunięcie laserowe jest możliwe jeśli po uprzednim badaniu dermatoskopowym w ocenie lekarza znamię nie budzi niepokoju onkologicznego. Usuwając znamiona laserem musimy pamiętać, że pozbawiamy się możliwości wykonania badania histopatologicznego.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />} location={location}>
      <SEO
        title="Centrum Usuwania Znamion i Pieprzyków w Warszawie- twojeznamiona.pl"
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
      <Contact
        className="home_contact"
        where="w Warszawie"
        city="Warszawa Chirurgia"
      />
      <Location
        className="home_location"
        coords={{
          lat: 52.234637679876535,
          lng: 20.959497315423995,
        }}
        googleMarker={{
          data: ["ul. Sokołowska 9/U-02", "01-142 Warszawa"],
          link: "https://g.page/twoje-znamiona-warszawa?share",
        }}
        additionalDetails="Centrum Badania Znamion znajduje się w tym samym pasażu co Auchan - Gabinety Oricea. Przed Auchan są dostępne miejsca parkingowe."
        locationInfo={[
          "Gabinety Oricea",
          "ul. Sokołowska 9/U-02",
          "Dzielnica - Wola",
          "01-142 Warszawa",
        ]}
        hoursInfo={["pon. - pt.: 10:00⁃19:00,", "czwartek: 8:00 - 19:00 "]}
        transportationInfo={[
          "Przystanek tramwajowy:",
          "Sokołowska",
          "Stacja metra:",
          "Młynów",
        ]}
      />
      <Gallery className="home_gallery" data={graph.gallery} city="warszawa" imageTitlePostfix="w Warszawie"  />

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
