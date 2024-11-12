import React, { CSSProperties, FC } from 'react';

type IImageProps = {
    src?: string;
    imageName?: string;
    className?: string;
    onClick? : () => void
    style?: CSSProperties;
} & (
    | { src: string; imageName?: never}
    | { src?: never; imageName: string}
);
const Image:FC<IImageProps> = ({imageName ,onClick = () => {}, className = "", style = {}, src}) => {
    return (
        <img onClick={onClick} style={style} className={className} src={ src ?? `/images/${imageName}`} alt="" />
    );
};

export default React.memo(Image);