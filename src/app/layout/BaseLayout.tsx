import React, { ReactNode } from 'react';
import cl from "./BaseLayout.module.scss"
import { Header} from '../../widgets/header/ui/Header';
import { Footer } from '../../widgets/footer';
import { Outlet } from 'react-router-dom';
export const BaseLayout = () => {
    return (
        <div className={cl.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
