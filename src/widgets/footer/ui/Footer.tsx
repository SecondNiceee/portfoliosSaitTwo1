import cl from "./Footer.module.scss"
export const Footer = () => {
    return (
        <section className={cl.footer}>
            <div className={cl.footerContainer}>
                    <p className={cl.footerLeft}>© 2024 Click Craft. All rights reserved.</p>
                    <div className={cl.footerLinks}>
                        <p className = {cl.footerLink}>Terms of Service</p>
                        <p className={cl.footerLink}>Privacy Policy</p>
                        <p className={cl.footerLink}>Cookies</p>
                    </div>
            </div>
        </section>
    );
};
