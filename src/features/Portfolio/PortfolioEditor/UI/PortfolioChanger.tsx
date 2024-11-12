import  { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import usePortfolioById from '../model/findPortfolioById';
import { PortfolioForm } from '../../../../widgets/PortfolioForm';
import { PortfolioSchema } from '../model/validation';
import { editorConfig } from '../config/config';
import { determinetType } from './PortfolioEfitor';
import { TypePortfolio } from '../../../../entities/profile/model/TypePortfolio';
import { useAppDispatch } from '../../../../shared/models';
import { changePortfolio } from '../../../../entities/profile/model/portfoliosSlice';


interface IPortfolioChange{
    determiner: determinetType;
}
const PortfolioChanger:FC<IPortfolioChange> = ({determiner}) => {

    const dispatch = useAppDispatch()

    const { id } = useParams();

    const portfolio = usePortfolioById({ id: Number(id) });

    const navigate = useNavigate()

    const onSumbit = (data:Omit<TypePortfolio , "id">) => {
        dispatch(changePortfolio({id : Number(id), portfolio : data}))
        navigate("/portfolios")

    }

    return (
        <>
            {portfolio ? (
                <PortfolioForm
                cancelButton = {true}
                zodSchema={PortfolioSchema}
                submitText={editorConfig[determiner].submitText}
                submitFunction={onSumbit}
                portfolio={portfolio}
                />
            ) : (
                <p className="error-portfolio">There is no portfolio with this id</p>
            )}
        </>
    );
};

export default PortfolioChanger;