import React, { CSSProperties, FC, ReactNode } from 'react';
import cl from "./LogButton.module.scss"

interface ILogButton{
     onClick? : () => void,
     isShine? : boolean,
     className? : string,
     styles? : CSSProperties,
     children : ReactNode,
}
const LogButton:FC<ILogButton> = ({onClick = () => {},  className = "" ,styles = {}, isShine = false, children}) => {
    return (
        <button data-shine = {isShine ? "shine" : ""} onClick={onClick} style={styles} className={[cl.logButton, className].join(' ')}>{children}</button>
    );
};

export default LogButton;