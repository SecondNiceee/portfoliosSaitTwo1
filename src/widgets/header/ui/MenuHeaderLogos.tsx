import React from 'react';
import { useAppSelector } from '../../../shared/models';
import HeaderLogos from './HeaderLogos';

const MenuHeaderLogos = () => {
    const user = useAppSelector(state => state.userSlice.user)
    return (
        <>
        {
            !user ? <HeaderLogos isMenuBurgerList = {true} /> : <> </>   
        }
        </>
    );
};

export default MenuHeaderLogos;