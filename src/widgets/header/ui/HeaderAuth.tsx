import React from 'react';
import { useAppSelector } from '../../../shared/models';
import { User } from '../../../entities/user';
import HeaderLogos from './HeaderLogos';
const HeaderAuth = () => {
    const user = useAppSelector( state => state.userSlice.user )
    console.log(user)
    return (
        <>
            {user !== null ? <User /> : <HeaderLogos  />}
        </>
    );
};

export default HeaderAuth;