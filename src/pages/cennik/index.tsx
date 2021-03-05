import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import Cta from "../../components/Cta";
import { Link } from "gatsby";

import "../../styles/prices.scss";

import { LOCATIONS } from "../../config/cities";

const CityItem = ({ city = "", link = "" }) => (
  <Link className="prices_list_item" to={`/${link}/#cennik`} title={city}>
    <h4>{city}</h4>
  </Link>
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
          <strong>Wybierz miasto</strong>, w którym chcesz się zbadać. W każdym z ośrodków
          Ogólnopolskiego Centrum Badania Znamion zbadamy Cię od stóp do głów! W
          trakcie wizyty lekarz ogląda <strong>wszystkie znamiona na skórze pacjenta</strong>.
        </div>
      </div>
      <div className="prices_cities_list_wrapper">
        {LOCATIONS.filter((location) => location.link).map((location) => (
          <CityItem
            key={location.city}
            city={location.city}
            link={location.link}
          />
        ))}
      </div>
    </div>
    <Cta className="home_cta" />
  </Layout>
);

export default PricesPage;
