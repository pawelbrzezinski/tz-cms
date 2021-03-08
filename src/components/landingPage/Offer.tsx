import React from "react";
import { graphql, StaticQuery } from "gatsby";

import AnchorLink from "react-anchor-link-smooth-scroll";
import BubbleSection from "../BubbleSection";
import Button from "../Button";

import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "../../styles/offer_card.scss";

const OfferCard = ({ image, title = "", desc = "" }) => {
  return (
    <div className="offer_card">
      <div>
        <PreviewCompatibleImage
          imageInfo={{
            image: image,
            alt: title,
            title: title,
          }}
        />
      </div>
      <h5>{title}</h5>
      <div className="smallbody">{desc}</div>
    </div>
  );
};

const Offer = ({
  className = "",
  graph: { BadanieZnamionImage, UsuwanieZnamionImage, KonsultacjeImage },
}) => {
  return (
    <div className={className}>
      <BubbleSection
        introText="Jak możemy Ci pomóc?"
        h2="Nasze usługi"
        h5="W naszym Centrum Badania Znamion w procesie diagnostycznym uczestniczą dermatolodzy, chirurdzy oraz onkolodzy, zapewniając pacjentom kompleksową opiekę i profesjonalną  diagnostykę."
        color="violet"
      >
        <div className="container">
          <div className="cards">
            <OfferCard
              image={BadanieZnamionImage}
              title="Badanie znamion"
              desc="
              Dermatoskopowe badanie wszystkich znamion na skórze w formie wideodermatoskopii z mapowaniem zmian wytypowanych przez lekarza do obserwacji oraz archiwizacją wykonanych zdjęć."
            />
            <OfferCard
              image={UsuwanieZnamionImage}
              title="Usuwanie znamion"
              desc="Chirurgiczne usuwanie podejrzanych pieprzyków wytypowanych przez lekarza w trakcie badania wideodermatoskopowego z wykonaniem histopatologicznej oceny usuniętej zmiany skórnej. Nieinwazyjne usuwanie łagodnych znamion laserem Co2 lub metodą krioterapii."
            />
            <OfferCard
              image={KonsultacjeImage}
              title="Konsultacje onkologiczne"
              desc="Konsultacja onkologiczna w zakresie nowotworów skóry, w tym czerniaka złośliwego. Pacjent otrzymuje zalecenia po usunięciu zmiany nowotworowej, dotyczące badań kontrolnych, leczenia uzupełniającego, a także leczenia zaawansowanego czerniaka."
            />
          </div>
        </div>
      </BubbleSection>
    </div>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        BadanieZnamion: allFile(
          filter: { relativePath: { regex: "/badanie_znamion_offer.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        UsuwanieZnamion: allFile(
          filter: { relativePath: { regex: "/usuwanie_znamion_offer.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        Konsultacje: allFile(
          filter: {
            relativePath: { regex: "/konsultacje_onkologiczne_offer.png/" }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 128, maxHeight: 128, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Offer
        graph={{
          BadanieZnamionImage: data.BadanieZnamion.nodes[0],
          UsuwanieZnamionImage: data.UsuwanieZnamion.nodes[0],
          KonsultacjeImage: data.Konsultacje.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
