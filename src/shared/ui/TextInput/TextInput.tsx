import React, { FC } from "react";
import cl from "./TextInput.module.scss"
import {  FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';


interface ITextInput<T extends FieldValues>{
    name : Path<T> ,
    type : string,
    register : UseFormRegister<T>,
    error : FieldError | undefined,
    maxLength? : number,
    title? : string
}
function TextInput<T extends FieldValues>({name, type, register, error, maxLength, title} : ITextInput<T>){
    return (    
        <label className={cl.label} htmlFor={name} >
            {/* <p className={cl.inputTitle}>{name}</p> */}
            {title &&  <p className={cl.textTitle}>{title}</p>}
            <input id={name} autoComplete="off" maxLength={maxLength} placeholder={name} style={error ? {border : "1px solid rgb(255, 0, 238)"} : {}}  {...register(name)} name={name}  className={cl.textInput} type={type} />
            {error && <span className={cl.error}>{error.message}</span>}
        </label>
    );
};
export default React.memo(TextInput) as <T extends FieldValues>(props: ITextInput<T>) => React.ReactElement;

