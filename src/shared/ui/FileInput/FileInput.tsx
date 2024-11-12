import React, { FC, SetStateAction, useEffect } from "react";
import cl from "./FileInput.module.scss";
import Image from "../Image";
import MultipleFileInput from "./MultipleFileInput";
import SingleFileInput from "./SingleFileInput";
interface IFileInput {
  setFiles: React.Dispatch<SetStateAction<File[]>>;
  files: File[];
  maxLength: number;
  title: string;
  error : null | {message : string};
  setError : React.Dispatch<SetStateAction<null | {message : string}>>
}
export const FileInput: FC<IFileInput> = ({
  files,
  maxLength,
  setFiles,
  title,
  error,
  setError
}) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setFiles((value) => [
        ...value,
        ...Array.from(e.target.files as FileList).slice(
          0,
          maxLength - files.length
        ),
      ]);
      if (error && e.target.files.length){
          setError(null)
      }
    }
  };

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const deleteFile = (index:number) => {
    const newFileArray = files.filter((e,i) => i !== index)
    if (!newFileArray.length){
        setError({message : "Upload at least one file."})
    }
    setFiles(files.filter((e,i) => i !== index))
  }

  return (
    <div className={cl.fileInputWrapper}>
      <p className={cl.fileInputTitle}>{title}</p>
      <div className={cl.fileInput}>
        {files.length ? (
          <MultipleFileInput deleteFiles={deleteFile} files={files} />
        ) : (
          <SingleFileInput />
        )}

        <input
          accept="image/*"
          onChange={changeHandler}
          className={cl.input}
          multiple
          maxLength={maxLength}
          id="fileInput"
          type="file"
        />
      </div>
      {error && <p className={cl.error}>{error.message}</p>}
    </div>
  );
};
