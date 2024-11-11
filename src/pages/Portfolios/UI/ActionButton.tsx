import React, { FC, ReactNode } from 'react';

interface IActionButton{
    children : ReactNode,
    onClick : () => void,
    className? : string
}
const ActionButton:FC<IActionButton> = ({children, onClick, className = ""}) => {
    return (
        <button onClick={onClick} className={`${className} portfolio__action-button`}>{children}</button>
    );
};

export default ActionButton;