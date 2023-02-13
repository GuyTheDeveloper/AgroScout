import { Link } from "react-router-dom";
import logo from "../../../../assets/img/logo.svg";
import footerVk from "../../../../assets/img/header-vk.svg";
import footerInsta from "../../../../assets/img/header-insta.svg";
import footerTiktok from "../../../../assets/img/header-tiktok.svg";
import "./_footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__left">
            <Link to="/">
              <img
                className="footer__logo"
                width={72}
                height={69}
                src={logo}
                alt="Agroscout"
              />
            </Link>
            <a className="footer__tel" href="tel:78612179118">
              +7861 21791 18
            </a>
          </div>

          <div className="footer__right">
            <p className="footer__text">Подписывайтесь на наши соц. сети</p>
            <div className="footer__nav">
              <a
                className="header__socials"
                href="https://vk.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={footerVk} alt="Vk" />
              </a>
              <a
                className="header__socials"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={footerInsta} alt="Instagram" />
              </a>
              <a
                className="header__socials"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={footerTiktok} alt="Tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
