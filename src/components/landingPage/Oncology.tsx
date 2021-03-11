import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";

import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Oncology = ({ className = "", ctaOffset = 0, graph, reverse = true }) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    h2="Konsultacje Onkologiczne"
    intro="Diagnostyka czerniaka"
    H5={() => (
      <>
        Po rozpoznaniu czerniaka pacjent wymaga dalszej diagnostyki w postaci
        m.in. docięcia brzegów zmiany z odpowiednim marginesem oraz wykonania
        biopsji węzłów chłonnych wartowniczych. Na tym etapie niezbędna jest też
        konsultacja onkologiczna.
      </>
    )}
    Text={() => (
      <>
        W trakcie konsultacji z onkologiem pacjent otrzymuje zalecenia
        postępowania w sytuacji usunięcia zmiany nowotworowej, które dotyczą
        m.in wykonania niezbędnych badań kontrolnych, możliwości leczenia
        uzupełniającego, a także leczenia zaawansowanego czerniaka.
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
          <Link to="/czerniak" title="">
            Czerniak
          </Link>
        </Button>
      </>
    )}
    imageInfo={{
      image: graph.Image,
      alt: "Konsultacje onkologiczne",
      title: "Konsultacje onkologiczne",
    }}
  />
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_oncology.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 337, maxHeight: 300, quality: 45) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Oncology
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
