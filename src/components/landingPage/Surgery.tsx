import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import TwoColumnSection, {
  H2_CLASS_NAME,
  H5_CLASS_NAME,
  INTRO_TEXT_CLASS_NAME,
} from "../TwoColumnSection";

import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Surgery = ({ className = "", graph }) => (
  <div className={`${className}`}>
    <TwoColumnSection color="white" containerClassName="container" reverse>
      <div>
        <div className={INTRO_TEXT_CLASS_NAME}>Kiedy wyciąć pieprzyk?</div>
        <h2 className={H2_CLASS_NAME}>Usuwanie znamion</h2>
        <h5 className={H5_CLASS_NAME}>
        Zawsze przed podjęciem decyzji o tym czy znamię powinno zostać usunięte chirurgicznie czy też może być bezpiecznie usunięte laserowo należy wykonać badanie dermatoskopowe.  

        </h5>
        <div className="section_text">
        Na podstawie wykonanego badanie znamion lekarz kwalifikuje pacjenta do odpowiedniej  metody. Chirurgicznie należy usunąc każde atypowe znamię na skórze. Metodą nieinwazyjną można usunąć jedynie zmiany łagodne. Należy jednak pamiętać, że przy usuwaniu znamion metodą laserową, krioterapii lub elektrokoagulacji nie ma możliwości wykonania badania histopatologicznego, a jedynie na jego podstawie można postawić ostateczną diagnozę. 

        </div>
        <div className="buttons">
          <Button>
            <AnchorLink href="#kontakt" title="Umów się">
              Umów się
            </AnchorLink>
          </Button>
          <Button type="secondary">
            <Link to="/chirurgiczne-usuwanie-znamion" title="Usuwanie znamion">
              Usuwanie znamion
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: graph.Image,
            alt: "Chirurgiczne usuwanie znamion",
            title: "Chirurgiczne usuwanie znamion",
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
