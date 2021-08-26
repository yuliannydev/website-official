import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

const Portfolio = () => {
  return (
    <Layout>
      <main>
        <title>Portafolio</title>
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
