import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "../styles/all.scss";
import useSiteMetadata from "./useSiteMetadata";
import { withPrefix } from "gatsby";
import { trimEnd } from "lodash";
import CookiesInfo from "./CookiesInfo";

const TemplateWrapper = ({
  children,
  constactCtaComponent = null,
  location,
}) => {
  const { title, description, siteUrl } = useSiteMetadata();

  const [offset, setOffset] = useState(
    typeof window === "undefined" ? 0 : window.pageYOffset
  );

  const canonicalUrl = trimEnd(siteUrl + location.pathname, "/");

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
        <html lang="pl" />
        <title>{title}</title>
        <meta charset="utf-8" />
        <link rel="canonical" href={canonicalUrl} />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta http-equiv="Expires" content="0" />
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
          rel="icon shortcut"
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
      <CookiesInfo />
    </div>
  );
};

export default TemplateWrapper;
