import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const MelanomaTreatment = ({
  className = "",
  graph,
  Text,
  H5,
  reverse = false,
  ctaOffset = 0,
}) => {
  const TextComponent =
    Text ||
    (() => (
      <>
        W ostatnich latach obserwuje się ogromny postęp w leczeniu czerniaka.
        Wraz ze znaczącym rozwojem nowoczesnych terapii zmniejsza się liczba
        wskazań do stosowania chemioterapii czy radioterapii. Obecnie pacjenci
        mogą skorzystać z leczenia immunologicznego oraz terapii ukierunkowanej,
        które przynoszą coraz lepsze efekty i charakteryzują się mniejszymi
        działaniami niepożądanymi w porównaniu z klasycznym leczeniem
        systemowym.
      </>
    ));
  const H5Component =
    H5 ||
    (() => (
      <>
        W leczeniu czerniaka stosuje się różne formy terapii. Podstawowe
        znaczenie ma nadal leczenie chirurgiczne, w postaci przede wszystkim
        wycięcia ogniska pierwotnego oraz biopsji węzłów wartowniczych.
        Zastosowanie chirurgii ma także znaczenie w chorobie zaawansowanej.
      </>
    ));
  return (
    <TwoColumnHomeSection
      reverse={reverse}
      className={className}
      intro="Jak leczyć?"
      h2="Leczenie czerniaka złośliwego"
      H5={H5Component}
      Text={TextComponent}
      Buttons={() => (
        <>
          <Button>
            <Link to="/czerniak#id10" title="Leczenie czerniaka">
              Leczenie czerniaka
            </Link>
          </Button>
          <Button type="secondary">
            <Link
              to="/blog/jak-wyglada-czerniak-zdjecia"
              title="Czerniak zdjęcia"
            >
              Czerniak zdjęcia
            </Link>
          </Button>
        </>
      )}
      imageInfo={{
        image: graph.Image,
        alt: "Dermatoskopowe badanie znamion",
        title: "Dermatoskopowe badanie znamion",
      }}
    />
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_czerniak_treatment.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 337, maxHeight: 300, quality: 55) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <MelanomaTreatment
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
