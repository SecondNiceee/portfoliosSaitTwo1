import { useState } from "react";
import cl from "./Header.module.scss";

import Burger from "./Burger";
import HeaderAuth from "./HeaderAuth";
import MenuHeaderLogos from "./MenuHeaderLogos";
import NavLinks from "./NavLinks";
export const Header = () => {
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
          <NavLinks />
          </nav>
          
        <HeaderAuth />
        </div>
      </header>

      <div data-show={burgerOpen ? "show" : ""} className={cl.burgerMenu}>
        <nav className={[cl.headerNav, cl.burgerMenuNav].join(' ')}>
        <NavLinks />
        </nav>

        
        <MenuHeaderLogos />

      </div>
    </>
  );
};
