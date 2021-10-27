import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import BoxRetro from '../components/BoxRetro';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { aboutMe } from './sobre-mi.module.css';

const biographyQuery = graphql`
    query {
        biography: graphCmsBiography {
            title
            content {
                markdown
            }
            subContent {
                markdown
            }
            image {
                gatsbyImageData(width: 250, placeholder: BLURRED)
            }
        }
    }
`;

const AboutPage = () => {
    const { biography } = useStaticQuery(biographyQuery);

    return (
        <Layout>
            <Seo title="Sobre mí" />
            <BoxRetro>
                <h2>
                    {biography.title}{' '}
                    <span role="img" aria-label="Hi Girl Emoji">
                        🙋‍♀️,
                    </span>
                </h2>
                {/* <GatsbyImage image={getImage(biography.image)} alt="Profile" /> */}
                <br />
                <div className={aboutMe}>
                    <p>
                        <span role="img" aria-label="Mensaje hablado">
                            📢{' '}
                        </span>
                        {biography.content.markdown}{' '}
                    </p>
                    <br />
                    <p>
                        <span role="img" aria-label="">
                            🤟{' '}
                        </span>
                        {biography.subContent.markdown}
                    </p>
                </div>
            </BoxRetro>

            <br />
            <br />
            <Link to="/">Regresar al Inicio</Link>
        </Layout>
    );
};

export default AboutPage;
