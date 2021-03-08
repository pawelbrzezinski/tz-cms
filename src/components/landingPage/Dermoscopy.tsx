import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Dermoscopy = ({ className = "", graph }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container">
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Na czym to polega?</div>
        <h2 className={H2_CLASS_NAME}>Dermatoskopia</h2>
        <h5 className={H5_CLASS_NAME}>
          Dermatoskopia pozwala na szczegółową ocenę struktury znamion, a
          wprowadzenie tej metody badania do rutynowej oceny zmian skórnych
          <strong> poprawia wykrywalność czerniaka</strong> o około 30%
          Dermatoskopowe badanie znamion polega na oglądaniu wszystkich znamion
          na skórze, w dużym powiększeniu, przy zastosowaniu urządzenia zwanego
          dermatoskopem.
        </h5>
        <div className="section_text">
          Klasyczny dermatoskop, który stosują często dermatolodzy w trakcie
          badania znamion wygląda jak lupka - szkło powiększające z wbudowanych
          źródłem światła. Takie dermatoskopy powiększają obraz ok. 10-20
          krotnie umożliwiając profilaktyczne badanie niepokojących znamion. W
          trakcie dermatoskopii wszystkich pieprzyków na skórze lekarz przykłada
          urządzenie do skóry pacjenta i ogląda obraz powiększonej zmiany. Na
          podstawie uzyskanego obrazu oraz swojego doświadczenia dermatolog
          ocenia, które zmiany mogą okazać się niebezpieczne i kieruje pacjenta
          na ich usunięcie chirurgiczne.
        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/dermatoskopia-badanie-znamion">Dermatoskopia</Link>
          </Button>
        </div>
      </div>
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: graph.Image,
            alt: "Dermatoskopowe badanie znamion",
            title: "Dermatoskopowe badanie znamion",
          }}
          styles={{}}
        />
      </div>
    </TwoColumnSection>
  </div>
);

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
