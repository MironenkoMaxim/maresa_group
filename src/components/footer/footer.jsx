import { AppRoute } from "../../const";
import "./footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__wrapper">
          <div className="footer__inner">
            <div className="footer__column">
              <nav className="footer__nav footer-nav">
                <ul className="footer__nav-list nav-list">
                  <li className="nav-list__item">
                    <Link className="nav-list__link link" to={AppRoute.catalog}>Каталог</Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link link" to={AppRoute.about}>О бренде</Link>
                  </li>
                  <li className="nav-list__item">
                    <Link className="nav-list__link link" to={AppRoute.contacts}>Контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column social">
              <a href="tel:+74998403777" className="social__phone">8 (499) 840 37 77</a>
              <a href="mailto:maresa@maresagroup.ru" className="social__email">maresa@maresagroup.ru</a>
            </div>
          </div>
          <div className="footer__copy">
            Copyright © MARESA GROUP 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;