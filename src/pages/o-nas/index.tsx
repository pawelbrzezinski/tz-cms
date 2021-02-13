import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import "../../styles/about.scss";

import CeoImage from "../../img/ceo.png";
import doctroPlaceholderFemale from "../../img/doctor_female.svg";
import doctroPlaceholderMale from "../../img/doctor_male.svg";
import KamilaPadlewska from "../../img/people/kamila_padlewska.png";
import Kopec from "../../img/people/agnieszka_kopec.jpg";
import Kopczynska from "../../img/people/anna_kopczynska.jpeg";
import Slomiak from "../../img/people/anna_slomiak.jpg";
import Galus from "../../img/people/lukasz_galus.jpg";
import Ziolo from "../../img/people/katarzyna_kaluc_ziolo.jpg";
import Wierzbinska from "../../img/people/iwona_bielawska_wierzbinska.jpg";
import Pawlikowski from "../../img/people/bartosz_pawlikowski.png";
import Orlik from "../../img/people/Klaudia_Orlowska-Orlik.png";
import Kowalska from "../../img/people/hanna_kowalska.png";
import Urbanski from "../../img/people/lukasz_urbanski.jpg";
import Wozniak from "../../img/people/bartosz_wozniak.png";
import Pisz from "../../img/people/natalia_pisz.jpg";
import Dyczek from "../../img/people/malgorzata_dyczek.png";
import Andrzejewska from "../../img/people/sylwia_andrzejewska.jpg";


import Cta from "../../components/Cta";
import BubbleSection from "../../components/BubbleSection";
import Doctor from "./Doctor";

const DOCTORS = [
  {
    name: "Łukasz Galus",
    title: "specjalista onkologii klinicznej",
    description:
      "Absolwent Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu na Wydziale Lekarskim. Jest specjalistą w dziedzinie onkologii klinicznej. Pracuje w Szpitalu Klinicznym im. Heliodora Święcickiego Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu na Oddziale Onkologii Klinicznej i Doświadczalnej oraz w Wielkopolskim Centrum Onkologii. Członek PTOK (Polskiego Towarzystwa Onkologii Klinicznej) oraz ESMO (European Society of Medical Oncology). Autor publikacji w czasopismach naukowych. Bierze udział w wielu badaniach klinicznych (próbach eksperymentalnych) oceniających nowe leki stosowane u chorych na nowotwory złośliwe. Jego zainteresowania i główny zakres działalności klinicznej obejmuje pacjentów cierpiących z powodu nowotworów skóry w szczególności czerniaka. Strefa zainteresowań naukowych obejmuje nowe strategie leczenia systemowego w tym immunoterapię nowotworów i możliwości jej wykorzystania w praktyce leczniczej. Rolą onkologa klinicznego jest integracja wszystkich metod leczenia przeciwnowotworowego - planowanie i koordynacja leczenia chirurgicznego, radioterapii i terapii systemowej dlatego onkolog pełni kluczową rolę w procesie diagnostyczno-terapeutycznym pacjenta z chorobą nowotworową.",
    city: "Poznań",
    img: Galus
  },
  {
    name: "Anna Słomiak-Wąsik",
    title: "specjalizuje się w dermatologii i wenerologii",
    description:
      "Autorka publikacji naukowych z zakresu dermatologii i chorób wewnetrznych. Doktorant Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu, na którym ukończyła z wyróżnieniem studia na Wydziale Lekarskim. Obecnie pracuje w Szpitalu Klinicznym im. Heliodora Święcickiego w ramach specjalizacji z dermatologii i wenerologii.  Członkini Polskiego Towarzystwa Dermatologicznego, European Academy of Dermatology and Venerology, International Dermoscopy Society. W swojej pracy klinicznej i naukowej sięga po najnowsze doniesienia, uczestniczy także w licznych konferencjach, szkoleniach i kursach poświęconych nowotworom skóry.",
    city: "Poznań",
    img: Slomiak
  },
  {
    name: "Katarzyna Kałuc-Zioło",
    title: "specjalizuje się w dermatologii i wenerologii",
    description:
      "Jest absolwentką Wydziału Lekarskiego Pomorskiego Uniwersytetu Medycznego w Szczecinie. W 2015r. uzyskała tytuł lekarza medycyny. Aktualnie jest w trakcie specjalizacji z Dermatologii i Wenerologii w Klinice Chorób Skórnych i Wenerycznych w Policach. Członek Polskiego Towarzystwa Dermatologicznego. Ponadto absolwentka Podyplomowej Szkoły Medycyny Estetycznej Polskiego Towarzystwa Lekarskiego w Warszawie.  Stale poszerza swoją wiedzę biorąc udział w licznych konferencjach w zakresie dermatologii, dermoskopii oraz medycyny estetycznej. Autorka wystąpień z dermatologii na konferencjach krajowych. Szczególne zainteresowania ukierunkowane na dermoskopię. Zawsze zaangażowana w swoją pracę, szczególnie z dziećmi.",
    city: "Szczecin",
    img: Ziolo
  },
  {
    name: "Anna Kopczyńska",
    title: "specjalista onkologii klinicznej",
    description:
      "Ukończyła Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu na Wydziale Lekarskim. Obecnie pracuje w Szpitalu Klinicznym Przemienienia Pańskiego w ramach specjalizacji z onkologii klinicznej.  Jest członkiem Polskiego Towarzystwa Onkologii Klinicznej. W swojej pracy wykorzystuje najnowsze doniesienia naukowe, uczestniczy w konferencjach i szkoleniach poświęconych między innymi nowotworom skóry. Posiada doświadczenie w ocenie dermatoskopowej znamion. Uczestniczy w profilaktycznych akcjach społecznych w kierunku czerniaka skóry.",
    city: "Poznań",
    img: Kopczynska
  },
  {
    name: "Iwona Bielawska-Wierzbińska",
    title: "specjalista dermatologii i wenerologii",
    description:
      "Absolwentka Wydziału Lekarskiego Gdańskiego Uniwersytetu Medycznego. Tytuł specjalisty w dziedzinie Dermatologii i Wenerologii uzyskała w 2017r. po ukończeniu szkolenia specjalizacyjnego w Klinice Chorób Skórnych i Wenerycznych Samodzielnego Publicznego Szpitala Klinicznego nr 1 Pomorskiego Uniwersytetu Medycznego im. Prof. Tadeusza Sokołowskiego w Szczecinie. Członkini Polskiego Towarzystwa Dermatologicznego oraz Europejskiego Stowarzyszenia Dermato-onkologii.  Od początku kariery zawodowej swoje zainteresowania kierowała ku dermatoskopii. W 2013 r. odbyła staż w ramach Oddziału Nowotworów Skóry Szpitala S. Maria Nuova, Reggio Emilia we Włoszech, gdzie nabywała doświadczenia w zakresie dermatoskopii pod okiem jednych z najwybitniejszych międzynarodowych specjalistów tej dziedziny dermatologii.",
    city: "Szczecin",
    img: Wierzbinska
  },
  {
    name: "Kamila Padlewska",
    title: "specjalista onkologii klinicznej",
    description:
      "Swoje doświadczenie zdobywała na Oddziałach Dermatologii, Chirurgii Dermatologicznej i Immunologii w Scripps Clinic and Research Foundation (La Jolla), Klinice Dermatologicznej University of California, USF College of Medicine (San Diego) oraz Ain Shams Hospital (Kair). Prowadziła liczne badania naukowe w Instytucie Pasteura (Paryż).  Od 2005 roku profesor Wyższej Szkoły Zawodowej Kosmetyki i Pielęgnacji Zdrowia w Warszawie. Członek Zarządu Polskiego Towarzystwa Medycyny Estetycznej i Anti-Aging PTL. Należy do Stowarzyszenia Dermatologów Estetycznych, Polskiego Towarzystwa Dermatologicznego oraz European Society for Cosmetic and Aesthetic Dermatology (ESCAD).  Autorka licznych publikacji i książek, wykładowca na licznych kongresach krajowych i zagranicznych. Współpracuje z licznymi firmami farmaceutycznymi i kosmetycznymi. Brała udział w wielu programach telewizyjnych, między innymi w „Sekretach Chirurgii”.",
    city: "Warszawa",
    img: KamilaPadlewska
  },
  {
    name: "Bartosz Pawlikowski",
    title: "specjalista dermatologii i wenerologii",
    description:
      "Jest specjalistą dermatologii i wenerologii, wysokiej klasy ekspertem w dziedzinie laseroterapii, członkiem Amerykańskiego Towarzystwa Laseroterapii i założycielem pierwszego w Polsce Centrum Szkoleń z Laseroterapii w Praktyce kształcącego lekarzy. Ponadto, konsultantem w dziedzinie dermatologii w Instytucie Centrum Zdrowia Matki Polki w Łodzi oraz ekspertem Polskiego Towarzystwa Chorób Atopowych (PTCA). W 2004 roku ukończył Wojskową Akademię Medyczną na Wydziale Lekarskim, a w 2013 roku pod opieką Prof. Andrzeja Kaszuby uzyskał specjalizacje dermatologa i wenerologa. W 2014 roku założył Medevac, obecnie Klinika Pawlikowski, oferującą kompleksowe usługi medyczne w zakresie leczenia dzieci i dorosłych.",
    city: "Łódź",
    img: Pawlikowski
  },
  {
    name: "Hanna Kowalska",
    title: "specjalista onkologii klinicznej",
    description:
      "Absolwentka Uniwersytetu Medycznego w Łodzi. W 2017 roku rozpoczęła specjalizację z Dermatologii i Wenerologii. Doktorantka w Klinice Dermatologii i Wenerologii UM w Łodzi, gdzie pracuję również, od 2016 roku, jako nauczyciel akademicki. W pracy zawodowej zajmuję się diagnostyką i leczeniem ostrych i przewlekłych chorób skóry. Specjalizuję się także w zabiegach z zakresu dermatologii estetycznej. Jest członkiem Polskiego Towarzystwa Dermatologicznego. Swoje kwalifikacje poszerza uczestnicząc w konferencjach, szkoleniach i kursach ogólnopolskich i międzynarodowych.",
    city: "Łódź",
    img: Kowalska
  },
  {
    name: "Klaudia Orłowska-Orlik",
    title: "specjalista onkologii klinicznej",
    description:
      "Praca lekarza dermatologa jest jej wielka pasją i spełnieniem marzeń. Kierunek lekarski ukończyła w 2011 roku i po odbyciu stażu podyplomowego czynnie pracuje jako dermatolog. Podstawowym miejscem pracy jest Klinika Dermatologii i Wenerologii Uniwersytetu Medycznego w Łodzi, gdzie obowiązki związane z diagnostyką i leczeniem chorób skóry, łączy z pracą dydaktyczną i naukową. Podejmuje się leczenia zarówno niemowląt, jak i osób dorosłych. Udziela konsultacji lekarskich dotyczących wszystkich chorób skóry, włosów i paznokci, a w przypadku istnienia wskazań chętnie wykonuje zabiegi z zakresu krio- i elektrochirurgii oraz laseroterapii. Posiada wiedzę i doświadczenie w zakresie diagnostyki znamion (dermatoskopia, videodermatoskopia).",
    city: "Łódź",
    img: Orlik
  },
  {
    name: "Łukasz Urbański",
    title: "specjalista chirurgii onkologicznej i chirurgii ogólnej",
    description:
      "Absolwent Uniwersytetu Medycznego imienia Karola Marcinkowskiego w Poznaniu. Specjalizację z chirurgii ogólnej odbywał w Szpitalu Miejskim imienia Franciszka Raszei oraz w Szpitalu w Obornikach Wielkopolskich. Obecnie pracuje na Oddziale Chirurgii Onkologicznej Szpitala Klinicznego Przemienienia Pańskiego w Poznaniu.  W swojej codziennej praktyce zajmuje się chirurgią stanów chorobowych, takich jak: nowotwory skóry, w tym czerniak - z identyfikacją węzła wartownika, nowotwory gruczołu piersiowego, choroby układu chłonnego - diagnostyczne pobranie węzłów chłonnych, nowotwory tarczycy, nowotwory jelita grubego i odbytnicy oraz nowotwory tkanek miękkich.  Pomimo uzyskania dwóch specjalizacji stale podnosi swoje umiejętności zawodowe poprzez udział w konferencjach i warsztatach. Szczególnie interesuje się diagnostyką nowotworów skóry, w tym czerniaka, chirurgią onkoplastyczną i rekonstrukcyjną oraz chirurgią minimalnie inwazyjną.",
    city: "Poznań",
    img: Urbanski
  },
  {
    name: "Bartosz Woźniak",
    title: "specjalizuje się w dermatologii i wenerologii",
    description:
      "Jest absolwentem Gdańskiego Uniwersytetu Medycznego uzyskując najwyższy wynik Lekarskiego Egzaminu Końcowego wśród jego studentów. Od początku kontaktu z Dermatologią zainteresował się metodami obrazowymi w tej dziedzinie, a zwłaszcza dermatoskopią oraz trychoskopią. Stale poszerza swoją wiedzę w tej dziedzinie biorąc udział w licznych szkoleniach oraz konferencjach, a także studiując pozycje naukowe polskie i zagraniczne. Uważa videodermatoskopię za nieocenioną pomoc w diagnostyce zmian skórnych, która może uratować niejednemu pacjentowi zdrowie, a nawet życie! Jego celem zawodowym jest zapewnienie pacjentom kompleksowej opieki związanej z nowotworami skóry, począwszy od rozpoznania przez estetyczne ich usunięcie, a kończąc na długoterminowej ich obserwacji.",
    city: "Wrocław",
    img: Wozniak
  },
  {
    name: "Agnieszka Kopeć",
    title: "specjalizuje się w dermatologii i wenerologii",
    description:
      "Ukończyła studia medyczne na Wydziale Lekarskim Uniwersytetu Jagiellońskiego w Krakowie. Aktualnie pracuje w Katedrze i Klinice Dermatologii Uniwersytetu Medycznego im.Karola Marcinkowskiego w Poznaniu. Swoje umiejętności oraz doświadczenie ciągle poszerza uczestnicząc w licznych konferencjach, kursach oraz warsztatach. Poza diagnostyką znamion barwnikowych zajmuje się między innymi diagnostyką i leczeniem takich chorób, jak: trądzik, łuszczyca, łupież pstry, AZS, grzybica, wypadanie włosów, zapalenie mieszka włosowego, łojotokowe zapalenie skóry, zmiany alergiczne skóry, wypryski skóry, choroby bakteryjne skóry, choroby przenoszone drogą płciową, półpasiec, opryszczka, choroby błon śluzowych, fotodermatozy, pokrzywka, owrzodzenia.",
    city: "Poznań",
    img: Kopec
  },
  {
    name: "Małgorzata Dyczek",
    title: "specjalista dermatologii i wenerologii",
    description:
      "Absolwentka Collegium Medicum UJ. Wieloletnia praktyka lekarska w poradni przyszpitalnej, wcześniej również w oddziale dermatologicznym. W okresie 2015-2018 konsultacje w ZOL-u . Konsultuje zarówno dorosłych jak i dzieci. Ciągle dokształca się w ramach szkoleń i konferencji dermatologicznych o zróżnicowanym charakterze. Członek Polskiego Towarzystwa Dermatologicznego. Prowadzi badania kliniczne w charakterze głównego badacza jak i współbadacza.",
    city: "Kraków",
    img: Dyczek
  },
  {
    name: "Natalia Pisz",
    title: "specjalista medycyny rodzinnej",
    description:
      "Absolwentka Pomorskiej Akademii Medycznej w Szczecinie. Od 2016 roku specjalista Medycyny Rodzinnej. Regularnie wykonuje przesiewowe badania dermatoskopowe u pacjentów swojej praktyki. Obecnie szkoli się również z zakresu laseroterapii. Od 4 lat zajmuje się także diagnostyką i leczeniem schorzeń układu ruchu. Cały czas doskonali swoje umiejętności.",
    city: "Poznań",
    img: Pisz
  },
  {
    name: "Dariusz Dziedzic",
    title: "specjalista chirurgii ogólnej i chirurgii klatki piersiowej",
    description:
      "Jest absolwentem Akademii Medycznej we Wrocławiu. W roku 1996 uzyskał specjalizację z chirurgii ogólnej, a w 2000 roku specjalizację z chirurgii klatki piersiowej. W 2007 roku otrzymał certyfikat European Board of Thoracic and Cardio-Vascular Surgeons, członek Polskiego Towarzystwa Kardio-Torakochirurgów oraz European Association for Cardiothoracic Surgery. W 2018 roku uzyskał stopień doktora habilitowanego nauk medycznych za cykl prac zatytułownych: 'Nowe czynniki prognostyczne w chirurgicznym leczeniu niedrobnokomórkowego raka płuca i ich wpływ na klasyfikację TNM' nadanym przez Radę Naukową Instytutu Gruźlicy i Chorób Płuc w Warszawie.  Od wielu lat zajmuje sie tematyką diagnostyki i leczenia schorzeń nowotworowych. Współautor publikacji 'Zalecenia postepowania diagnostyczno- terapeutycznego w nowotworach złośliwych u dorosłych' pod auspicjami Polskiej Unii Onkologicznej stanowiącej obecnie w Polsce najważniejszy przewodnik postępowania terapuetycznego w onkologii.",
    city: "Warszawa",
    img: doctroPlaceholderMale
  },
  {
    name: "Magda Kutwin",
    title: "specjalista dermatologii i wenerologii",
    description:
      "Jest absolwentką Wydziału Wojskowo-Lekarskiego Uniwersytetu Medycznego w Łodzi. W 2015 r. rozpoczęła specjalizację z dermatologii i wenerologii. Od 2016 r. pracuje na stanowisku młodszego asystenta w Klinice Dermatologii i Wenerologii USK im. WAM – CSW w Łodzi, a od 2017 r. prowadzi zajęcia dydaktyczne dla studentów Wydziału Lekarskiego dla grup polsko- i anglojęzycznych. Pracę zawodową łączy z obowiązkami naukowymi w ramach dziennych studiów doktoranckich na Uniwersytecie Medycznym w Łodzi. W codziennej praktyce klinicznej zajmuje się leczeniem zarówno ostrych, jak i przewlekłych chorób skóry. W kręgu jej szczególnych zainteresowań znajduje się etiologia oraz terapia łuszczycy pospolitej. Wykonuje zabiegi z zakresu krio- i elektrochirurgii.",
    city: "Łódź",
    img: doctroPlaceholderFemale
  },
  {
    name: "Konrad Kędzia",
    title: "specjalista chirurgii ogólnej",
    description:
      "Absolwent Uniwersytetu Medycznego w Łodzi, aktualnie prowadzi doktorat oraz specjalizuje się w dziedzinie torakochirurgii w Uniwersyteckim Szpitalu Klinicznym im. Wojskowej Akademii Medycznej. Swoją pracę w zakresie medycyny estetycznej rozpoczął od szkoleń w Europejskim Centrum Lekarzy Estetycznych (ECLEST).  Wciąż podwyższa swoje kwalifikacje w zakresie laseroterapii i liposukcji biorąc udział w licznych szkoleniach i kursach w całej Polsce. Po pracy uwielbia pójść na dobry trening, a wieczorem do kina na jeden z filmów o superbohaterach. Jest ciepłym, empatycznym młodym lekarzem z dużymi ambicjami i chęcią ciągłego rozwoju.",
    city: "Łódź",
    img: doctroPlaceholderMale
  },
  {
    name: "Mateusz Koziej",
    title: "specjalizuje się w chirurgii plastycznej",
    description:
      "Przeprowadza zabiegi z zakresu usuwania zmian skórnych. Ukończył Wydział Lekarski na Uniwersytecie Jagiellońskim. Aktualnie odbywa szkolenie specjalizacyjne z zakresu chirurgii plastycznej w Klinice Chirurgii Plastycznej, Rekonstrukcyjnej i Estetycznej w Łodzi. Jako nauczyciel akademicki prowadzi zajęcia z anatomii klinicznej w Katedrze Anatomii Uniwersytetu Jagiellońskiego  Uczestnik licznych kursów, szkoleń i konferencji medycyny estetycznej. Wielokrotny stypendysta nagród Ministra Nauki i Szkolnictwa Wyższego oraz zdobywca nagrody Laur Medyczny im. Dr Wacława Mayzla przyznawany przez Wydział Nauk Medycznych Państwowej Akademii Nauk.",
    city: "Łódź",
    img: doctroPlaceholderMale
  },
  {
    name: "Beata Szymańska-Białek",
    title: "specjalista dermatologii i wenerologii",
    description:
      "Absolwentka Wydziału Lekarskiego Pomorskiej Akademi Medycznej w Szczecinie. Od 1999 r. specjalista w dziedzinie dermatologii i wenerologii, a od 2011 r. specjalista w dziedzinie medycyny paliatywnej. Członek Polskiego Towarzystwa Dermatologicznego. Uczestniczy w krajowych i zagranicznych konferencjach naukowych w zakresie dermatologii i dermoskopii. Pracuje w Poradni Dermatologii Zachodniopomorskiego Centrum Onkologii, gdzie na co dzień zajmuje się dermatoskopowym badaniem znamion i nowotworów skóry.",
    city: "Szczecin",
    img: doctroPlaceholderFemale
  },
  {
    name: "Sylwia Andrzejewska",
    title: "Doradca Pacjenta",
    description:
      "Zajmuje się telefoniczną obsługą pacjentów - zapisywaniem na wizyty, udzielaniem informacji dotyczących oferty, przyjmowaniem wszelkich zgłoszeń, udzielaniem pomocy w rozwiązywaniu problemów i informowaniem o przebiegu podjętych działań.  W wolnym czasie chętnie korzysta z różnego typu aktywności - od spacerów, jazdy rowerem, jogi, zumby, po jazdę na nartach. Znajduje również czas na rozwijanie swoich pasji, czytanie książek, dokształcanie się poprzez udział w kursach - obecnie z zakresu administracji, prowadzenia sekretariatu oraz rejestracji.",
    img: Andrzejewska
  },
];

const AboutUsPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        "bg-option": "about",
      }}
    >
      <title>O nas</title>
    </Helmet>

    <div className="about">
      <div className="heading">
        <h1>
          <span className="colored">Naszą misją jest</span> wyeliminowanie
          nowotworów skóry z życia milionów ludzi
        </h1>
      </div>
      <div className="ceo">
        <div className="content_wrapper">
          <h2>Działamy dla ludzi</h2>
          <div className="subheading">
            Wykorzystujemy prostą, szybką i sprawdzoną metodę diagnostyczną,
            jaką jest badanie dermatoskopowe.
          </div>
          <div className="text">
            Wierzymy, że razem zmniejszymy zachorowalność i umieralność z powodu
            nowotworów w Polsce. Łączymy dermatologów, onkologów, chirurgów i
            innych specjalistów we wspólnej walce z rakiem. Tak się składa, że
            jesteśmy najlepsi w badaniu znamion za pomocą cyfrowej
            dermatoskopii.
          </div>
          <div className="signature">
            <div>
              Agnieszka Czyżewska, <span className="ceo_title">CEO</span>
            </div>
            <div className="medical_title">
              Specjalista onkologii klinicznej
            </div>
          </div>
        </div>
        <div className="img_wrapper">
          <img
            src={CeoImage}
            alt="Agnieszka Czyżewska - specjalista onkologii klinicznej, CEO"
            title="Agnieszka Czyżewska - specjalista onkologii klinicznej, CEO"
          />
        </div>
      </div>
      <div className="map">
        <BubbleSection color="gray" reverse>
          <div className="container">
            <div className="cards">asd</div>
          </div>
        </BubbleSection>
      </div>
      <div className="team">
        <BubbleSection
          h2="Nasz zespół"
          h5="Lekarze z naszych ośrodków mają, w razie potrzeby, możliwość dokonania zdalnej konsultacji między sobą. Daje to niespotykaną możliwość ciągłego podnoszenia jakości świadczonych przez nas usług, które bezpośrednio przekładają się na zdrowie naszych Pacjentów."
          color="blue"
        >
          <div className="container">
            <div className="cards">
              {DOCTORS.map(doctor=> <Doctor data={doctor} />)}
              
            </div>
          </div>
        </BubbleSection>
      </div>
      <Cta className="home_cta" />
    </div>
  </Layout>
);

export default AboutUsPage;
