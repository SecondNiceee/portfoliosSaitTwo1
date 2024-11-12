import { FC, useMemo } from "react";
import { editorConfig } from "../config/config";
import "./styles.scss";
import PortfolioCreator from "./PortfolioCreator";
import PortfolioChanger from "./PortfolioChanger";

export type determinetType = "create" | "edit"
interface IPortfolioEditor {
  determiner: determinetType;
}
export const PortfolioEfitor: FC<IPortfolioEditor> = ({ determiner }) => {

   const Portfolio = useMemo( () => {
    switch (determiner){
        case "create" :
            return <PortfolioCreator determiner={determiner} />
        case "edit":
            return <PortfolioChanger determiner={determiner} />
    }
   } , [determiner] )
  return (
    <div className="portfolio-editor">
      <header className="portfolio-editor__header">
        {editorConfig[determiner].header}
      </header> 
        {Portfolio}
    </div>
  );
};
