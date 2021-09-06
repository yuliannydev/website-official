import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { layout, content } from "./layout.module.css";
import "./styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
     {/* // TODO: Hacer component SEO */}
      <Navbar />
      <div className={content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
