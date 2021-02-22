import { deserialize } from "node:v8";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title = "", description = "", keywords = "" }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:title"  content={title} />
    
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />

    <meta property="og:type" content="article" />

    <meta name="keywords" content={keywords}></meta>
  </Helmet>
);

export default SEO;
