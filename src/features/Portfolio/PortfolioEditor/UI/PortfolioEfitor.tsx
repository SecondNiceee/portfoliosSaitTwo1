import React, { FC, useMemo } from 'react';
import { PortfolioForm } from '../../../../widgets/PortfolioForm';
import { empyPortfolio } from '../../../../entities/profile/config/emptyPortfolio';
import { editorConfig } from '../config/config';
import "./styles.scss";
import { TypePortfolio } from '../../../../entities/profile/model/TypePortfolio';
import { useAppDispatch } from '../../../../shared/models';
import { addPortfolio } from '../../../../entities/profile/model/portfoliosSlice';
import { useNavigate } from 'react-router';
import { PortfolioSchema } from '../model/validation';


interface IPortfolioEditor{
    determiner : "create" | "edit"
}
export const PortfolioEfitor:FC<IPortfolioEditor> = ({determiner}) => {


    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const portfolio = useMemo( () => {
        return empyPortfolio
    } , [determiner] )

    const onSumbit = (data:TypePortfolio) => {
        dispatch(addPortfolio(data))
        navigate("/portfolios")
    }



    return (
        <div className='portfolio-editor'>
            <header className='portfolio-editor__header'>{editorConfig[determiner].header}</header>
            <PortfolioForm zodSchema={PortfolioSchema}  submitText={editorConfig[determiner].submitText} submitFunction={onSumbit} portfolio={portfolio} />
        </div>
    );
};
