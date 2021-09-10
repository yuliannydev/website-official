import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from '../components/Seo';
import BoxRetro from '../components/BoxRetro';


const AboutPage = () => {
  return (
    <Layout>
      <main>
        <Seo title="Sobre mí" />
        <br />
        <BoxRetro>
        <h1>Nada que ver todavía...</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </BoxRetro>
        <br /><br />
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export default AboutPage;
