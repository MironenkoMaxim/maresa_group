import "./header-main.css";
import { AppRoute } from "../../const";

function HeaderMain() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href={AppRoute.root}>
                Главная
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href={AppRoute.catalog}>
                Каталог
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link_img" href={AppRoute.root}>
                <img className="nav__img" src="img/logo.svg" alt="Maresa Group" width="129" height="49" />
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href={AppRoute.about}>
                О бренде
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href={AppRoute.contacts}>
                Контакты
              </a>
            </li>
          </ul>

          <button type="button" className="nav__button">
            <svg width={30} height={30} aria-hidden="true">
              <use xlinkHref="#menu-icon" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
