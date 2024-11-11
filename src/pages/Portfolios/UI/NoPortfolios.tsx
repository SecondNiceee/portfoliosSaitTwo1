import React from 'react';
import LogButton from '../../../shared/ui/LogButton/LogButton';
import { useNavigate } from 'react-router';

const NoPortfolios = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate("/create")
    }
    return (
        <div className='no-portfolios'>
            <p className='no-portfolios__text'>U have not portfolios</p>
            <LogButton className='no-portfolios__button' onClick={clickHandler}>
                <p>Create</p>
            </LogButton>
            
        </div>
    );
};

export default NoPortfolios;