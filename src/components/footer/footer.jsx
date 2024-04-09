import { AppRoute } from "../../const";
import "./footer.css"

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
                    <a className="nav-list__link" href={AppRoute.catalog}>Каталог</a>
                  </li>
                  <li className="nav-list__item">
                    <a className="nav-list__link" href={AppRoute.about}>О бренде</a>
                  </li>
                  <li className="nav-list__item">
                    <a className="nav-list__link" href={AppRoute.contacts}>Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column social">
              <a href="tel:+74998403777" className="social__phone">8 (499) 840 37 77</a>
              <a href="mailto:maresa@maresabeauty.com" className="social__email">maresa@maresabeauty.com</a>
            </div>
          </div>
          <div className="footer__copy">
            Copyright ©MARESA 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;