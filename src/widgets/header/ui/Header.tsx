import React, { useState } from "react";
import cl from "./Header.module.scss";
import { menuNavLinks } from "../../../shared/consts";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import LogButton from "../../../shared/ui/LogButton/LogButton";
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
            {menuNavLinks.map((e, i) => {
              return (
                <Link to={e.link} key={i}>
                  {e.title}
                </Link>
              );
            })}
          </nav>

          <div className={cl.headerLogos}>
            <LogButton isShine={false} >
            Sign in
            </LogButton>
            <LogButton  isShine={true} >
            Sign up
            </LogButton>
          </div>
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
        <div className={[cl.headerLogos, cl.menuLogos].join(" ")}>
          <LogButton isShine={false} >
            Sign in
            </LogButton>
          <LogButton  isShine={true} >
            Sign up
          </LogButton>
        </div>
      </div>
    </>
  );
};
