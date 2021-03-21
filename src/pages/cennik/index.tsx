import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import Cta from "../../components/Cta";
import { Link } from "gatsby";

import "../../styles/prices.scss";

import { LOCATIONS } from "../../config/cities";
import Button from "../../components/Button";

const CityItem = ({ city = "", link = "" }) => (
  <Link className="prices_list_item" to={`/${link}/#cennik`} title={city}>
    <div>
      <h4>{city}</h4>
    </div>
    <Button type="secondary" size="M">
      <span>Wybierz</span>
    </Button>
  </Link>
);

const PricesPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Cennik</title>
    </Helmet>
    <div className="prices">
      <div className="prices_instructions">
        <h1>Cennik usług</h1>
        <div className="prices_cities_instructions">
          <p className="instructions_cta">
            <strong>Wybierz miasto</strong>, w którym chcesz się zbadać.
          </p>
          <p>
            Dynamicznie zwiększamy obszar naszej działalności, aby już wkrótce
            działać w Twoim miejscu zamieszkania!
          </p>
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
