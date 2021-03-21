import { Link } from "gatsby";
import React from "react";
import Button from "../Button";
import { graphql, StaticQuery } from "gatsby";
import TwoColumnHomeSection from "./TwoColumnHomeSection";

const MelanomaOncology = ({
  className = "",
  graph,
  Text,
  H5,
  reverse = false,
}) => {
  const TextComponent =
    Text ||
    (() => (
      <>
        Czerniak najczęściej lokalizuje się na skórze, ale może powstawać też w
        innych miejscach np. gałce ocznej czy na błonach śluzowych. Czerniak
        charakteryzuje się wysokim stopniem złośliwości. W przebiegu procesu
        nowotworowego mogą pojawiać się przerzuty w węzłach chłonnych, ale także
        przerzuty odległe w innych narządach takich jak płuca czy mózg.
      </>
    ));
  const H5Component =
    H5 ||
    (() => (
      <>
        Czerniak złośliwy (łac. melanoma malignum) jest to nowotwór wywodzący
        się z komórek barwnikowych. To najgroźniejszy nowotwór skóry, który
        stanowi około 2% wszystkich zachorowań na nowotwory.
      </>
    ));
  return (
    <TwoColumnHomeSection
      reverse={reverse}
      className={className}
      intro="Melanoma Malignum"
      h2="Czerniak złośliwy"
      H5={H5Component}
      Text={TextComponent}
      Buttons={() => (
        <>
          <Button>
            <Link to="/czerniak" title="Czerniak">
              Czerniak
            </Link>
          </Button>
          <Button type="secondary">
            <Link to="/czerniak/rodzaje-czerniaka-zdjecia">Rodzaje czerniaka</Link>
          </Button>
        </>
      )}
      imageInfo={{
        image: graph.Image,
        alt: "Dermatoskopowe badanie znamion",
        title: "Dermatoskopowe badanie znamion",
      }}
    />
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/home_czerniak_melanoma.png/" } }
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
      <MelanomaOncology
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
