

import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './main.css';
import { productsTop } from "../../mock/mock";
import SubscribeForm from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";

function MainPage() {
  return (
    <>
      <HeaderMain />

      <main>

        <div className="slider">

          <picture>
            <source type="image/png" media="(max-width: 600px)" srcSet="img/slides/slide_1@600.png 1x" />
            <source type="image/png" media="(max-width: 1280px)"
              srcSet="img/slides/slide_1@1280.png" />
            <img className="slide__img" src="img/slides/slide_1@1920.png" srcSet="img/slides/slide_1@1920.png"
              alt="Slide 1" />
          </picture>

          <div className="slider__info info">
            <p className="info__text">
              <span className="info__title">
                <span className="info__logo">MARESA SKINCARE</span>
                Сердце океана в каждом средстве
              </span>
              <button type="button" className="button info__button">В каталог</button>
            </p>
            <picture>
              <source type="image/png" media="(max-width: 600px)" srcSet="img/slides/min_1@600.png" />
              <img className="info__img" src="img/slides/min_1@1920.png" srcSet="img/slides/min_1@1920.png"
                alt="Min 1" />
            </picture>
          </div>
        </div>

        <section className="popular__catalog">
          <div className="popular__container container">

            <h1 className="visually-hidden">Профессиональная косметика по уходу за кожей лица и волосами</h1>
            <span className="popular__title title">Топ 3 популярных товара для ежедневного ухода</span>

            <CardList products={productsTop} />

          </div>
        </section>

        <section className="about">
          <div className="about__container container">

            <h2 className="visually-hidden">Происхождение имени бренда</h2>

            <div className="about__inner">
              <div className="about__column">
                <p className="about__text">
                  Бренд MARESA SKINCARE был основан в 2017 году. Название образовано от словосочетаний <span className="about__mark">SApare del MARE</span> и <span className="about__mark">SApоre de MARE</span>, что в переводе с итальянского означает «знание моря» и «вкус моря».
                </p>
                <a href="#" className="about__link">Подробнее о бренде</a>
              </div>

              <div className="about__column">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/about@600.png" />
                  <img className="about__img" src="img/about@1920.png" srcSet="img/about@1920.png"
                    alt="Подробнее о бренде" />
                </picture>
              </div>
            </div>

          </div>
        </section>

        <SubscribeForm />

      </main >

      <Footer />
    </>
  )
}

export default MainPage;