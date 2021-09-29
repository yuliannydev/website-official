import React from "react";
import { footer } from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        Hecho con{" "}
        <span role="img" aria-label="heart purple">
          💜
        </span>{" "}
        y{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gatsby"
        >
          <svg
            fill="#639"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={22}
            height={22}
          >
            <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z" />
          </svg>
        </a>{" "}
        por
      </p>
      <p>Yulianny Betancourt - &#169;2021 </p>
    </footer>
  );
};

export default Footer;
