import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import Cta from "../../components/Cta";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../../styles/prices.scss";
import CITIES from "../../config/cities";

const CityItem = ({ label = "", link = "", address1 = "" }) => (
  <div className="prices_list_item">
    <div>
      <h4>
        <Link to={`/${link}/#cennik`} title={label}>
          {label}
        </Link>
      </h4>
      <div className="address">{/* <p>{address1}</p> */}</div>
    </div>
  </div>
);

const PricesPage = () => (
  <Layout>
    <Helmet>
      <title>Cennik</title>
    </Helmet>
    <div className="prices">
      <div className="prices_instructions">
        <h1>Cennik usług</h1>
        <div className="prices_cities_instructions">
          Wybierz miasto, w którym chcesz się zbadać. Dynamicznie zwiększamy
          obszar naszej działalności, aby już wkrótce działać w Twoim miejscu
          zamieszkania!
        </div>
      </div>
      <div className="prices_cities_list_wrapper">
        {CITIES.map((city) => (
          <CityItem key={city.label} {...city} />
        ))}
      </div>
    </div>
    <Cta className="home_cta" />
  </Layout>
);

export default PricesPage;
