import  {  useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import cl from "./Textarea.module.scss";
import { Control, FieldError, FieldValues, Path, UseFormRegister, useWatch } from 'react-hook-form';


interface ITextInput<T extends FieldValues>{
    title : string
    name : Path<T> ,
    register : UseFormRegister<T>,
    error : FieldError | undefined,
    maxLength? : number,
    control : Control<T>
}

export default function Textarea<T extends FieldValues>({error, name, register, title, maxLength, control   } : ITextInput<T>){
    const value = useWatch({ control, name: name });


    const valueRef = useRef<HTMLTextAreaElement>(null)
    const hiddenRef = useRef<HTMLTextAreaElement>(null)

    const { ref, ...rest } = register(name)

    useEffect( () => {
        // textAreaRef.current.style.height = (12 + 11 + 17.6*len).toString() + 'px'
        if (hiddenRef.current && valueRef.current){
            valueRef.current.style.height = (hiddenRef.current.scrollHeight).toString() + 'px'
        }
    } , [value] )

    useImperativeHandle(ref, () => valueRef.current)

    return (
        <div className={cl.textAreaWrapper}>

            <label className={cl.textAreaLabel} htmlFor={name}>{title}</label>
            <div className={cl.textAreaContainer}>

            <textarea ref={hiddenRef} value={value} className={`${cl.hiddenArea} ${cl.textArea}`}  />
                <textarea  maxLength={maxLength} className={cl.textArea} {...rest} ref={valueRef}  name={name} id={name} />
                <p className={cl.counter}>{value.length} / {maxLength}</p>
            </div>
            {error && <p className={cl.error}>{error.message}</p>}
              
        </div>
    );
};

