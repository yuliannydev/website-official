import React from 'react';
import { footer } from './footer.module.css';

const Footer = () => {
    return (
        <footer className={footer}>
            <p>
                Hecho con{' '}
                <span role="img" aria-label="heart purple">
                    💜
                </span>{' '}
                y{' '}
                <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gatsby"
                >
                    Gatsby
                </a>{' '}
                por
            </p>
            <p>Yulianny Betancourt - &#169;2021 </p>
        </footer>
    );
};

export default Footer;
