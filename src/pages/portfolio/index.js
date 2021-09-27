import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import BoxRetro from "../../components/BoxRetro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { listPortfolio, title, visit } from "./index.module.css";
import Seo from "../../components/Seo";

const portfolioQuery = graphql`
  query {
    allGraphCmsPortfolio {
      nodes {
        title
        description {
          markdown
        }
        image {
          url
          gatsbyImageData(width: 360, layout: FIXED, placeholder: BLURRED)
        }
        tag
      }
    }
  }
`;

const PortfolioHome = () => {
  const { allGraphCmsPortfolio } = useStaticQuery(portfolioQuery);

  return (
    <Layout>
      <Seo title="Portafolio" />
      {allGraphCmsPortfolio.nodes.map((resolve, key) => (
        <BoxRetro>
          <h3 className={title}>{resolve.title}</h3>
          <ul className={listPortfolio}>
            <li key={key}>
              {/* <ReactMarkdown>{resolve.description.markdown}</ReactMarkdown>
              <br /> */}
              <GatsbyImage
                image={getImage(resolve.image)}
                alt={resolve.title}
              />

              <a
                className={visit}
                href="https://website-batman-with-html-css.vercel.app"
                rel="noreferrer noopener"
                target="_blank"
              >
                VER DEMO
              </a>
            </li>
          </ul>
        </BoxRetro>
      ))}
    </Layout>
  );
};

export default PortfolioHome;
