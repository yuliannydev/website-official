import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import BoxRetro from "../../components/BoxRetro";
import { StaticImage } from "gatsby-plugin-image";

const PortfolioHome = () => (
  <StaticQuery
    query={graphql`
      query allPortfolio {
        allStrapiPortfolio {
          nodes {
            strapiId
            Title
            Description
            Cover {
              url
            }
            Enlace
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        {data.allStrapiPortfolio.nodes.map((resolve, key) => (
          <BoxRetro>
            <h3>{resolve.Title}</h3>
            <ul>
              <li key={key}>
                <section>{resolve.Description}</section>
                <StaticImage
                  src="http://localhost:1337/uploads/main_2c1092a965.png"
                  alt="Batman"
                />
                <a
                  href={resolve.Enlace}
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
    )}
  />
);
export default PortfolioHome;
