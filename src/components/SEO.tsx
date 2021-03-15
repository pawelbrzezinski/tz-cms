import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "",
  description = "",
  keywords = "",
  date = new Date().toISOString(),
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:type" content="article" />

      <meta name="keywords" content={keywords}></meta>

      <meta property="article:modified_time" content={date} />
    </Helmet>
  );
};

export default SEO;
