import * as React from "react"
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import BoxRetro from "../../components/BoxRetro"

const PortfolioPage = (/* {data: { graphCmsPortfolio } }  */) => {
  //const images = getImage(graphCmsPortfolio.cover[0].url)

  /* const {
    title,
    description,
    tag
  } = portfolio;
*/
  return (
    <Layout>
      <main>
        {/* <Seo title={graphCmsPortfolio.title} /> */}
        <br />
        <BoxRetro>
          <h1></h1>
        <section>
          <p></p>  
          </section>
        </BoxRetro>
        <Link to="/">Regresar al Inicio</Link>
      </main>
    </Layout>
  )
}

export default PortfolioPage;

/* export const query = graphql `
query Portfolio($slug: String!) {
  graphCmsPortfolio(slug: { eq: $slug }) {
    cover {
      url
    }
    slug
    tag
    title
    description
  }
  }
`; */
