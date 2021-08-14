import * as React from "react";
import { Link } from "gatsby";
import { pageStyles, headingStyles, paragraphStyles } from "../styles/styles";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Página no encontrada</h1>
      <p style={paragraphStyles}>
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
        <Link to="/">Regresar</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
