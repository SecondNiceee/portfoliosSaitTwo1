import React from 'react';
import cl from "./User.module.scss"
import { useAppSelector } from '../../../shared/models';
import Image from '../../../shared/ui/Image';
import { Link } from 'react-router-dom';

export const User = () => {
    const name = useAppSelector(state => state.userSlice.user?.firstName)
    return (
        <Link to={"/"} className={cl.user}>
            <p className={cl.userName}>{name}</p>
            <Image className={cl.userImage} imageName='userProfile.svg' />
        </Link>
    );
};
