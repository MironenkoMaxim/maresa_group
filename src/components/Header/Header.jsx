import "./header.css";
import Logo from "../img/logo.svg";

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
              <a className="nav__link nav__link_img" href="#">
                <img className="nav__img" src={Logo} alt="Maresa Group" />
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
        </nav>
      </div>
    </header>
  );
}

export default Header;