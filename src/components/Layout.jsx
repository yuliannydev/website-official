import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { content } from "./layout.module.css";
import "./styles/global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
