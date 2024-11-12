import React, { useState } from "react";
import cl from "./Header.module.scss";
import { menuNavLinks } from "../../../shared/consts";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import LogButton from "../../../shared/ui/LogButton/LogButton";
import HeaderLogos from "./HeaderLogos";
import HeaderAuth from "./HeaderAuth";
import MenuHeaderLogos from "./MenuHeaderLogos";
export const Header = () => {
  console.log("Рендер хэдера")
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  return (
    <>
      <header className={cl.header}>
        <div className={cl.headerContainer}>
          <div className={cl.headerLogoBlock}>
            <p className={cl.headerLogo}>
              Click<span>Craft</span>
            </p>
            <Burger isOpen={burgerOpen} setOpen={setBurgerOpen} />
          </div>
          <nav className={cl.headerNav}>
            {menuNavLinks.map((e, i) => {
              return (
                <Link to={e.link} key={i}>
                  {e.title}
                </Link>
              );
            })}
          </nav>
          
        <HeaderAuth />
        </div>
      </header>

      <div data-show={burgerOpen ? "show" : ""} className={cl.burgerMenu}>
        <nav className={[cl.headerNav, cl.burgerMenuNav].join(' ')}>
          {menuNavLinks.map((e, i) => {
            return (
              <Link to={e.link} key={i}>
                {e.title}
              </Link>
            );
          })}
        </nav>

        
        <MenuHeaderLogos />

      </div>
    </>
  );
};
