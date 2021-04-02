import React, { useState } from "react";
import { Helmet } from "react-helmet";

import logo from "../img/logo.svg";
import call from "../img/call.svg";
import StarsImage from "../img/stars.svg";
import email from "../img/mail_icon.svg";
import fb from "../img/fb_icon.svg";
import instagram from "../img/instagram_icon.svg";
import ChevronIcon from "../img/chevron-up.svg";

import "../styles/footer.scss";
import { Link } from "gatsby";

const RATING = 722;

const Footer = () => {
  const [isOpenedLinks, setIsOpenedLinks] = useState(false);
  const [isOpenedCities, setIsOpenedCities] = useState(false);

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo_secion">
          <div className="footer_logo_wrapper">
            <img src={logo} alt="Twoje Znamiona" />
          </div>
          <div className="footer_social_wrapper">
            <a
              href="https://www.facebook.com/Twoje-Znamiona-102496158493976"
              target="_blank"
              title="Twoje Znamiona - Facebook"
            >
              <img src={fb} alt="Twoje Znamiona - Facebook" />
            </a>
            <a
              href="https://www.instagram.com/twojeznamiona/"
              target="_blank"
              title="Twoje Znamiona - Instragram"
            >
              <img src={instagram} alt="Twoje Znamiona - Instragram" />
            </a>
          </div>
        </div>
        <div className="footer_contact_secion">
          <p className="hide_mobile">Masz pytania?</p>
          <div className="footer_contact_phone_wrapper">
            <p className="hide_mobile">Zadzwoń</p>
            <a
              href="tel:+48781445685"
              title="+48781445685"
              className="footer_contact_phone_number"
            >
              <img src={call} alt="Twoje Znamiona - Zadzwoń" />
              <span>+48 781 445 685</span>
            </a>
          </div>
          <div
            className="footer_contact_email_wrapper"
            itemscope
            itemtype="http://schema.org/Organization"
          >
            <p className="hide_mobile">Napisz do nas</p>
            <a
              href="mailto:zbadamy@twojeznamiona.pl"
              title="zbadamy@twojeznamiona.pl"
              className="footer_contact_email_address"
            >
              <img src={email} alt="Twoje Znamiona - Napisz do nas" />
              <span itemprop="email">zbadamy@twojeznamiona.pl</span>
            </a>
          </div>
          <div className="footer_contact_reviews_wrapper">
            <p>Oceń nas</p>
            <a
              href="https://forms.gle/WPbJ14hx5cr2MMQp6"
              target="_blank"
              title="Oceń nas"
            >
              <div className="footer_contact_reviews_container">
                <div className="footer_contact_stars_wrapper">
                  <img src={StarsImage} alt="5 gwiazdek" />
                </div>
                <div
                  className="footer_contact_rating_wrapper"
                  itemprop="aggregateRating"
                  itemscope
                  itemtype="http://schema.org/AggregateRating"
                >
                  <meta itemprop="ratingValue" content="5.0" />
                  <meta itemprop="bestRating" content="5" />
                  <meta itemprop="worstRating" content="1" />
                  <span itemprop="ratingValue">5.0</span> (
                  <span itemprop="ratingCount">{RATING}</span> opinii)
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="footer_links_section">
          <div
            className="heading"
            onClick={() => setIsOpenedLinks(!isOpenedLinks)}
          >
            <p>Linki do stron</p>
            <img
              className={isOpenedLinks ? "" : "flip"}
              src={ChevronIcon}
              alt={isOpenedLinks ? "Zwiń" : "Rozwiń"}
              title={isOpenedLinks ? "Zwiń" : "Rozwiń"}
            />
          </div>

          <div
            className={`footer_links_wrapper ${
              !isOpenedLinks ? "hide_mobile" : ""
            }`}
          >
            <div>
              <Link to="/dermatoskopia-badanie-znamion" className="footer_link">
                Badanie Znamion
              </Link>
              <Link
                to="/wideodermatoskopia-komputerowe-badanie-znamion"
                className="footer_link"
              >
                Wideodermatoskopia
              </Link>
              <Link to="/chirurgiczne-usuwanie-znamion" className="footer_link">
                Chirurgiczne usuwanie
              </Link>
              <Link to="/laserowe-usuwanie-znamion" className="footer_link">
                Laserowe usuwanie
              </Link>
              <Link to="/czerniak" className="footer_link">
                Czerniak złośliwy
              </Link>
              <Link
                to="/czerniak/rodzaje-czerniaka-zdjecia"
                className="footer_link"
              >
                Rodzaje czerniaka
              </Link>
              <Link
                to="/czerniak/objawy-czerniaka"
                className="footer_link"
              >
                Objawy czerniaka
              </Link>
              <Link
                to="/czerniak/rodzaje-czerniaka/czerniak-na-dloniach-i-podeszwach-stop"
                className="footer_link"
              >
                Czerniak paznokci
              </Link>
            </div>
            <div>
              <Link to="/cennik" className="footer_link">
                Cennik
              </Link>
              <Link to="/kontakt" className="footer_link">
                Kontakt
              </Link>
              <Link to="/o-nas" className="footer_link">
                O nas
              </Link>
              <Link to="/blog" className="footer_link">
                Blog
              </Link>
              <Link to="/praca" className="footer_link">
                Kariera
              </Link>
              <Link to="/polityka" className="footer_link">
                Dane osobowe
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_cities_secion">
          <div
            className="heading"
            onClick={() => setIsOpenedCities(!isOpenedCities)}
          >
            <p>Nasze ośrodki</p>
            <img
              className={isOpenedCities ? "" : "flip"}
              src={ChevronIcon}
              alt={isOpenedCities ? "Zwiń" : "Rozwiń"}
              title={isOpenedCities ? "Zwiń" : "Rozwiń"}
            />
          </div>
          <div
            className={`footer_links_wrapper ${
              !isOpenedCities ? "hide_mobile" : ""
            }`}
          >
            <div>
              <Link
                to={`/poznan/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Poznań - badanie znamion
              </Link>
              <Link
                to={`/poznan/usuwanie-znamion-pieprzykow`}
                className="footer_link"
              >
                Poznań - usuwanie znamion
              </Link>
              <Link
                to={`/poznan/konsultacje-onkologiczne-leczenie-czerniaka`}
                className="footer_link"
              >
                Poznań - konsultacje onkologiczne
              </Link>
              <Link
                to={`/warszawa/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Warszawa - badanie znamion
              </Link>
              <Link
                to={`/warszawa/usuwanie-znamion-pieprzykow`}
                className="footer_link"
              >
                Warszawa - usuwanie znamion
              </Link>
              <Link
                to={`/lodz/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Łódź - badanie znamion
              </Link>
              <Link
                to={`/lodz/usuwanie-znamion-pieprzykow`}
                className="footer_link"
              >
                Łódź - usuwanie znamion
              </Link>
            </div>
            <div>
              <Link
                to={`/wroclaw/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Wrocław
              </Link>
              <Link
                to={`/krakow/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Kraków
              </Link>
              <Link
                to={`/szczecin/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Szczecin
              </Link>
              <Link
                to={`/bydgoszcz/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Bydgoszcz
              </Link>
              <Link
                to={`/ustka/dermatoskopowe-badanie-znamion-wideodermatoskopia`}
                className="footer_link"
              >
                Ustka
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_wrapper">
        twojeznamiona.pl &copy; 2015-{new Date().getFullYear()}. Wszelkie prawa
        zastrzeżone.
      </div>
      <script
        className="structured-data-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "HowTo",
            "name": "Na czym polega badanie znamion",
            "description": "Oto kilka prostych zasad ochrony przed rakiem. Pamiętaj, że im wcześniej wykryty czerniak, tym większa szansa na całkowite wyleczenie! ",
            "image": {
              "@type": "ImageObject",
              "url": "https://twojeznamiona.pl/img/rich/logo.png",
              "height": "1000",
              "width": "1000"
            },
            "totalTime": "PT10M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "motywacja"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "lusterko"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "url": "https://twojeznamiona.pl/dermatoskopia-badanie-znamion",
                "name": "Obserwuj swoje znamiona",
                "text": "Jeśli zauważysz, że Twoje znamię niepokojąco rośnie, zmienia swój kształt, kolor, bądź pojawiło się nowe, inne od pozostałych - nie zwlekaj!",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/1.png",
                  "height": "406",
                  "width": "305"
                }
              },
              {
                "@type": "HowToStep",
                "name": "Skontaktuj się z nami",
                "text": "Niezwłocznie wyszukaj najbliższy ośrodek na naszej stronie internetowej i pozwól nam zbadać Twoje znamiona.",
                "url": "https://twojeznamiona.pl/kontakt",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/2.jpg",
                  "height": "406",
                  "width": "305"
                }
              },
              {
                "@type": "HowToStep",
                "name": "Odwiedź nasze Centrum Badania Znamion",
                "text": "Umów się na wizytę w jednym z naszych ośrodków stacjonarnych. Za pomocą profesjonalnego wideodermatoskopu obejrzymy wszystkie niepokojące Cię zmiany skórne.",
                "url": "https://twojeznamiona.pl/kontakt",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/badanie_znamion.jpg",
                  "height": "406",
                  "width": "305"
                }
              },
              {
                "@type": "HowToStep",
                "name": "Mapowanie podejrzanych znamion",
                "text": "Przeprowadzimy z Tobą wywiad, dokonamy oględzin Twojego ciała oraz sfotografujemy podejrzane znamiona.",
                "url": "https://twojeznamiona.pl/wideodermatoskopia-komputerowe-badanie-znamion",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/badanie_znamion.jpg",
                  "height": "406",
                  "width": "305"
                }
              },
              {
                "@type": "HowToStep",
                "name": "Ocena lekarska",
                "text": "Lekarz dokona skrupulatnej oceny zmian skórnych.",
                "url": "https://twojeznamiona.pl/dermatoskopia-badanie-znamion#id16",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/badanie_znamion.jpg",
                  "height": "406",
                  "width": "305"
                }
              },
              {
                "@type": "HowToStep",
                "name": "Dalsze zalecenia",
                "text": "Po badaniu otrzymasz od lekarza zalecenia odnośmnie dalszczego postępowania",
                "url": "https://twojeznamiona.pl/wideodermatoskopia-komputerowe-badanie-znamion#id1",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://twojeznamiona.pl/img/rich/badanie_znamion.jpg",
                  "height": "406",
                  "width": "305"
                }
              }
            ]
          }`,
        }}
      ></script>
      <script
        className="structured-data-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            `{
            "@context": "http://schema.org",
            "@type": "Organization",
            "@id": "https://twojeznamiona.pl",
            "image": [
              "https://twojeznamiona.pl/img/rich/logo.png",
              "https://twojeznamiona.pl/img/rich/1.png",
              "https://twojeznamiona.pl/img/rich/2.jpg",
              "https://twojeznamiona.pl/img/rich/badanie_znamion.jpg",
              "https://twojeznamiona.pl/img/rich/dermatoskopia.png",
              "https://twojeznamiona.pl/img/rich/5.png"
            ],
            "sameAs": [
              "https://www.facebook.com/Twoje-Znamiona-102496158493976",
              "https://www.instagram.com/twojeznamiona"
            ],
            "telephone": "+48 781 445 685",
            "email": "zbadamy@twojeznamiona.pl",
            "name": "Centrum Badania Znamion Twoje Znamiona",
            "logo": "https://twojeznamiona.pl/img/rich/logo.png",
            "description": "Badanie i usuwanie znamion, konsultacje onkologiczne i dermatologiczne",
            "url": "https://twojeznamiona.pl/",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+48 781 445 685",
              "contactType": "Rejestracja",
              "email": "zbadamy@twojeznamiona.pl",
              "areaServed": "Polska"
            },
    
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "` +
            RATING +
            `"
            },
            "review": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Paweł Brzeziński"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }
          }`,
        }}
      ></script>
      <script
        className="structured-data-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Centrum Badania Znamion Bydgoszcz",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "ratingCount": 691
            }
        }`,
        }}
      ></script>
      <script
        className="structured-data-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `[
        {
          "@context": "http://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Dlaczego gdzie indziej to samo badanie jest dwa razy droższe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Badania wideodermatoskopowe wykonywane są w zdecydowanej większości przez prywatne ośrodki, które w myśl zasad wolnego rynku same ustalają cenę badania. Należy jednak być czujnym, gdyż zdarza się, że wyższa cena motywowana jest pozornie zwiększoną jakością poprzez np. posiadanie urządzenia wyposażonego w automatyczne wykrywanie znamion, czy też w oprogramowanie z automatyczną oceną zmian skórnych. Są to pomocne narzędzia dla wykonującego badanie jednak nie ma dowodów na to, że przekładają się bezpośrednio na jakość badania."
              }
            },
            {
              "@type": "Question",
              "name": "Jak przygotować się do badania znamion?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Panie powinny dokonać bardzo dokładnego demakijażu twarzy, gdyż nawet delikatny podkład jest doskonale widoczny w dużym powiększeniu i zaburza obraz badanych zmian skórnych. Panowie natomiast powinni skrócić owłosienie lub ogolić się w miejscach gdzie posiadają znamiona."
              }
            },
            {
              "@type": "Question",
              "name": "Czy badanie dermatoskopowe boli?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nie. Badanie dermatoskopowe to nieinwazyjna metoda oceny znamion polegająca na oglądaniu i fotografowaniu zmian skórnych. Jest to badanie całkowicie bezbolesne."
              }
            },
            {
              "@type": "Question",

              "name": "Czy dermatoskopia jest badaniem, na podstawie którego można w 100% rozpoznać czerniaka złośliwego?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nie. Żadna z obecnie stosowanych nieinwazyjnych metod nie daje takiej pewności. Każdą podejrzaną zmianę skórną należy usunąć chirurgicznie i poddać ocenie histopatologicznej. Tylko taki sposób postępowania daje jednoznaczną odpowiedź na pytanie, czy dana zmiana jest nowotworem złośliwym."
              }
            },
            {
              "@type": "Question",

              "name": "Czym różni się badanie dermatoskopowe od wideodermatoskopowego?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Badanie wideodermatoskopowe to badanie dermatoskopowe z możliwością odtworzenia obrazu dermatoskopowego na ekranie komputera. W przypadku wideodermatoskopii, dzięki cyfryzacji możliwe jest przechowywanie i ponowne odtwarzanie zapisanego obrazu znamion celem ich analizy porównawczej."
              }
            },
            {
              "@type": "Question",

              "name": "Jakie są przeciwwskazania do wykonania badania ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dermatoskopia jest całkowicie nieinwazyjną metodą diagnostyki, nie ma żadnych przeciwwskazań do jej wykonania. Badaniu mogą poddać się kobiety w ciąży, karmiące piersią czy osoby obciążone poważnymi chorobami przewlekłymi."
              }
            },
            {
              "@type": "Question",

              "name": "Jak często powinno się badać znamiona za pomocą dermatoskopu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Każdy z nas powinien na bieżąco kontrolować swoje znamiona, obserwując czy nie zmieniają się w czasie, a ponadto raz do roku poddać badaniu dermatoskopowemu wszystkie obecne na ciele znamiona. Osoby z podwyższonym ryzykiem zachorowania na raka skóry, powinny badać się częściej, zgodnie z zaleceniem lekarskim."
              }
            },
            {
              "@type": "Question",

              "name": "Lekarz poinformował, aby usunąć znamię - co dalej?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Znamię zakwalifikowane do usunięcia wycinamy chirurgicznie, aby poddać je badaniu histopatologicznemu. Tylko ocena przez patologa pozwoli postawić jednoznaczne rozpoznanie. Resekcja chirurgiczna jest działaniem profilaktycznym - nie jest diagnozą czerniaka. Nie ma wobec tego powodu do zbędnego niepokoju."
              }
            },
            {
              "@type": "Question",

              "name": "Czy mogę usunąć znamię laserem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usunięcie laserowe jest możliwe jeśli po uprzednim badaniu dermatoskopowym w ocenie lekarza znamię nie budzi niepokoju onkologicznego. Usuwając znamiona laserem musimy pamiętać, że pozbawiamy się możliwości wykonania badania histopatologicznego."
              }
            },
            {
              "@type": "Question",
              "name": "Czy w każdym przypadku konieczne jest wykonanie badania histopatologicznego usuniętego chirurgicznie znamienia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. W każdym przypadku chirurgicznej resekcji usunięte znamię powinno zostać poddane ocenie histopatologicznej. Takie badanie pozwala na postawienie ostatecznego rozpoznania i na jego podstawie określany jest sposób dalszego postępowania oraz zalecenia dotyczące kolejnych badań kontrolnych."
              }
            },
            {
              "@type": "Question",

              "name": "Gdzie mogę usunąć znamię?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Znamię można usunąć bezpłatnie w poradni chirurgicznej w ramach umowy z NFZ lub odpłatnie w naszym ośrodku stacjonarnym."
              }
            },
            {
              "@type": "Question",

              "name": "Na czym polega chirurgiczne usunięcie znamienia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chirurgiczne usunięcie znamienia jest to krótki zabieg, poprzedzony znieczuleniem miejscowym okolicy zabiegowej. Znamiona barwnikowe powinny być zawsze usuwane w całości z tzw. marginesem - czyli bezpiecznym obszarem wokół znamienia, w którym chirurg nie spodziewa się znaleźć komórek barwnikowych. Wycięty materiał jest przekazywany do badania histopatologicznego. Bardzo ważne jest, aby pamiętać o odebraniu wyników takiego badania!"
              }
            },
            {
              "@type": "Question",

              "name": "Czy zabieg usunięcia znamienia jest bolesny?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nie. Zabiegi wykonywane są w znieczuleniu miejscowym."
              }
            },
            {
              "@type": "Question",

              "name": "Czym jest badanie histopatologiczne?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Badanie histopatologiczne polega na badaniu mikroskopowym pobranego materiału histologicznego (fragmentu tkanki). Otrzymane preparaty oglądane są przez patomorfologa, który na podstawie ocenianego obrazu oraz wykonanych testów w tym badań immunohistochemicznych stawia szczegółowe rozpoznanie."
              }
            },
            {
              "@type": "Question",

              "name": "Czy po zabiegu chirurgicznego usunięcia znamienia mogę wrócić do codziennej aktywności?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. Zazwyczaj już następnego dnia po zabiegu można wrócić do codziennej aktywności, uważając oczywiście żeby nie podrażnić miejsca po usuniętym znamieniu."
              }
            },
            {
              "@type": "Question",

              "name": "Czy posiadanie znamion jest powodem do niepokoju?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nie. Zdecydowana większość populacji ma na skórze znamiona barwnikowe. Sama obecność znamion na skórze nie jest powodem do niepokoju."
              }
            },
            {
              "@type": "Question",

              "name": "Moje znamię okazało się być czerniakiem - co mam teraz zrobić?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O zaleceniach odnośnie dalszego postępowania pacjent dowiaduje się od lekarza, który wydaje mu wynik badania histopatologicznego - zwykle jest nim chirurg, który usuwał dane znamię. Zazwyczaj pacjent zostaje skierowany do ośrodka onkologicznego, gdyż dalsze postępowanie uzależnione jest od stopnia zaawansowania usuniętej zmiany. Z naszej strony oferujemy fachowe wsparcie i pozostajemy w stałym kontakcie z naszymi Pacjentami."
              }
            }
          ]
        }
      ]`,
        }}
      ></script>
    </footer>
  );
};
export default Footer;
