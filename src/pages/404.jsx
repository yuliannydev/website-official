import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>No encontrado</title>
      <h1>Página no encontrada</h1>
      <p>
        Lo siento{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        no sé que estás buscando.
        <br />
        <br />
        <Link to="/">Regresar al Inicio</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
