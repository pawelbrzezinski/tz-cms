import React, { useState } from "react";
import BubbleSection from "../BubbleSection";
import "../../styles/abcde_tabs.scss";
import YoutubePlayer from "../YoutubePlayer";

const TABS = {
  A: {
    label: "A - Asymmetry",
    h2: "Czy znamię jest asymetryczne?",
    sub:
      "Podziel znamię na dwie połówki  i oceń względem dwóch prostopadłych linii czy te dwie części do siebie pasują? Czy znamię jest symetryczne pod względem koloru i struktury?",
    txt:
      "Większość typowych znamion ma symetryczną budowę. Asymetrią mogą charakteryzować się znamiona dysplastyczne lub czerniaki we wczesnej fazie rozwoju. Każde niesymetryczny pieprzyk powinien zostać zweryfikowany w badaniu dermatoskopowym.",
  },
  B: {
    label: "B - Border",
    h2: "Nierówne brzegi znamienia",
    sub:
      "Nierówne, poszarpane brzegi, rozmyta lub zatarta granica pomiędzy znamieniem a zdrową skórą oraz  'rozlewania się' barwnika na otaczającą skórę powinno budzić niepokój.",
    txt:
      "Typowe znamiona są zwykle ostro odgraniczone od podłoża, mają równe brzegi i przyjmują zazwyczaj owalny lub okrągły kształt. Każde znamię, które ma nierówne, postrzępione granice powinno zostać zweryfikowane w badaniu dermatoskopowym.",
  },
  C: {
    label: "C - Color",
    h2: "Niejednolity kolor znamienia",
    sub:
      "Występowanie w znamieniu więcej niż jednego koloru, nierówne rozłożenie barwnika, występowanie skupisk ciemniejszego koloru oraz obszary odbarwienia mogą być sygnałami alarmowymi.",
    txt:
      "Typowe znamiona charakteryzują się jednolitością barwy, zwykle są jednokolorowe, typowo w kolorze brązowym. Każde wielobarwne znamię, o nieregularnych  granicach przejścia jednego koloru w drugi, powinno zostać zbadane dermatoskopowo.",
  },
  D: {
    label: "D - Diameter",
    h2: "Duża średnica znamienia",
    sub:
      "Każde znamię o średnicy powyżej 6 mm powinno być pod stałą obserwacją. Bardzo ważnym elementem badanie jest ocena dynamimi wzrostu znamion.",
    txt:
      "Jeśli znamię wzrasta w szybkim tempie lub ma powyżej 6 mm i dodatkowo niepokojące cechy powinno zostać skonsultowane z lekarzem. Osoby z zespołem znamion dysplastycznych  charakteryzującycm się obecności wielu często dużych, atypowych znamion znajdują się zwykle pod stałą kontrolą dermatoskopową.",
  },
  E: {
    label: "E - Evolving",
    h2: "Nowa lub zmieniająca się zmiana",
    sub:
      "Czerniaki w większości pojawiają się “de novo” - jako nowe znamiona, zwykle odmienne od pozostałych, często charakteryzujące  się szybszym wzrostem. Na uwagę zasługują  także zmiany skórne, które zmieniają się w czasie.",
    txt:
      "Podstawą obserwacji znamion jest  analiza porównawcza zmian w nich zachodzących a najlepszą metodą, która umożliwia ocenę struktur znamion na przestrzeni czasu jest wideodermatoskopia. Jeśli Twoje znamię jest niesymetryczne, ma poszarpane, nierówne brzegi, niejednolity kolor, jest większe niż 6 mm lub dynamicznie zmienia się w czasie należy jak najszybciej umówić się na badanie dermatoskopowe.",
  },
};

// const Iframe = ({ className = "" }) => (
//   <iframe
//     frameBorder="0"
//     width="560"
//     height="315"
//     allowFullScreen="1"
//     className={`lazyload ${className}`}
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     data-src="https://www.youtube.com/embed/ljtZ99i5QKY?mute=0&amp;start=76&amp;modestbranding=1&amp;controls=0&amp;autoplay=1&amp;disablekb=1&amp;showinfo=0&amp;rel=0&amp;fs=0&amp;loop=1&amp;iv_load_policy=3&amp;theme=light&amp;color=white&amp;vq=hd1080&amp;enablejsapi=1"
//   ></iframe>
// );

const Abcde = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState("A");

  const getLetterWraperClassName = (key) => {
    return activeTab === key
      ? `tabs_letter_wrapper tabs_letter_wrapper--active`
      : `tabs_letter_wrapper`;
  };

  return (
    <div className={className}>
      <BubbleSection
        introText="Zasada ABCDE"
        h2="Jakie są objawy czerniaka?"
        h5="Większość czerniaków w Polsce rozpoznawanych jest za późno. Powiększenie lub zmniejszenie pieprzyka, przebarwienia na skórze, nagłe powstanie jednego lub wielu znamion, zmiana koloru znamienia, swędzenie, łuszczenie się czy krwawienie może świadczyć o tym, że mamy do czynienia z czerniakiem."
      >
        <div className="container">
          <div className="top_iframe">
            <YoutubePlayer
              url="https://www.youtube.com/embed/H-RQqWIOXcI"
              start="63"
              end="127"
              label="Główne cechy czerniaka - A B C D E"
            />
          </div>
          <div className="abcde_tabs">
            <div className="tabs_body">
              <div
                className={getLetterWraperClassName("A")}
                onClick={() => setActiveTab("A")}
              >
                <div className="tabs_letter">A</div>
                <div className="tabs_letter_label">Niesymetryczne</div>
              </div>
              <div
                className={getLetterWraperClassName("B")}
                onClick={() => setActiveTab("B")}
              >
                <div className="tabs_letter">B</div>
                <div className="tabs_letter_label">Nierówne brzegi</div>
              </div>
              <div
                className={getLetterWraperClassName("C")}
                onClick={() => setActiveTab("C")}
              >
                <div className="tabs_letter">C</div>
                <div className="tabs_letter_label">Niejednolity kolor</div>
              </div>
              <div
                className={getLetterWraperClassName("D")}
                onClick={() => setActiveTab("D")}
              >
                <div className="tabs_letter">D</div>
                <div className="tabs_letter_label">Większe niż 6 mm</div>
              </div>
              <div
                className={getLetterWraperClassName("E")}
                onClick={() => setActiveTab("E")}
              >
                <div className="tabs_letter">E</div>
                <div className="tabs_letter_label">Zmienia się w czasie</div>
              </div>
            </div>
          </div>
          <div className="abcde_tabs_content">
            <div className="abcde_tabs_content_desc">
              <div className="smallbody">{TABS[activeTab].label}</div>
              <h2>{TABS[activeTab].h2}</h2>
              <div className="abcde_tabs_content_desc_sub">
                {TABS[activeTab].sub}
              </div>
              <div className="abcde_tabs_content_desc_txt">
                {TABS[activeTab].txt}
              </div>
            </div>
            <div className="abcde_tabs_content_video">
              <div className="right_iframe">
                <YoutubePlayer
                  url="https://www.youtube.com/watch?v=H-RQqWIOXcI"
                  start="63"
                  end="127"
                  label="Główne cechy czerniaka - A B C D E"
                />
              </div>
            </div>
          </div>
        </div>
      </BubbleSection>
    </div>
  );
};

export default Abcde;
