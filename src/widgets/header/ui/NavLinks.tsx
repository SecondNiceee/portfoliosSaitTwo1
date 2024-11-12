import { menuNavLinks } from '../../../shared/consts';
import {  NavLink } from 'react-router-dom';
import cl from "./Header.module.scss";


const NavLinks = () => {
    return (
        <>
        {menuNavLinks.map((e, i) => {
            return (
              <NavLink style={ e.link === "/clickme" ? {textDecoration : "underline"} : {}} className = {({ isActive }) => isActive && cl.shine  }  to={e.link} key={i}>
                {e.title}
              </NavLink>
            );
          })}
        </>
    );
};

export default NavLinks;