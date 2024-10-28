import React, { CSSProperties, FC } from 'react';

interface IImageProps{
    imageName : string,
    className? : string,
    style? : CSSProperties
}
const Image:FC<IImageProps> = ({imageName , className = "", style = {}}) => {
    return (
        <img style={style} className={className} src={`images/${imageName}`} alt="" />
    );
};

export default React.memo(Image);