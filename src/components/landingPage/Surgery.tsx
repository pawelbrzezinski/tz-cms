import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";

import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Surgery = ({ className = "", ctaOffset = 0, graph, reverse = true }) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    intro="Kiedy wyciąć pieprzyk?"
    h2="Usuwanie Znamion"
    H5={() => (
      <>
        Zawsze przed podjęciem decyzji o tym czy znamię powinno zostać usunięte
        chirurgicznie czy też może być bezpiecznie usunięte laserowo należy
        wykonać badanie dermatoskopowe.
      </>
    )}
    Text={() => (
      <>
        Na podstawie wykonanego badanie znamion lekarz kwalifikuje pacjenta do
        odpowiedniej metody. Chirurgicznie należy usunąc każde atypowe znamię na
        skórze. Metodą nieinwazyjną można usunąć jedynie zmiany łagodne. Należy
        jednak pamiętać, że przy usuwaniu znamion metodą laserową, krioterapii
        lub elektrokoagulacji nie ma możliwości wykonania badania
        histopatologicznego, a jedynie na jego podstawie można postawić
        ostateczną diagnozę.
      </>
    )}
    Buttons={() => (
      <>
        <Button>
          <AnchorLink href="#kontakt" title="Umów się" offset={ctaOffset}>
            Umów się
          </AnchorLink>
        </Button>
        <Button type="secondary">
          <Link to="/chirurgiczne-usuwanie-znamion" title="Usuwanie znamion">
            Usuwanie znamion
          </Link>
        </Button>
      </>
    )}
    imageInfo={{
      image: graph.Image,
      alt: "Chirurgiczne usuwanie znamion",
      title: "Chirurgiczne usuwanie znamion",
    }}
  />
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_surgery.png/" } }
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
      <Surgery
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
