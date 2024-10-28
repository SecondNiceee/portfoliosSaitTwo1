import React, { FC, SetStateAction } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import cl from "./Header.module.scss"
interface IBurger {
    isOpen : boolean,
    setOpen : React.Dispatch<SetStateAction<boolean>>
}
const Burger:FC<IBurger> = ({isOpen, setOpen}) => {
    return (
        <div className={cl.burgerWrapper}>
                <Hamburger size={23} color='white' label={cl.burger} toggled={isOpen} toggle={setOpen} />
        </div>
    );
};

export default Burger;