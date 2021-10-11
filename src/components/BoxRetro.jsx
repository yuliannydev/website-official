import React from 'react';
import { container, content } from './box-retro.module.css';

const BoxRetro = ({ children }) => {
    return (
        <div className={container}>
            <div className={content}>{children}</div>
        </div>
    );
};

export default BoxRetro;
