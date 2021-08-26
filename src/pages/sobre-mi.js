import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <title>Sobre mí</title>
        <h1>Nada que ver todavía...</h1>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export default AboutPage;
