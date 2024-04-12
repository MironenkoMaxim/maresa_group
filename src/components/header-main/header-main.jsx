import "./header-main.css";
import { AppRoute } from "../../const";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import classNames from "classnames";

function HeaderMain() {

  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);

  function handleMobileMenuClick() {
    setOpenMobileMenu((prev) => !prev);
    document.body.classList.toggle('scroll-lock');
  }

  function handleWrapperMenuClick(event) {
    if (event.target.closest('.mobile-menu__inner')) {
      return;
    }
    setOpenMobileMenu((prev) => !prev);
  }

  return (
    <header className="header">
      <div className="header__container container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link link" to={AppRoute.root}>
                Главная
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link link" to={AppRoute.catalog}>
                Каталог
              </NavLink>
            </li>
            <li className="nav__item nav__item_logo">
              <NavLink className="nav__link nav__link_logo" to={AppRoute.root}>
                <img className="nav__img" src="img/logo.svg" alt="Maresa Group" width="129" height="49" />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link link" to={AppRoute.about}>
                О бренде
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link link" to={AppRoute.contacts}>
                Контакты
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className="nav__button"
            onClick={handleMobileMenuClick}
          >
            <svg width={30} height={30} aria-hidden="true">
              <use xlinkHref="#menu-icon" />
            </svg>
          </button>

          <div
            className={classNames(
              "mobile-menu__wrapper",
              { "mobile-menu__wrapper_active": isOpenMobileMenu }
            )}
            onClick={handleWrapperMenuClick}
          >
            <div
              className={classNames(
                "mobile-menu__inner",
                { "mobile-menu_active": isOpenMobileMenu }
              )}>
              <button
                className="mobile-menu__close"
                onClick={handleMobileMenuClick}
              >
                <svg width={16} height={16} aria-hidden="true">
                  <use xlinkHref="#menu-close" />
                </svg>
              </button>
              <ul className="mobile-menu__list">
                <li className="mobile-menu__item">
                  <NavLink className="mobile-menu__link link" to={AppRoute.root}>
                    Главная
                  </NavLink>
                </li>
                <li className="mobile-menu__item">
                  <NavLink className="mobile-menu__link link" to={AppRoute.catalog}>
                    Каталог
                  </NavLink>
                </li>
                <li className="mobile-menu__item">
                  <NavLink className="mobile-menu__link link" to={AppRoute.about}>
                    О бренде
                  </NavLink>
                </li>
                <li className="mobile-menu__item">
                  <NavLink className="mobile-menu__link link" to={AppRoute.contacts}>
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
