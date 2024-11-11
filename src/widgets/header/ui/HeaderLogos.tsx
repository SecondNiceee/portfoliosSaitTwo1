import React, { FC } from 'react';
import LogButton from '../../../shared/ui/LogButton/LogButton';
import cl from "./Header.module.scss";
import { useNavigate } from 'react-router';
interface IHeaderLogos {
    isMenuBurgerList? : boolean
}
const HeaderLogos:FC<IHeaderLogos> = ({isMenuBurgerList = false}) => {
    const navigate = useNavigate()
    const signIn = () => navigate("/login")
    const signUp = () => navigate('/registration')
    return (

        <div className={ isMenuBurgerList ? [cl.headerLogos, cl.menuLogos].join(" ") : cl.headerLogos}>
          <LogButton onClick={signIn} isShine={false} >
            Sign in
            </LogButton>
          <LogButton onClick={signUp}  isShine={true} >
            Sign up
          </LogButton>
        </div>
    );
};

export default React.memo(HeaderLogos);