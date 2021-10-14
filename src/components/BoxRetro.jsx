import React from 'react';
import { container, content } from './box-retro.module.css';

/*eslint-disable */
const BoxRetro = ({ children }) => {
    return (
        <div className={container}>
            <div className={content}>{children}</div>
        </div>
    );
};

export default BoxRetro;
