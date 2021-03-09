import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";

import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Videodermoscopy = ({ className = "", graph, reverse = true }) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    h2="Wideodermatoskopia"
    H5={() => (
      <>
        Wideodermatoskopia - komputerowe badanie znamion to obecnie{" "}
        <strong>najlepsza metoda profilaktyki</strong> groźnych nowotworów
        skóry. Badanie pieprzyków na skórze z zastosowaniem wideodermatoskopu
        polega przede wszystkim na ocenie dynamiki zmian zachodzących w badanych
        znamionach na podstawie analizy porównawczej zdjęć wykonanych na
        przestrzeni czasu. Objawy czerniaka mogą być zupełnie nieuchwytne gołym
        okiem, dlatego tak ważne jest oglądanie znamion w powiększeniu!
      </>
    )}
    Text={() => (
      <>
        Dzięki zaawansowanej technologii lekarz ogląda obraz znamion na ekranie
        komputera po przyłożeniu do skóry pacjenta specjalistycznej kamery,
        umożliwiającej uzyskanie nawet 140 - krotnego powiększenia oraz
        szczegółową analizę struktur znajdujących się w badanym znamieniu.
        Dzięki systemowi archiwizacji danych, lekarz mapuje - zapisuje w
        systemie zdjęcia zmian skórnych, które mają atypowy wygląd i powinny
        zostać skontrolowane za kilka miesięcy.
      </>
    )}
    Buttons={() => (
      <>
        <Button>
          <AnchorLink href="#kontakt" title="Umów się">
            Umów się
          </AnchorLink>
        </Button>
        <Button type="secondary">
          <Link to="/wideodermatoskopia-komputerowe-badanie-znamion" title="">
            Wideodermatoskopia
          </Link>
        </Button>
      </>
    )}
    imageInfo={{
      image: graph.Image,
      alt: "Wideodermatoskopowe badanie znamion",
      title: "Wideodermatoskopowe badanie znamion",
    }}
  />
);

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
