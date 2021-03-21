import { Link } from "gatsby";
import React from "react";
import DoctorList from "../about/DoctorList";
import Alert from "../Alert";
import BubbleSection from "../BubbleSection";
import Button from "../Button";

const DOCTORS = [
  {
    name: "Łukasz Galus",
    title: "specjalista onkologii klinicznej",
    description:
      "Absolwent Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu na Wydziale Lekarskim. Jest specjalistą w dziedzinie onkologii klinicznej. Pracuje w Szpitalu Klinicznym im. Heliodora Święcickiego Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu na Oddziale Onkologii Klinicznej i Doświadczalnej oraz w Wielkopolskim Centrum Onkologii. Członek PTOK (Polskiego Towarzystwa Onkologii Klinicznej) oraz ESMO (European Society of Medical Oncology). Autor publikacji w czasopismach naukowych. Bierze udział w wielu badaniach klinicznych (próbach eksperymentalnych) oceniających nowe leki stosowane u chorych na nowotwory złośliwe. Jego zainteresowania i główny zakres działalności klinicznej obejmuje pacjentów cierpiących z powodu nowotworów skóry w szczególności czerniaka. Strefa zainteresowań naukowych obejmuje nowe strategie leczenia systemowego w tym immunoterapię nowotworów i możliwości jej wykorzystania w praktyce leczniczej. Rolą onkologa klinicznego jest integracja wszystkich metod leczenia przeciwnowotworowego - planowanie i koordynacja leczenia chirurgicznego, radioterapii i terapii systemowej dlatego onkolog pełni kluczową rolę w procesie diagnostyczno-terapeutycznym pacjenta z chorobą nowotworową.",
    city: "Poznań",
    img: "lukasz_galus.jpg",
  },
  {
    name: "Anna Kopczyńska",
    title: "specjalista onkologii klinicznej",
    description:
      "Ukończyła Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu na Wydziale Lekarskim. Obecnie pracuje w Szpitalu Klinicznym Przemienienia Pańskiego w ramach specjalizacji z onkologii klinicznej.  Jest członkiem Polskiego Towarzystwa Onkologii Klinicznej. W swojej pracy wykorzystuje najnowsze doniesienia naukowe, uczestniczy w konferencjach i szkoleniach poświęconych między innymi nowotworom skóry. Posiada doświadczenie w ocenie dermatoskopowej znamion. Uczestniczy w profilaktycznych akcjach społecznych w kierunku czerniaka skóry.",
    city: "Poznań",
    img: "anna_kopczynska.jpeg",
  },
  {
    name: "Łukasz Urbański",
    title: "specjalista chirurgii onkologicznej i chirurgii ogólnej",
    description:
      "Absolwent Uniwersytetu Medycznego imienia Karola Marcinkowskiego w Poznaniu. Specjalizację z chirurgii ogólnej odbywał w Szpitalu Miejskim imienia Franciszka Raszei oraz w Szpitalu w Obornikach Wielkopolskich. Obecnie pracuje na Oddziale Chirurgii Onkologicznej Szpitala Klinicznego Przemienienia Pańskiego w Poznaniu.  W swojej codziennej praktyce zajmuje się chirurgią stanów chorobowych, takich jak: nowotwory skóry, w tym czerniak - z identyfikacją węzła wartownika, nowotwory gruczołu piersiowego, choroby układu chłonnego - diagnostyczne pobranie węzłów chłonnych, nowotwory tarczycy, nowotwory jelita grubego i odbytnicy oraz nowotwory tkanek miękkich.  Pomimo uzyskania dwóch specjalizacji stale podnosi swoje umiejętności zawodowe poprzez udział w konferencjach i warsztatach. Szczególnie interesuje się diagnostyką nowotworów skóry, w tym czerniaka, chirurgią onkoplastyczną i rekonstrukcyjną oraz chirurgią minimalnie inwazyjną.",
    city: "Poznań",
    img: "lukasz_urbanski.jpg",
  },
];

const AlertButton = () => (
  <Button>
    <Link to="/o-nas" title="Poznaj naszych lekarzy">
      Poznaj wszystkich
    </Link>
  </Button>
);

const Doctors = ({ className = "", graph }) => (
  <div className={`${className} gallery`}>
    <BubbleSection
      introText=""
      h2="Nasz zespół"
      color="blue"
      reverse
    >
      <div className="container">
        <div className="cards">
          <DoctorList data={DOCTORS} graph={graph} />
        </div>
        <Alert button={AlertButton}>
          Nasz zespół tworzą doświadczeni lekarze, którzy wspólnie, z pasją
          działają na rzecz <strong>zmniejszenia umieralności</strong> z powodu
          nowotworów skóry w Polsce.
        </Alert>
      </div>
    </BubbleSection>
  </div>
);

export default Doctors;
