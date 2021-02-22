import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "../styles/all.scss";
import useSiteMetadata from "./useSiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children, constactCtaComponent = null }) => {
  const { title, description } = useSiteMetadata();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const bodyClass = {
    class: offset > 40 ? "sticky" : "",
  };

  return (
    <div>
      <Helmet bodyAttributes={bodyClass}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/logo.png`} />
        <meta name="twitter:image" content={`${withPrefix("/")}img/logo.png`} />
      </Helmet>
      <Navigation constactCtaComponent={constactCtaComponent} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
