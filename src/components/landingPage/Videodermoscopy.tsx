import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";

import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Videodermoscopy = ({
  className = "",
  graph,
  Text,
  H5,
  reverse = true,
  ctaOffset = 0,
}) => {
  const TextComponent =
    Text ||
    (() => (
      <>
        Objawy czerniaka mogą być zupełnie nieuchwytne gołym okiem, dlatego tak
        ważne jest oglądanie znamion w powiększeniu! Dzięki zaawansowanej
        technologii lekarz ogląda obraz znamion na ekranie komputera po
        przyłożeniu do skóry pacjenta specjalistycznej kamery, umożliwiającej
        uzyskanie nawet 140 - krotnego powiększenia oraz szczegółową analizę
        struktur znajdujących się w badanym znamieniu.
      </>
    ));
  const H5Component =
    H5 ||
    (() => (
      <>
        Wideodermatoskopia - komputerowe badanie znamion to obecnie{" "}
        <strong>najlepsza metoda profilaktyki</strong> groźnych nowotworów
        skóry. Badanie pieprzyków na skórze z zastosowaniem wideodermatoskopu
        polega przede wszystkim na ocenie dynamiki zmian zachodzących w badanych
        znamionach na podstawie analizy porównawczej zdjęć wykonanych na
        przestrzeni czasu.
      </>
    ));

  return (
    <TwoColumnHomeSection
      reverse={reverse}
      className={className}
      h2="Wideodermatoskopia"
      H5={H5Component}
      Text={TextComponent}
      Buttons={() => (
        <>
          <Button>
            <AnchorLink href="#kontakt" title="Umów się" offset={ctaOffset}>
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/wideodermatoskopia-komputerowe-badanie-znamion" title="Wideodermatoskopia zmian skórnych">
              Wideodermatoskopia
            </Link>
          </Button>
        </>
      )}
      imageInfo={{
        image: graph.Image,
        alt: "Wideodermatoskopia zmian skórnych",
        title: "Wideodermatoskopia zmian skórnych",
      }}
    />
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_wideodermatoskopia.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 337, maxHeight: 300, quality: 25) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Videodermoscopy
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
