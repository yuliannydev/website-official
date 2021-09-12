import * as React from "react"
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import Seo from '../../components/Seo';
import { graphql } from 'gatsby';
import BoxRetro from "../../components/BoxRetro"

const PortfolioPage = ({data: { graphCmsPortfolio } } ) => {

  /* const {
    title,
    description,
    tag
  } = portfolio;
*/
  return (
    <Layout>
      <main>
        <Seo title={graphCmsPortfolio.title} />
        <br />
        <BoxRetro>
        <div>{graphCmsPortfolio.description}</div>
        </BoxRetro>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  )
}

export const query = graphql `
query PortfolioQuery($slug: String!) {
  graphCmsPortfolio(slug: {eq: $slug}) {
    slug
    title
    description
    tag
    cover {
      url
    }
  }
}
`;


export default PortfolioPage;
