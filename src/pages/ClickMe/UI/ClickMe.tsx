import { technologys } from "../config/technologys";
import "./styles.scss"
export const ClickMe = () => {
    return (
        <section className='click-me'>
            <div className="container">
                <div className="click-me__about">
                    <h3 className="click-me__title">О сайте</h3>
                    <a target="_blank" rel="noopener noreferrer" className="link" href="https://github.com/SecondNiceee/portfoliosSaitTwo1">Git hub</a>
                </div>
                
                <div className="click-me__tblock">
                    <h5 className="click-me__main-text">На сайте вы можете создавать, изменять, удалять портфолио. Из - за отсутствия сервера, после обновления страницы, портфолио пропадут. Регистрация после обновления не пропадает из - за SessionStorage. Несмотря на отсутствие сервера, не бойтесь переходить по ссылкам на сайте, из - за React Router при 'прогулке' по сайту портфолио удаляться не будут!</h5>
                    <div className="technologys">
                        {technologys.map( (e) => {
                            return <p className="technology">{e}</p>
                        } )}
                    </div>
                </div>
            </div>
        </section>
    );
};
