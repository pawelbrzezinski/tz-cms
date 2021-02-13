import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import "../../styles/about.scss";

import CeiImage from "../../img/ceo.png";

import Cta from "../../components/Cta";
import BubbleSection from "../../components/BubbleSection";
import Doctor from "./Doctor";

const AboutUsPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        "bg-option": "about",
      }}
    >
      <title>O nas</title>
    </Helmet>

    <div className="about">
      <div className="heading">
        <h1>
          <span className="colored">Naszą misją jest</span> wyeliminowanie
          nowotworów skóry z życia milionów ludzi
        </h1>
      </div>
      <div className="ceo">
        <div className="content_wrapper">
          <h2>Działamy dla ludzi</h2>
          <div className="subheading">
            Wykorzystujemy prostą, szybką i sprawdzoną metodę diagnostyczną,
            jaką jest badanie dermatoskopowe.
          </div>
          <div className="text">
            Wierzymy, że razem zmniejszymy zachorowalność i umieralność z powodu
            nowotworów w Polsce. Łączymy dermatologów, onkologów, chirurgów i
            innych specjalistów we wspólnej walce z rakiem. Tak się składa, że
            jesteśmy najlepsi w badaniu znamion za pomocą cyfrowej
            dermatoskopii.
          </div>
          <div className="signature">
            <div>
              Agnieszka Czyżewska, <span className="ceo_title">CEO</span>
            </div>
            <div className="medical_title">
              Specjalista onkologii klinicznej
            </div>
          </div>
        </div>
        <div>
          <img
            src={CeiImage}
            alt="Agnieszka Czyżewska - specjalista onkologii klinicznej, CEO"
            title="Agnieszka Czyżewska - specjalista onkologii klinicznej, CEO"
          />
        </div>
      </div>
      <div className="map">
        <BubbleSection
          color="gray"
          reverse
        >
          <div className="container">
            <div className="cards">asd</div>
          </div>
        </BubbleSection>
      </div>
      <div className="team">
        <BubbleSection
          h2="Nasz zespół"
          h5="Lekarze z naszych ośrodków mają, w razie potrzeby, możliwość dokonania zdalnej konsultacji między sobą. Daje to niespotykaną możliwość ciągłego podnoszenia jakości świadczonych przez nas usług, które bezpośrednio przekładają się na zdrowie naszych Pacjentów."
          color="blue"
          
        >
          <div className="container">
            <div className="cards">
              <Doctor />
              <Doctor />
              <Doctor />
              <Doctor />
              <Doctor />
            </div>
          </div>
        </BubbleSection>
      </div>
      <Cta className="home_cta" />
    </div>
  </Layout>
);

export default AboutUsPage;
