import React, { FC } from 'react';
import cl from "./FileInput.module.scss";
import Image from '../Image';

interface IMultipleFileInput {
    files : File[],
    deleteFiles : (index : number) => void
}
const MultipleFileInput:FC<IMultipleFileInput> = ({files, deleteFiles}) => {
    return (
        <div className={cl.multipleFileInput}>
            {files.map( (e, i) => {
                return <div key={i} className={cl.imageBlock}>
                    <Image onClick={() => deleteFiles(i)} className={cl.redCross} imageName='redCross.svg' />
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