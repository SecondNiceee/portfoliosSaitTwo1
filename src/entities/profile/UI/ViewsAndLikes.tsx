import React, { FC } from "react";
import cl from "./PortfolioCard.module.scss"
import Image from "../../../shared/ui/Image";
import { TypePortfolio } from "../model/TypePortfolio";
interface IViewsAndLikes{
    portfolio : TypePortfolio
}
const ViewsAndLikes:FC<IViewsAndLikes> = ({portfolio}) => {
  return (
    <div className={cl.viewsAndLikes}>
      <div className={cl.conunterBlock}>
        <Image imageName="like.svg" className={cl.counterImage} />
        <p className={cl.counterText}>{portfolio.likes}</p>
      </div>
      <div className={cl.conunterBlock}>
        <Image imageName="view.svg" className={cl.counterImage} />
        <p className={cl.counterText}>{portfolio.views}</p>
      </div>
    </div>
  );
};

export default ViewsAndLikes;
