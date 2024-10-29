import React, { FC } from "react";
import StarText from "../../../../shared/ui/StarText/StarText";
import { TPortfolio } from "../../config";
import { places } from "../../config/places";
import Image from "../../../../shared/ui/Image";

const Portfolio: FC<TPortfolio> = ({ description, image, place, title }) => {
  return (
    <div className="portfolio-wrapper">
      <div className="liner-block"></div>
      <div className="portfolio">
        <div className="portfolio__text-block">
          <StarText className="portfolio__star-text">
            {places[place - 1]} place
          </StarText>
          <h3 className="portfolio__header">{title}</h3>
          <p className="portfolio__description">{description}</p>
        </div>
        <Image className="portfolio__image" imageName={image} />
      </div>
    </div>
  );
};

export default React.memo(Portfolio);
