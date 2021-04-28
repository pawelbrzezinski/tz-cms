import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";

import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Oncology = ({
  className = "",
  intro = "Diagnostyka czerniaka",
  h2 = "Konsultacje Onkologiczne - czerniak",
  ctaOffset = 0,
  graph,
  H5,
  Text,
  Buttons,
  reverse = true,
}) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    h2={h2}
    intro={intro}
    H5={
      H5 ||
      (() => (
        <>
          Po rozpoznaniu czerniaka pacjent wymaga dalszej diagnostyki w postaci
          m.in. docięcia brzegów zmiany z odpowiednim marginesem oraz wykonania
          biopsji węzłów chłonnych wartowniczych. Na tym etapie niezbędna jest
          też konsultacja onkologiczna.
        </>
      ))
    }
    Text={
      Text ||
      (() => (
        <>
          W trakcie konsultacji z onkologiem pacjent otrzymuje zalecenia
          postępowania w sytuacji usunięcia zmiany nowotworowej, które dotyczą
          m.in wykonania niezbędnych badań kontrolnych, możliwości leczenia
          uzupełniającego, a także leczenia zaawansowanego czerniaka.
        </>
      ))
    }
    Buttons={
      Buttons ||
      (() => (
        <>
          <Button>
            <Link
              to="/poznan/konsultacje-onkologiczne-leczenie-czerniaka"
              title="Konsultacje onkologiczne - leczenie czerniaka"
            >
              Umów się
            </Link>
          </Button>
          <Button type="secondary">
            <Link to="/czerniak" title="Czerniak">
              Czerniak
            </Link>
          </Button>
        </>
      ))
    }
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
