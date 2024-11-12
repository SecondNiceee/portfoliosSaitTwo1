import React, { FC } from 'react';
import { TypePortfolio } from '../model/TypePortfolio';
import cl from "./PortfolioCard.module.scss"
import Image from '../../../shared/ui/Image';
import ViewsAndLikes from './ViewsAndLikes';
import PortfolioButtons from './PortfolioButtons';

interface IPortfolioCard{
    portfolio : TypePortfolio
}
export const PortfolioCard:FC<IPortfolioCard> = ({portfolio}) => {
    
    return (
        <div className={cl.portfolioCard}>
            <div className={cl.portfolioCardContainer}>
                <Image src={ URL.createObjectURL(portfolio.photos[0])} className={cl.portfolioPreview}  />
                <div className={cl.profileCardOptions}>
                    <PortfolioButtons portfolio={portfolio} />
                    <ViewsAndLikes portfolio={portfolio} />
                </div>
            </div>
        </div>
    );
};
