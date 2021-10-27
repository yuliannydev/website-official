import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { content, container } from './layout.module.css';
import './styles/global.css';

/*eslint-disable*/
const Layout = ({ children }) => {
    return (
        <div className={container}>
            <Navbar />
            <main className={content}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
