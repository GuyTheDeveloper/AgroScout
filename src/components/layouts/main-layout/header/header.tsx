import { Link } from "react-router-dom";
import logo from "../../../../assets/img/logo.svg";
import headerPhone from "../../../../assets/img/header-phone.svg";
import headerVk from "../../../../assets/img/header-vk.svg";
import headerInsta from "../../../../assets/img/header-insta.svg";
import headerTiktok from "../../../../assets/img/header-tiktok.svg";
import headerBasket from "../../../../assets/img/header-basket.svg";
import headerMenu from "../../../../assets/img/header-menu.svg";
import headerMobileIcon from "../../../../assets/img/header-mobile-icon.svg";
import headerHome from "../../../../assets/img/header-home.svg";
import headerEntomofag from "../../../../assets/img/header-entomofag.svg";
import headerSpraying from "../../../../assets/img/header-spraying.svg";
import headerCartography from "../../../../assets/img/header-cartography.svg";
import headerCatalog from "../../../../assets/img/header-catalog.svg";
import headerNews from "../../../../assets/img/header-news.svg";
import headerAbout from "../../../../assets/img/header-about.svg";
import headerDropPhone from "../../../../assets/img/header-drop-phone.svg";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWechat2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import "./_header.scss";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo">
              <img src={logo} width={72} height={69} alt="AgroScout" />
            </Link>
            <a href="tel:+7861 21791 18" className="header__left__phone">
              <img src={headerPhone} alt="phone icon" />
              +7861 21791 18
            </a>
          </div>

          <nav className="header__nav">
            <div className="header__socials-wrapper">
              <a
                className="header__socials"
                href="https://vk.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={headerVk} alt="Vk" />
              </a>
              <a
                className="header__socials"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={headerInsta} alt="Instagram" />
              </a>
              <a
                className="header__socials"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={headerTiktok} alt="Tiktok" />
              </a>
            </div>

            <div className="header__lang">
              <button className="header__lang__btns">En</button>
              <button className="header__lang__btns">Ru</button>
            </div>

            <div className="header__wrapper">
              <button className="header__basket">
                <img src={headerBasket} alt="Basket" />
              </button>
              <div
                className="header__menu"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <img src={headerMenu} alt="Menu" />

                <motion.nav
                  className={`header__drop ${
                    isOpen ? "header__drop--active" : ""
                  }`}
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                >
                  <div className="header__drop__top">
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerHome} alt="Home" />
                      </span>
                      Главная
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerEntomofag} alt="Home" />
                      </span>
                      Энтомофаги
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerSpraying} alt="Home" />
                      </span>
                      Опрыскивание
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerCartography} alt="Home" />
                      </span>
                      Картография и мониторинг
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerCatalog} alt="Home" />
                      </span>
                      Каталог продукции
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerNews} alt="Home" />
                      </span>
                      Новости
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerAbout} alt="Home" />
                      </span>
                      O компании
                    </Link>
                    <Link className="header__drop__link" to="/">
                      <span>
                        <img src={headerDropPhone} alt="Home" />
                      </span>
                      Контакты
                    </Link>
                  </div>

                  <div className="header__drop__footer">
                    <a
                      className="header__drop__items"
                      href="https://whatsapp.com"
                      target={"_blank"}
                      rel="noreferrer noopener"
                    >
                      <BsWhatsapp className="header__drop__socials" />
                    </a>
                    <a
                      className="header__drop__items header__drop__tg"
                      href="https://telegram.org"
                      target={"_blank"}
                      rel="noreferrer noopener"
                    >
                      <FaTelegramPlane className="header__drop__socials header__tg" />
                    </a>
                    <a
                      className="header__drop__items"
                      href="https://wechat.com"
                      target={"_blank"}
                      rel="noreferrer noopener"
                    >
                      <RiWechat2Line className="header__drop__socials header__drop__wechat" />
                    </a>
                  </div>
                </motion.nav>
              </div>

              <a className="header__mobile__phone" href="tel:+78612179118">
                <img src={headerMobileIcon} alt="Phone number" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
