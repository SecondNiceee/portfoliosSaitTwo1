import React, { FC } from 'react';
import cl from "./Sumbit.module.scss"


interface ISubmit{
    className? : string,
    value : string
}
const Submit:FC<ISubmit> = ({className = "", value}) => {
    return (
        <input value={value} className={`${cl.submit} ${className}`} type="submit" />
    );
};

export default Submit;