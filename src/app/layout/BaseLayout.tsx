import { FC } from 'react';
import cl from "./BaseLayout.module.scss"
import { Header} from '../../widgets/header/ui/Header';
import { Footer } from '../../widgets/footer';
import { Outlet } from 'react-router-dom';
interface ILayout {
    onlyTop? : boolean
}
export const BaseLayout:FC<ILayout> = ({onlyTop = false}) => {
    return (
        <div className={cl.layout}>
            <Header />
            <Outlet />
            {!onlyTop && <Footer />}
        </div>
    );
};
