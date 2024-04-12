import HeaderMain from "../../components/header-main/header-main";
import { Helmet } from 'react-helmet-async';
import Footer from "../../components/footer/footer";
import "./about.css";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import SubscribeForm from "../../components/subscribe/subscribe";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Maresa Group | О бренде</title>
      </Helmet>

      <HeaderMain />

      <main className="page page_about-brand">

        <section className="about-brand">
          <div className="about-brand__container container">
            <h1 className="visually-hidden">Происхождение имени бренда</h1>
            <div className="about-brand__hero">
              <div className="about-brand__column about-brand__column_text">
                <span className="about-brand__sub">Основан в 2017 году</span>
                <div className="about-brand__logo logo">
                  <span className="logo__sub">MARESA</span>
                  <span className="logo__group">GROUP</span>
                </div>
                <span className="about-brand__text">Бренд профессиональной косметики по уходу за кожей</span>
              </div>
              <div className="about-brand__product-img">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/about-min@600.png" />
                  <img className="about-brand__img" src="img/about@1920.png" srcSet="img/about-min@1920.png"
                    alt="Подробнее о бренде" />
                </picture>
              </div>
              <div className="about-brand__column about-brand__column_img"></div>
            </div>
          </div>
        </section>

        <section className="about-brand__history history">
          <div className="history__container container">
            <h2 className="visually-hidden">История развития бренда</h2>

            <p className="history__text main-text">
              MARESA SKINCARE СОЗДАЕТ ПРОДУКТЫ, КОТОРЫЕ ЭФФЕКТИВНО УДОВЛЕТВОРЯЮТ ЕЖЕДНЕВНЫЕ ПОТРЕБНОСТИ В УХОДЕ ЗА КОЖЕЙ, СОХРАНЯЯ ЕЕ ЗДОРОВЬЕ И ЕСТЕСТВЕННУЮ КРАСОТУ.
            </p>

            <div className="history__columns columns">
              <div className="columns__item">
                <p className="columns__text">Появлению первой линии профессиональных косметологических средств для ухода за кожей MARESA SKINCARE, впервые представленной на глобальной презентации в Венеции, предшествовали годы кропотливых исследований, проводившихся одновременно в нескольких лабораториях на северо-востоке Италии и в Швейцарии.</p>
              </div>
              <div className="columns__item columns__item_img">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-serum@600.png" />
                  <img className="columns__img" src="img/brand-serum@1920.png" srcSet="img/brand-serum@1920.png"
                    alt="Увлажяющая сыворотка для лица Maresa" />
                </picture>
              </div>
            </div>

            <p className="main-text">
              MARESA SKINCARE - УХОД ЗА КОЖЕЙ И БЕРЕЖНАЯ ЕЕ ЗАЩИТА КАЖДЫЙ ДЕНЬ.
            </p>
          </div>
        </section>

        <section className="about-brand__technology technology">
          <div className="technology__container container">
            <h2 className="visually-hidden">Технология производства продуктов бренда</h2>
            <div className="technology__columns columns columns_reverse">
              <div className="columns__item columns__item_img">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-serum-2@600.png" />
                  <img className="columns__img" src="img/brand-serum-2@1920.png" srcSet="img/brand-serum-2@1920.png"
                    alt="Увлажяющая сыворотка для лица Maresa" />
                </picture>
              </div>
              <div className="columns__item columns__item_left">
                <p className="columns__text">Команда экспертов марки MARESA SKINCARE, использовав накопленный мировой опыт и наиболее совершенные технологии, смогла разработать инновационные продукты, основу которых составили высокоэффективные и экологически чистые компоненты – дары глубин морей и океанов.</p>
              </div>
            </div>

            <p className="main-text">
              MARESA SKINCARE - ПРЕДУПРЕЖДЕНИЕ ПРИЗНАКОВ ПРЕЖДЕВРЕМЕННОГО СТАРЕНИЯ КОЖИ.
            </p>
          </div>
        </section>

        <section className="about-brand__gallery gallery">
          <div className="gallery__container container">
            <h2 className="visually-hidden">Галерея изображений ночного крема</h2>
            <div className="gallery__inner">
              <div className="gallery__column">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-night@600.png" />
                  <img className="gallery__img" src="img/brand-night@1920.png" srcSet="img/brand-night@1920.png"
                    alt="Увлажяющий ночной крем для лица Maresa" />
                </picture>
              </div>
              <div className="gallery__column">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-night-2@600.png" />
                  <img className="gallery__img" src="img/brand-night-2@1920.png" srcSet="img/brand-night-2@1920.png"
                    alt="Увлажяющий ночной крем для лица Maresa" />
                </picture>
              </div>
            </div>

            <p className="main-text">
              MARESA SKINCARE - КОРРЕКЦИЯ ВИДИМЫХ ПРИЗНАКОВ СТАРЕНИЯ КОЖИ И ЕЕ НЕСОВЕРШЕНСТВА.
            </p>
          </div>
        </section>

        <section className="about-brand__testing testing">
          <div className="testing__container container">
            <h2 className="visually-hidden">Тестирование продуктов бренда</h2>
            <div className="testing__columns columns">
              <div className="columns__item">
                <p className="columns__text">Многочисленные тестирования новых средств в полной мере подтвердили концепцию бренда и оправдали ожидания исследователей: экологическую чистоту доказали международные лаборатории, эффективность формул проверили высококвалифицированные практикующие косметологи, а нежные текстуры, эффективность и удовольствие от использования по достоинству оценили потребители.</p>
              </div>
              <div className="columns__item columns__item_img">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-day@600.png" />
                  <img className="columns__img columns__img_s" src="img/brand-day@1920.png" srcSet="img/brand-day@1920.png"
                    alt="Увлажняющий дневной крем для лица Maresa" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <div className="about-brand__in-catalog in-catalog">
          <div className="in-catalog__container container">
            <div className="in-catalog__inner">
              <Link className="in-catalog__button button button_big" to={AppRoute.catalog}>В каталог</Link>
            </div>
          </div>
        </div>

        <div className="about-brand__subscribe">
          <SubscribeForm />
        </div>
      </main >

      <Footer />

    </>
  )
}

export default AboutPage;