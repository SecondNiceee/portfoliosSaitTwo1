import React, { CSSProperties, FC, ReactNode } from "react";
import cl from "./StarText.module.scss";
import Image from "../Image";
interface IStarText {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
const StarText: FC<IStarText> = ({ children, className = "", style = {} }) => {
  return (
    <div style={style} className={[cl.starText, className].join(' ')}>
      <Image className={cl.ideaWelcomeImg} imageName="smallStars.svg" />
      <p>{children}</p>
    </div>
  );
};

export default StarText;
