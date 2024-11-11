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
}
export const FileInput: FC<IFileInput> = ({
  files,
  maxLength,
  setFiles,
  title,
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
    }
  };

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  return (
    <div className={cl.fileInputWrapper}>
      <p className={cl.fileInputTitle}>{title}</p>
      <div className={cl.fileInput}>
        {files.length ? (
          <MultipleFileInput files={files} />
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
    </div>
  );
};
