import * as React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Inicio</title>
        <h1>
          Hola{" "}
          <span role="img" aria-label="World emoji">
            🌏
          </span>
          <br />
          <span>— estoy en </span>
          <span role="img" aria-label="Construcction emoji">
            🚧
          </span>
        </h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
