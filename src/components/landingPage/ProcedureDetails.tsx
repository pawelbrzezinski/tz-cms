import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { graphql, StaticQuery } from "gatsby";
import Button from "../Button";
import { Link } from "gatsby";

import TwoColumnHomeSection from "./TwoColumnHomeSection";

const ProcedureDetails = ({ className = "", h2 = "Przebieg badania wideodermatoskopowego", graph }) => (
  <TwoColumnHomeSection
    className={className}
    h2={h2}
    H5={() => (
      <>
        W trakcie wizyty lekarz dokonuje oględzin całego ciała, oglądając
        wideodermatoskopem <strong>wszystkie znamiona</strong> na Twojej skórze.
        Pieprzyki, które wymagają obserwacji lub usunięcia są zapisywane w
        systemie - jest to tzw. <strong>mapowanie znamion</strong>.
      </>
    )}
    Text={() => (
      <>
        Po badaniu lekarz omawia z Tobą dalsze zalecenia diagnostyczne, a
        <strong>wynik badania</strong> wraz z raportem zawierającym
        wideodermatoskopowe zdjęcia zmapowanych znamion wysyłamy do Ciebie drogą
        elektroniczną. Jeśli otrzymałeś zalecenie usunięcia zmiany skórnej
        skontaktuj się z naszą rejestracją i umów się do jednego z naszych
        chirurgów.
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
          <Link to="/wideodermatoskopia-komputerowe-badanie-znamion">
            Dowiedz się więcej
          </Link>
        </Button>
      </>
    )}
    imageInfo={{
      image: graph.PrzebiegBadaniaImage,
      alt: "Przebieg badania wideodermatoskopowego",
      title: "Przebieg badania wideodermatoskopowego",
    }}
  />
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        PrzebiegBadaniaImage: allFile(
          filter: {
            relativePath: { regex: "/przebieg-badania-dermatoskopowego.png/" }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 515, maxHeight: 460, quality: 65) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <ProcedureDetails
        graph={{
          PrzebiegBadaniaImage: data.PrzebiegBadaniaImage.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
