import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/">
                Главная
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/catalog">
                Каталог
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link_img" href="/">
                <img className="nav__img" src="img/logo.svg" alt="Maresa Group" width="129" height="49" />
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/about">
                О бренде
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/contacts">
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

export default Header;