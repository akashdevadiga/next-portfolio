import './footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Akash</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about"
                            className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio"
                            className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills"
                            className="footer__link">Skills</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/akash_devadiga_/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akash-devadiga/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/akashdevadiga" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; All Rights Reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;