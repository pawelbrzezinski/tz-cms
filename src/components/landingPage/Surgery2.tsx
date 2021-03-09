import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";

import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Surgery2 = ({ className = "", graph, reverse= true }) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    h2="Chirurgiczne Usuwanie Znamion"
    H5={() => (
      <>
        Zabieg polega na wycięciu zmiany wraz z fragmentem zdrowej skóry za
        pomocą skalpela. Następnie chirurg zakłada się szwy, które zdejmowane są
        po 7–14 dniach oraz opatrunek.
      </>
    )}
    Text={() => (
      <>
        Należy pamiętać, że usuwanie znamion bez uprzedniego badania może być
        niebezpieczne dlatego przed podjęciem decyzji o sposobie usunięcia
        pieprzyka powinien być on zbadany dermatoskopowo. Bardzo ważnym
        elementem zabiegu usuwania znamion jest{" "}
        <strong>badanie histopatologiczne</strong>
        pobranego w trakcie zabiegu wycinka skóry - dopiero na jego podstawie
        stawiana jest ostateczna diagnoza.
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
          <Link to="/chirurgiczne-usuwanie-znamion" title="Chirurgiczne Usuwanie znamion">
            Chirurgiczne Usuwanie znamion
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
      <Surgery2
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
