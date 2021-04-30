import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Dermoscopy = ({
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
        Klasyczny dermatoskop, który stosują często dermatolodzy w trakcie
        badania znamion wygląda jak lupka - szkło powiększające z wbudowanych
        źródłem światła. Takie dermatoskopy powiększają obraz ok. 10-20 krotnie
        umożliwiając profilaktyczne badanie niepokojących znamion. W trakcie
        dermatoskopii wszystkich pieprzyków na skórze lekarz przykłada
        urządzenie do skóry pacjenta i ogląda obraz powiększonej zmiany. Na
        podstawie uzyskanego obrazu oraz swojego doświadczenia dermatolog
        ocenia, które zmiany mogą okazać się niebezpieczne i kieruje pacjenta na
        ich usunięcie chirurgiczne.
      </>
    ));
  const H5Component =
    H5 ||
    (() => (
      <>
        Dermatoskopia pozwala na szczegółową ocenę struktury znamion, a
        wprowadzenie tej metody badania do rutynowej oceny zmian skórnych
        <strong> poprawia wykrywalność czerniaka</strong> o około 30%
        Dermatoskopowe badanie znamion polega na oglądaniu wszystkich znamion na
        skórze, w dużym powiększeniu, przy zastosowaniu urządzenia zwanego
        dermatoskopem.
      </>
    ));
  return (
    <TwoColumnHomeSection
      reverse={reverse}
      className={className}
      h2="Dermatoskopia"
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
            <Link to="/dermatoskopia-badanie-znamion" title="Dermatoskopia znamion i pieprzyków">Dermatoskopia</Link>
          </Button>
        </>
      )}
      imageInfo={{
        image: graph.Image,
        alt: "Dermatoskopia znamion i pieprzyków",
        title: "Dermatoskopia znamion i pieprzyków",
      }}
    />
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_dermoscopy.png/" } }
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
      <Dermoscopy
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
