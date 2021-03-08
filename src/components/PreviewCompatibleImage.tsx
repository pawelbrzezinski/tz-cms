import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

//https://www.gatsbyjs.com/plugins/gatsby-image/#how-to-use

const PreviewCompatibleImage = ({ imageInfo, styles = {}, className = "" }) => {
  const imageStyle = { borderRadius: "5px", ...styles };
  const { alt = "", title = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        className={className}
        fluid={image.childImageSharp.fluid}
        alt={alt}
        title={title}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        className={className}
        fluid={childImageSharp.fluid}
        alt={alt}
        title={title}
      />
    );
  }

  if (!!image && typeof image === "string") {
    return (
      <img
        style={imageStyle}
        className={className}
        src={image}
        alt={alt}
        title={title}
      />
    );
  }

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
