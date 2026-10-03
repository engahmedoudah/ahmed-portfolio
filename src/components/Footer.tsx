import personal from "../data/personal.json";
import site from "../data/site.json";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner page-width">
                <span>{site.copyrightPrefix} {new Date().getFullYear()} {personal.name}</span>
                <a href="#home">{site.backToTop} <span aria-hidden="true">↑</span></a>
            </div>
        </footer>
    );
};

export default Footer;
