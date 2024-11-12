import { useEffect, useState } from "react";
import cl from "./Header.module.scss";

import Burger from "./Burger";
import HeaderAuth from "./HeaderAuth";
import MenuHeaderLogos from "./MenuHeaderLogos";
import { useLocation } from "react-router";
import Nav from "./Nav";
export const Header = () => {
  const location = useLocation()
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  useEffect( () => {
    setBurgerOpen(false)
  } , [location.pathname] )

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
          
          <Nav />
          
        <HeaderAuth />
        </div>
      </header>

      <div data-show={burgerOpen ? "show" : ""} className={cl.burgerMenu}>
        <Nav className={cl.burgerMenuNav} />
        <MenuHeaderLogos />
      </div>
    </>
  );
};
