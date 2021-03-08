import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Hero from "../../components/landingPage/Hero";
import Layout from "../../components/Layout";

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

const CtaUmowSie = () => {
  return (
    <Link to="/kontakt" title="Umów się">
      Umów się
    </Link>
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

const HomePage = ({ graph }) => {
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
    <Layout>
      <Hero
        h1="Ogólnopolskie Centrum Dermatoskopowego Badania Znamion"
        oneLiner="Kompleksowo zajmujemy się diagnostyką znamion aby wyeliminować
          nowotwory z życia milionów ludzi!"
        ctaPrimary={<CtaUmowSie />}
        ctaSecondary={null}
      />

      <Locations />
      <Offer className="home_offer" />
      <WhyUs className="home_why_us" />
      <Reviews className="home_reviews" data={REVIEWS} />
      <Melanoma className="home_melanoma" />
      <Faq className="home_faq" data={FAQS} />
      <Dermoscopy className="home_dermoscopy" />
      <Videodermoscopy className="home_videodermoscopy" />
      <RiskGroup className="home_risk_group" />
      <Abcde className="home_abcde" />
      <Surgery className="home_surgery" />
      <Cta className="home_cta" />
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
