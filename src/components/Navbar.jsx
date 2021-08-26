import React from "react";
import { Link } from "gatsby";
import {
  navbar,
  navLinks,
  navLinksItems,
  navLinksTexts,
} from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <span role="img" aria-label="Rayito">
        ⚡
      </span>
      <ul className={navLinks}>
        <li className={navLinksItems}>
          <Link className={navLinksTexts} to="/">
            Inicio
          </Link>
        </li>
        <li className={navLinksItems}>
          <Link className={navLinksTexts} to="/sobre-mi">
            Sobre mí
          </Link>
        </li>
        <li className={navLinksItems}>
          <Link className={navLinksTexts} to="/portfolio">
            Portafolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
