import { FC } from 'react';
import cl from "./Header.module.scss"
import NavLinks from './NavLinks';
interface INav{
    className? : string
}
const Nav:FC<INav> = ({className = ""}) => {
    return (
        <nav className={`${cl.headerNav} ${className}`}>
            <NavLinks />
        </nav>
    );
};

export default Nav;