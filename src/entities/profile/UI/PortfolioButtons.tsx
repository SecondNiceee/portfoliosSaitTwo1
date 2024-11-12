import LogButton from "../../../shared/ui/LogButton/LogButton";
import cl from "./PortfolioCard.module.scss"
import { useNavigate } from "react-router";
import { TypePortfolio } from "../model/TypePortfolio";
import { FC } from "react";
import { useAppDispatch } from "../../../shared/models";
import { deletePortfolio } from "../model/portfoliosSlice";

interface IPortfolioButton {
    portfolio : TypePortfolio
}
const PortfolioButtons:FC<IPortfolioButton> = ({portfolio}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const deleteFunction = () => {
    dispatch(deletePortfolio({id : portfolio.id}))
  }
  return (
    <>
      <LogButton
        onClick={() => {
          navigate(`/portfolios/${portfolio.id}/edit`);
        }}
        className={cl.portfolioButton}
      >
        <p>Edit this!</p>
      </LogButton>
      <LogButton onClick={deleteFunction} className={cl.portfolioButton}>
        <p>Delete:{"("}</p>
      </LogButton>
    </>
  );
};

export default PortfolioButtons;
