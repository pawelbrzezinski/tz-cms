import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Hero from "../../components/landingPage/Hero";
import Layout from "../../components/Layout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Dermoscopy from "../../components/landingPage/Dermoscopy";
import Videodermoscopy from "../../components/landingPage/Videodermoscopy";
import Surgery from "../../components/landingPage/Surgery";
import Melanoma from "../../components/landingPage/Melanoma";
import Abcde from "../../components/landingPage/Abcde";
import Reviews from "../../components/landingPage/Reviews";
import Offer from "../../components/landingPage/Offer";
import Faq from "../../components/landingPage/Faq";
import RiskGroup from "../../components/landingPage/RiskGroup";
import WhyUs from "../../components/landingPage/WhyUs";

import Locations from "../../components/home/Locations";
import Cta from "../../components/Cta";
import { Link } from "gatsby";

import "../../styles/home.scss";
import CallCta from "../../components/CallCta"
import Oncology from "../../components/landingPage/Oncology";

const CtaUmowSie = () => {
  return (
    <AnchorLink offset={120} href="#kontakt" title="Umów się">
      Umów się
    </AnchorLink>
  );
};


const REVIEWS = [
  {
    author: "Katarzyna K.",
    city: "Poznań",
    review:
      "Skrupulatne i dokładne badanie wideodermatoskopowe. Polecam wszystkim, którzy szukają pomocy i ludzkich specjalistów.",
  },
  {
    author: "Anna B.",
    city: "Warszawa",
    review:
      "Nikt nie ma tyle cierpliwości, by badać moje 213 znamion kilka razy w roku. Nikt nie ma tyle taktu, bym czuła się przy tym komfortowo. Dziękuję!",
  },
  {
    author: "Dominik M.",
    city: "Wrocław",
    review:
      "Otrzymałem wynik badania dermatoskopowego, jak również zrozumiały komentarz do wyniku histopatologicznego usuniętej zmiany.",
  },
];



const OFFERS = [
  {
    type: "badanie",
    title: "Badanie znamion",
    link: "/dermatoskopia-badanie-znamion",
    desc: "Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć.",
  },
  {
    type: "chirurgiczne",
    title: "Usuwanie znamion",
    link: "/chirurgiczne-usuwanie-znamion",
    desc: "Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem Co2 lub metodą krioterapii.",
  },
  {
    type: "onkologia",
    title: "Konsultacje onkologiczne",
    // link: "/dermatoskopia-badanie-znamion",
    desc: "Konsultacja onkologiczna w zakresie nowotworów skóry, w tym czerniaka złośliwego. Pacjent otrzymuje zalecenia po usunięciu zmiany nowotworowej, dotyczące badań kontrolnych, leczenia uzupełniającego, a także leczenia zaawansowanego czerniaka.",
  }
]


const HomePage = ({ graph, location }) => {
  const FAQS = [
    {
      image: graph.faqs[1].image,
      imageMobile: graph.faqs[1].imageMobile,
      title: "Jakie są przeciwwskazania do wykonania badania?",
      text:
        "Dermatoskopia jest całkowicie nieinwazyjną metodą diagnostyki, nie ma żadnych przeciwwskazań do jej wykonania. Badaniu mogą poddać się kobiety w ciąży, karmiące piersią, osoby obciążone poważnymi chorobami przewlekłymi czy też dzieci. Dermatoskopia polega na wykonywaniu zdjęć znamion w powiększeniu stąd może zostać wykonana u każdego.",
    },
    {
      image: graph.faqs[2].image,
      imageMobile: graph.faqs[2].imageMobile,
      title: "Czy czerniak boli?",
      text:
        "Dolegliwości bólowe nie są charakterystycznym objawem dla czerniaka, natomiast ich obecność bądź brak nie przesądza w żadnym wypadku diagnozy. Czerniak może rozwijać się po cichu, bez bólu i zupełnie niezauważalnie i z roku na rok zajmować coraz większą powierzchnię Twojej skóry. Najczęstszy czerniak szerzący się powierzchownie (SSMM - superficial spreading melanoma malignum), może wzrastać niezauważalnie nawet kilka lat!",
    },
  ];

  return (
    <Layout location={location}>
      <Hero
        h1="Ogólnopolskie Centrum Dermatoskopowego Badania Znamion"
        oneLiner="Upewnij się, że czerniak nie ukrywa się w jednym z niepozornych pieprzyków na Twojej skórze."
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={null}
      />

      <Locations />
      <Offer className="home_offer" data={OFFERS} ctaPrimary={<CtaUmowSie />}/>
      <WhyUs className="home_why_us" />
      <Reviews className="home_reviews" data={REVIEWS} />
      <Melanoma className="home_melanoma" withCta/>
      <Faq className="home_faq" data={FAQS} />
      <Dermoscopy className="home_two_col_section_right_img" reverse={false} ctaOffset={120} />
      <Videodermoscopy className="home_two_col_section_left_img" ctaOffset={120} />
      <RiskGroup className="home_risk_group" ctaOffset={120}/>
      <Surgery className="home_surgery" reverse={false} ctaOffset={120}/>
      <Abcde className="home_abcde with_no_padding_top" />
      <Oncology className="home_two_col_section_left_img with_no_padding_top with_no_padding_bottom" ctaOffset={120}/>
      <Cta className="home_cta" constactCtaComponent={<CtaUmowSie />}/>
      <CallCta />
    </Layout>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
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
      <HomePage
        graph={{
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
