import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import Seo from '../../components/Seo';

const Portfolio = () => {
  return (
    <Layout>
      <main>
        <Seo title="Portafolio" />
        <h1>
          Proximamente{" "}
          <span role="img" aria-label="Rock U">
            🤟
          </span>
        </h1>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export default Portfolio;
