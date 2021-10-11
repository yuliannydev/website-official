import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query Seo {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`;

const Seo = ({ title, description, article }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const { defaultTitle, titleTemplate, defaultDescription, siteUrl, image, twitterUsername } =
        site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`,
        twitterUsername: twitterUsername,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && <meta property="og:type" content="article" />}

            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}

            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    );
};

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
};

Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
};

export default Seo;
