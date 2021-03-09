import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";

import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const Laser = ({ className = "", graph, reverse=true }) => (
  <TwoColumnHomeSection
    reverse={reverse}
    className={className}
    h2="Laserowe Usuwanie Znamion"
    H5={() => (
      <>
        Zabieg laserowego usuwania znamion polega na skierowaniu promienia
        lasera na usuwane tkanki, które odparowują. Procedura nie wymaga użycia
        skalpela, ani innych narzędzi chirurgicznych. Laserowe usuwanie
        pieprzyków wykonywane jest zazwyczaj w znieczuleniu miejscowym.
      </>
    )}
    Text={() => (
      <>
        Wszystkie nieinwazyjne metody usuwania zmian skórnych - usuwanie
        laserowe znamion, kriochirurgia czy elektrokoagulacja zarezerwowane są
        do usuwania zmian łagodnych. Usunięcie czerniaka metodą laserową
        pozbawia tej możliwości i stwarza niebezpieczeństwo rozwoju
        zaawansowanej choroby nowotworowej w przyszłości, dlatego decyzję o tym,
        czy znamię zostanie usunięte laserowo czy chirurgicznie zawsze podejmuje
        lekarz w trakcie badania dermatoskopowego znamion. Tylko dzięki
        dermatoskopii lekarz jest w stanie odróżnić zwykłe znamię od
        niebezpiecznego czerniaka
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
          <Link
            to="/laserowe-usuwanie-znamion"
            title="Laserowe Usuwanie znamion"
          >
            Laserowe Usuwanie znamion
          </Link>
        </Button>
      </>
    )}
    imageInfo={{
      image: graph.Image,
      alt: "Laserowe usuwanie znamion",
      title: "Laserowe usuwanie znamion",
    }}
  />
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_laser.png/" } }
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
      <Laser
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
