import  { FC } from 'react';
import { PortfolioForm } from '../../../../widgets/PortfolioForm';
import { PortfolioSchema } from '../model/validation';
import { editorConfig } from '../config/config';
import { empyPortfolio } from '../../../../entities/profile/config/emptyPortfolio';
import { useAppDispatch } from '../../../../shared/models';
import { addPortfolio } from '../../../../entities/profile/model/portfoliosSlice';
import { useNavigate } from 'react-router';
import { TypePortfolio } from '../../../../entities/profile/model/TypePortfolio';
import { determinetType } from './PortfolioEfitor';

interface IPortfolioCreator{
    determiner : determinetType
}
const PortfolioCreator:FC<IPortfolioCreator> = ({determiner}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSumbit = (data: Omit<TypePortfolio, "id">) => {
        dispatch(addPortfolio(data));
        navigate("/portfolios");
      };

    return (
         
            <PortfolioForm
            zodSchema={PortfolioSchema}
            submitText={editorConfig[determiner].submitText}
            submitFunction={onSumbit}
            portfolio={empyPortfolio}
            />
    );
};

export default PortfolioCreator;