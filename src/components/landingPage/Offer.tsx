import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

import BubbleSection from "../BubbleSection";
import Button from "../Button";

import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "../../styles/offer_card.scss";

const OfferCard = ({ image, title = "", desc = "", link }) => {
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
        <h3>{title}</h3>
        <div className="smallbody">{desc}</div>
      </div>
      {link ? (
        <div className="smallbody">
          <Link to={link} title={title}>
            Dowiedz się więcej
          </Link>
        </div>
      ) : null}
    </div>
  );
};

const Offer = ({
  data = [],
  className = "",
  h5 = "",
  graph: {
    BadanieZnamionImage,
    UsuwanieZnamionImage,
    UsuwanieNiechirurgiczneZnamionImage,
    KonsultacjeImage,
  },
  ctaPrimary,
}) => {
  const IMAGES = {
    badanie: BadanieZnamionImage,
    chirurgiczne: UsuwanieZnamionImage,
    niechirurgiczne: UsuwanieNiechirurgiczneZnamionImage,
    onkologia: KonsultacjeImage,
  };
  return (
    <div className={className}>
      <BubbleSection
        introText="Jak możemy Ci pomóc?"
        h2="Nasze usługi"
        h5={
          h5 ||
          "W naszym Centrum Badania Znamion w procesie diagnostycznym uczestniczą dermatolodzy, chirurdzy oraz onkolodzy, zapewniając pacjentom kompleksową opiekę i profesjonalną  diagnostykę."
        }
        color="violet"
      >
        <div className="container">
          <div className="cards">
            {data.map((offer) => (
              <OfferCard
                key={offer.type}
                image={IMAGES[offer.type]}
                title={offer.title}
                desc={offer.desc}
                link={offer.link}
              />
            ))}
          </div>
          {ctaPrimary && (
            <div className="buttons-wrapper">
              <Button>{ctaPrimary}</Button>
            </div>
          )}
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
        UsuwanieNiechirurgiczneZnamionImage: allFile(
          filter: {
            relativePath: {
              regex: "/usuwanie_niechirurgiczne_znamion_offer.png/"
            }
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
          UsuwanieNiechirurgiczneZnamionImage:
            data.UsuwanieNiechirurgiczneZnamionImage.nodes[0],
          KonsultacjeImage: data.Konsultacje.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
