import React, { useState } from "react";
import BubbleSection from "../BubbleSection";
import "../../styles/abcde_tabs.scss";

const TABS = {
  A: {
    h2: "Niesymetryczne znamiona",
    sub:
      "Objawy czerniaka mogą być jednak zupełnie nieuchwytne gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu dermatoskopem.",
    txt:
      "Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak lupka- szkło powiększające z wbudowanych źródłem światła. Takie dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz umożliwiają profilaktyczne badanie niepokojących znamion.",
  },
  B: {
    h2: "Nierówne brzegi",
    sub:
      "Objawy czerniaka mogą być jednak zupełnie nieuchwytne gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu dermatoskopem.",
    txt:
      "Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak lupka- szkło powiększające z wbudowanych źródłem światła. Takie dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz umożliwiają profilaktyczne badanie niepokojących znamion.",
  },
  C: {
    h2: "Nierówne brzegi",
    sub:
      "Objawy czerniaka mogą być jednak zupełnie nieuchwytne gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu dermatoskopem.",
    txt:
      "Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak lupka- szkło powiększające z wbudowanych źródłem światła. Takie dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz umożliwiają profilaktyczne badanie niepokojących znamion.",
  },
  D: {
    h2: "Nierówne brzegi",
    sub:
      "Objawy czerniaka mogą być jednak zupełnie nieuchwytne gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu dermatoskopem.",
    txt:
      "Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak lupka- szkło powiększające z wbudowanych źródłem światła. Takie dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz umożliwiają profilaktyczne badanie niepokojących znamion.",
  },
  E: {
    h2: "Nierówne brzegi",
    sub:
      "Objawy czerniaka mogą być jednak zupełnie nieuchwytne gołym okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu dermatoskopem.",
    txt:
      "Klasyczny dermatoskop, który stosują często dermatolodzy wygląda jak lupka- szkło powiększające z wbudowanych źródłem światła. Takie dermatoskopy powiększają obraz zwykle ok. 10-20 krotnie oraz umożliwiają profilaktyczne badanie niepokojących znamion.",
  },
};

const Iframe = ({ className = "" }) => (
  <iframe
    frameBorder="0"
    width="560" height="315"
    allowFullScreen="1"
    className={`lazyload ${className}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    data-src="https://www.youtube.com/embed/ljtZ99i5QKY?mute=0&amp;start=76&amp;modestbranding=1&amp;controls=0&amp;autoplay=1&amp;disablekb=1&amp;showinfo=0&amp;rel=0&amp;fs=0&amp;loop=1&amp;iv_load_policy=3&amp;theme=light&amp;color=white&amp;vq=hd1080&amp;enablejsapi=1"
  ></iframe>
);

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
        h5="Większość czerniaków w Polsce rozpoznawanych jest zbyt późno, co znacznie utrudnia późniejsze leczenie tego niebezpiecznego nowotworu."
      >
        <div className="container">
            <Iframe className="top_iframe" />
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
              <div className="smallbody">Zasada {activeTab}</div>
              <h2>{TABS[activeTab].h2}</h2>
              <div className="abcde_tabs_content_desc_sub">
                {TABS[activeTab].sub}
              </div>
              <div className="abcde_tabs_content_desc_txt">
                {TABS[activeTab].txt}
              </div>
            </div>
            <div className="abcde_tabs_content_video">
              <Iframe className="right_iframe" />
              <div className="abcde_tabs_content_video_source">
                Źródło: https://www.youtube.com/embed/ljtZ99i5QKY
              </div>
            </div>
          </div>
        </div>
      </BubbleSection>
    </div>
  );
};

export default Abcde;
