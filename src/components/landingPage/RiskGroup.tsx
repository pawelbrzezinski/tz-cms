import React from "react";

import BubbleSection from "../BubbleSection";

import Alert from "../Alert";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";

import "../../styles/risk_group_card.scss";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const RiskGroupCard = ({
  className = "",
  image,
  title = "",
  children = null,
}) => {
  return (
    <div className={`risk_group_card ${className}`}>
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: image,
            alt: title,
            title: title,
          }}
          styles={{
            display: "block",
            width: "128px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <h5>{children || title}</h5>
    </div>
  );
};

const AlertButton = ({ ctaOffset }) => (
  <Button>
    <AnchorLink href="#kontakt" title="Umów się" offset={ctaOffset}>
      Umów się
    </AnchorLink>
  </Button>
);

const RiskGroup = ({
  className = "",
  ctaOffset = 0,
  graph = { images: [] },
}) => (
  <div className={className}>
    <BubbleSection
      introText="Grupy ryzka"
      h2="Jakie są wskazania do badania znamion?"
      color="blue"
      reverse
    >
      <div className="container">
        <div className="cards">
          <RiskGroupCard image={graph.images[1]} title="Jasna karnacja">Jasna karnacja</RiskGroupCard>
          <RiskGroupCard image={graph.images[4]}>
            Liczne piegi i pieprzyki na skórze
          </RiskGroupCard>
          <RiskGroupCard image={graph.images[2]}>
            Opalanie się i oparzenia słoneczne
          </RiskGroupCard>
          <RiskGroupCard
            image={graph.images[5]}
            title="Srednica znamion > 6 mm"
          >
            Srednica znamion <br /> &gt; 6 mm
          </RiskGroupCard>
          <RiskGroupCard image={graph.images[0]}>
            Znamiona wrodzone
          </RiskGroupCard>
          <RiskGroupCard image={graph.images[7]}>
            Okres ciąży i połogu
          </RiskGroupCard>
          <RiskGroupCard image={graph.images[6]} className="melanoma_family">
            Czerniak lub raki skóry w rodzinie
          </RiskGroupCard>
          <RiskGroupCard image={graph.images[3]}>
            Zaburzenia odporności
          </RiskGroupCard>
        </div>
        <Alert button={AlertButton} ctaOffset={ctaOffset}>
          Osoby <strong>szczególnie narażone</strong> na wystąpienie raka skóry
          powinny poddawać się dermatoskopowemu badaniu znamion{" "}
          <strong>z większą częstotliwością</strong> niż standardowe badania
          przeprowadzane raz do roku.
        </Alert>
      </div>
    </BubbleSection>
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image1: allFile(filter: { relativePath: { regex: "/risk1.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image2: allFile(filter: { relativePath: { regex: "/risk2.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image3: allFile(filter: { relativePath: { regex: "/risk3.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image4: allFile(filter: { relativePath: { regex: "/risk4.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image5: allFile(filter: { relativePath: { regex: "/risk5.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image6: allFile(filter: { relativePath: { regex: "/risk6.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image7: allFile(filter: { relativePath: { regex: "/risk7.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Image8: allFile(filter: { relativePath: { regex: "/risk8.png/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <RiskGroup
        graph={{
          images: [
            data.Image1.nodes[0],
            data.Image2.nodes[0],
            data.Image3.nodes[0],
            data.Image4.nodes[0],
            data.Image5.nodes[0],
            data.Image6.nodes[0],
            data.Image7.nodes[0],
            data.Image8.nodes[0],
          ],
        }}
        {...props}
      />
    )}
  />
);
