import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from '../components/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <Seo title="Sobre mí" />
        <h1>
        <br />Nada que ver todavía...</h1>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export default AboutPage;
