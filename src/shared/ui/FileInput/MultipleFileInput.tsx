import React, { FC } from 'react';
import cl from "./FileInput.module.scss";
import Image from '../Image';

interface IMultipleFileInput {
    files : File[]
}
const MultipleFileInput:FC<IMultipleFileInput> = ({files}) => {
    return (
        <div className={cl.multipleFileInput}>
            {files.map( (e) => {
                return <div className={cl.imageBlock}>
                    <Image className={cl.image} src={URL.createObjectURL(e)} />
                </div>
            } )}
            {files.length < 3 &&  <label className={cl.uploadLabel} htmlFor="fileInput">
                <p>Добавить фото</p>
            </label> }

        </div>
    );
};

export default MultipleFileInput;