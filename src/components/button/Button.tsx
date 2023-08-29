import React from 'react';
import './button.scss';

interface IProps {
    children: React.ReactNode
    classNameBtn: string
}

function Button({children, classNameBtn}: IProps) {
    return (
        <button className={`button ${classNameBtn}`}>{children}</button>
    );
}

export default Button;