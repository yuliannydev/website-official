import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from '../components/Seo';

const ContactPage = () => {
  return (
    <Layout>
      <main>
        <Seo title="Contacto" />
        <title>Contacto</title>
        <h1>
          Hola desde la página de Contacto{" "}
          <span role="img" aria-label="Hello">
            👋
          </span>
        </h1>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export default ContactPage;
