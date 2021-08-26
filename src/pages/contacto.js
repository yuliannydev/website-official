import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <main>
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
