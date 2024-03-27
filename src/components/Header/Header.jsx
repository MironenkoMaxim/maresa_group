import "./Header.css";
import Logo from "../img/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Главная
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Каталог
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link_img" href="#">
                <img className="nav__img" src={Logo} alt="Maresa Group" />
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Доставка
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                О бренде
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
