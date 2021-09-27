import * as React from "react";
import { Link } from "gatsby";
import { codeStyles } from "../styles/styles";
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
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Crea una página en <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Regresar al Inicio</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
