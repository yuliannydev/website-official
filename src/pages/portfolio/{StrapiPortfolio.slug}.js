/* import * as React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import BoxRetro from "../../components/BoxRetro";

const PortfolioPage = ({props}) => {
  console.log(props);
  return (
    <Layout>
      <main>
        <Seo title={} />
        <br />
        <BoxRetro>
          <div>{}</div>
        </BoxRetro>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allStrapiPortfolio {
      edges {
        node {
          strapiId
          tile
          description
        }
      }
    }
  }
`;

export default PortfolioPage; */
