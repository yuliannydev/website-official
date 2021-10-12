import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import BoxRetro from '../../components/BoxRetro';
import { listPortfolio, title, description, visit } from './index.module.css';
import Seo from '../../components/Seo';

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
            <Seo title="Portafolio" />
            {allGraphCmsPortfolio.nodes.map((resolve, key) => (
                <BoxRetro>
                    <h2 className={title}>{resolve.title}</h2>
                    <ul className={listPortfolio}>
                        <li key={key}>
                            <p className={description}>
                                <ReactMarkdown>{resolve.description.markdown}</ReactMarkdown>
                            </p>
                            <br />
                            <GatsbyImage image={getImage(resolve.image)} alt={resolve.title} />
                        </li>
                        <li>
                            {' '}
                            #{resolve.tag[0]} #{resolve.tag[1]} #{resolve.tag[2]}
                        </li>

                        <a
                            className={visit}
                            href={resolve.link}
                            rel="noreferrer noopener"
                            target="_blank"
                            alt="Website Batman"
                        >
                            VER DEMO
                        </a>
                    </ul>
                </BoxRetro>
            ))}
            <br />
            <br />
            <Link to="/">Regresar al Inicio</Link>
        </Layout>
    );
};

export default PortfolioHome;
