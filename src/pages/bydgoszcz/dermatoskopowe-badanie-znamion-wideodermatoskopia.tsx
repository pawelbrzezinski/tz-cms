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
    author: "Marta B.",
    city: "Bydgoszcz",
    review:
      "Badanie znamion Pani doktor wykonała dokładnie - obejrzała każdy pieprzyk na mojej skórze. Wyznaczyła termin kontroli, bo dwa znamiona wymagają obserwacji. Milo i profesjonalnie. Z czystym sumieniem polecam.",
  },
  {
    author: "Anna M.",
    city: "Bydgoszcz",
    review:
      "Dziękuje za tak szybką pomoc. Dzięki badaniu wyszło, że mam kilka znamion, które muszą być pod kontrolą i jedno muszę usunąć.. Na całe szczęście nie mam zmian nowotworowych, ale mam nauczkę do końca życia, że trzeba od razu udać się do lekarza, a nie bagatelizować swoje znamiona.",
  },
  {
    author: "Marek K.",
    city: "Bydgoszcz",
    review:
      "Miło, sprawnie i profesjonalnie. Krótki termin oczekiwania, bo udało mi się umówić za kilka dni. Jestem zadowolony, badanie wykonane skrupulatnie. Dziękuję Pani doktor. ",
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
    categoryName: "Nieinwazyjne usuwanie znamion",
    items: [
      {
        price: "180",
        label: "Krioterapia 1 zmiany skórnej",
      },
      {
        price: "50",
        label: "Krioterapia każdej kolejnej zmiany w trakcie jednej wizyty",
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
      "Badanie wszystkich znamion - 30min. Badanie kontrolne znamion wyznaczonych przez lekarza - 20 min.",
  },
  {
    title: "Jakim urządzeniem badamy?",
    desc:
      "Pacjent badany jest za pomocą nowoczesnego sprzętu - wideodermatoskopu Fotofinder Portable Medicam 800 HD",
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

const BydgoszczBadanieZnamionPage = ({ graph }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Dlaczego lekarz nie zapisał obrazu wszystkich moich znamion?",
      text:
        "Podczas badania dermatoskopowego lekarz ogląda szczegółowo wszystkie znamiona, jednak nie ma potrzeby zapisywania obrazu każdej zmiany skórnej. Niepotrzebnie wydłużyłoby to czas badania oraz zmniejszyłoby jego efektywność, odwracając uwagę lekarza od medycznej części procedury. Dlatego też lekarz archiwizuje jedynie obraz znamion zakwalifikowanych do kontroli bądź resekcji chirurgicznej. Należy przy tym pamiętać, że nie ma limitu ilości znamion, które poddane zostaną archiwizacji podczas badania.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czym różni się badanie dermatoskopowe od wideodermatoskopowego?",
      text:
        "Badanie wideodermatoskopowe to badanie dermatoskopowe z możliwością odtworzenia obrazu dermatoskopowego na ekranie komputera. W przypadku wideodermatoskopii, dzięki cyfryzacji możliwe jest przechowywanie i ponowne odtwarzanie zapisanego obrazu znamion celem ich analizy porównawczej.",
    },
  ];

  return (
    <Layout constactCtaComponent={<CtaUmowSie />}>
      <SEO
        title="Centrum Badania Znamion - Dermatoskopia - twojeznamiona.pl"
        description="Bydgoszcz - kompleksowa diagnostyka znamion. Badamy wszystkie pieprzyki na ciele. Wideodermatoskopia z mapowaniem. Dlaczego dermatoskopia jest najlepszą metodą diagnostyki zmian skórnych? Ile to kosztuje - cennik. Dermatologia."
        keywords="badanie znamion, bydgoszcz, dermatoskopia"
      />
      <Hero
        h1="Bydgoskie Centrum Dermatoskopowego Badania Znamion"
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
            Pacjenci są proszeni o przybycie do Centrum Medycznego bez osób
            towarzyszących, chyba, że ich wiek lub stan zdrowia wymaga opieki
            drugiej osoby, wtedy może im towarzyszyć tylko jedna osoba.
          </li>
          <li>
            Po wejściu, we własnej maseczce ochronnej, należy zdezynfekować
            ręce.
          </li>

          <li>
            Pracownik rejestracji monitoruje temperaturę ciała oraz weryfikuje
            aktualność danych zawartych w ankiecie i zbiera podpis pacjenta lub
            opiekuna prawnego odnośnie zgodności danych ze stanem faktycznym.
          </li>
          <li>
            Po dokonaniu ww. czynności rejestracja wskazuje miejsce oczekiwania
            na wizytę, tak aby zachować odstęp co najmniej 1,5 m od innych
            oczekujących.
          </li>
          <li>
            Płaszcze/kurtki należy zostawić na wieszakach w poczekalni Centrum,
            a nie w gabinecie lekarskim.
          </li>
          <li>
            Informujemy pacjentów, że nie witamy się poprzez podawanie dłoni.
          </li>
          <li>
            Płatność za wizytę najlepiej uiścić kartą płatniczą, a w
            ostateczności gotówką.
          </li>
          <li>Opuszczając Centrum, należy zdezynfekować ręce.</li>
          <li>
            Personel został zobowiązany do dezynfekcji klamek, włączników
            światła oraz lady w rejestracji 1x na godzinę. Ponadto pracownicy są
            zobowiązani do wietrzenia gabinetów lekarskich co 5/6 pacjent lub co
            2 h włącznie z dezynfekcją biurka, krzeseł, klamek i innych
            elementów wyposażenia gabinetu lekarskiego.
          </li>
        </ol>
      </Covid>
      <Contact className="home_contact" where="w Bydgoszczy" />
      <Location
        className="home_location"
        coords={{
          lat: 53.10186452801589,
          lng: 18.032980262800063,
        }}
        googleMarker={{
          title: "ul. Glinki 81/4,5 U",
          data: "85-861 Bydgoszcz",
          link: "https://g.page/twoje-znamiona-bydgoszcz?share",
        }}
        additionalDetails="Centrum Badania Znamion znajduje się w Centrum Medycznym Wysoccy, na parterze w budynku mieszkalnym na osiedlu Wyżyny. Wejście do ośrodka znajduje się od strony parkingu.  W pobliżu znajduje się Stadion im. Czesława Kobusa."
        locationInfo={{
          title: "ul. Glinki 81/4,5 U",
          data: "85-861 Bydgoszcz",
        }}
        hoursInfo={["pon. - pt.: 09:00⁃18:00"]}
        transportationInfo={{
          data: "Osiedle Wyżyny. Parking bezpłatny przed Centrum",
        }}
      />
      {/* <Gallery className="home_gallery" data={graph.gallery} /> */}

      <Reviews
        className="home_reviews home_reviews--add-padding-top"
        data={REVIEWS}
      />

      <ProcedureDetails
        className="home_two_col_section_right_img"
        h2="Przebieg badania wideodermatoskopowego w Bydgoszczy"
        Text={() => (
          <>
            Po wykonaniu badania wideodermatoskopowego lekarz omawia z Tobą
            dalsze zalecenia diagnostyczne. <strong>Wynik badania</strong> wraz
            z raportem zawierającym wideodermatoskopowe zdjęcia zmapowanych
            znamion otrzymujesz na płycie. Jeśli otrzymałeś zalecenie usunięcia
            zmiany skórnej zostaniesz skierowany do chirurga celem jej
            usunięcia.
          </>
        )}
      />
      <ImportantInfo className="home_important_info" data={INFOS} />
      <Dermoscopy
        className="home_two_col_section_right_img with_no_padding_top"
        reverse={false}
        H5={() => (
          <>
            Dermatoskopia pozwala na szczegółową ocenę struktury znamion, a
            wprowadzenie tej metody badania do rutynowej oceny zmian skórnych
            poprawia wykrywalność czerniaka o około 30 %. Regularna
            dermatoskopia to klucz do tego, aby wykryć czerniaka lub nowotwór
            skóry w odpowiednim momencie.
          </>
        )}
        Text={() => (
          <>
            Jest to oglądanie skóry za pomocą narzędzia zwanego dermatoskopem,
            który jak szkło powiększające umożliwia bardzo dokładną obserwację i
            analizę struktur barwnikowych oglądanych znamion, pieprzyków,
            przebarwień skóry czy plam soczewicowatych. Dermatoskopia pozwala
            odróżnić lekarzowi zmiany łagodne od niebezpiecznych. Polega na
            przykładaniu dermatoskopu do skóry pacjenta w miejscach występowania
            znamion, oglądaniu ich i ocenie.Jeśli z Twoim znamieniem dzieje się
            coś niepokojącego, na badanie dermatoskopowe zgłoś się jak
            najszybciej.
          </>
        )}
      />
      <Videodermoscopy
        className="home_two_col_section_left_img"
        H5={() => (
          <>
            Wideoermatoskopowe badanie znamion to przede wszystkim analiza
            porównawcza zmian zachodzących w znamionach na przestrzeni czasu,
            dlatego badanie wideodermatoskopowe (komputerowa ocena znamion) to
            obecnie najlepsza i preferowana metoda profilaktycznej oceny znamion
            skórnych.
          </>
        )}
        Text={() => (
          <>
            Wideodermatoskopia wykorzystuje nowoczesne technologie do oceny
            znamion. Lekarz w trakcie badania używa specjalistycznej kamery,
            którą przykłada do miejsc, w których zlokalizowane są znamiona
            pacjenta i uzyskując 140-krotne powiększenie, ma możliwość oglądania
            pieprzyków na ekranie komputera. Pozwala to na dokładniejszą ocenę
            zmian skórnych, a także, co bardzo ważne, na archiwizację zdjęć
            atypowych znamion i ich obserwację w czasie. Lekarz może wrócić do
            zapisanych obrazów za kilka miesięcy i skontrolować, jakie zmiany
            zaszły w znamionach. Badanie znamion to w końcu przede wszystkim
            ocena dynamiki zmian zachodzących w znamionach. Stąd równie ważne co
            pierwsze badanie, są wizyta kontrolne.
          </>
        )}
      />
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
      <BydgoszczBadanieZnamionPage
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
