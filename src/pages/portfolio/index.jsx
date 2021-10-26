import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import BoxRetro from '../../components/BoxRetro';
import Layout from '../../components/Layout';
import { description, listPortfolio, title, visit } from './index.module.css';

const portfolioQuery = graphql`
    query {
        allGraphCmsPortfolio {
            nodes {
                id
                title
                description {
                    markdown
                }
                image {
                    url
                    gatsbyImageData(width: 300, placeholder: BLURRED)
                }
                tag
                link
            }
        }
    }
`;

const PortfolioHome = () => {
    const { allGraphCmsPortfolio } = useStaticQuery(portfolioQuery);

    return (
        <Layout>
            <BoxRetro>
                {allGraphCmsPortfolio.nodes.map((portfolio) => (
                    <li key={portfolio.id} className={listPortfolio}>
                        <h2 className={title}>{portfolio.title}</h2>

                        <p className={description}>{portfolio.description.markdown}</p>
                        <br />
                        <GatsbyImage image={getImage(portfolio.image)} alt={portfolio.title} />
                        <p>
                            {' '}
                            #{portfolio.tag[0]} #{portfolio.tag[1]} #{portfolio.tag[2]}
                        </p>
                        <a
                            className={visit}
                            href={`https:${portfolio.link}`}
                            rel="noreferrer noopener"
                            target="_blank"
                            alt={portfolio.title}
                        >
                            VER DEMO
                        </a>
                        <hr />
                    </li>
                ))}
            </BoxRetro>
            <br />
            <br />
            <Link to="/">Regresar al Inicio</Link>
        </Layout>
    );
};

export default PortfolioHome;
