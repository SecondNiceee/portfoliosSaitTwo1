import React from 'react';
import cl from "./FileInput.module.scss";
const SingleFileInput = () => {
    return (
        <label htmlFor="fileInput" className={cl.singleFileInput}>
          <p>Upload a file</p>
        </label>
    );
};

export default SingleFileInput;