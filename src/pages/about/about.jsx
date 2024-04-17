import HeaderMain from "../../components/header-main/header-main";
import { Helmet } from 'react-helmet-async';
import Footer from "../../components/footer/footer";
import "./about.css";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { textVariantsLeft, textVariantsRight, textScale, opacityDown } from "../../animation/animation";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Maresa Group | О бренде</title>
      </Helmet>

      <HeaderMain />

      <main className="page page_about-brand">

        <motion.section
          className="about-brand"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="about-brand__container container">
            <h1 className="visually-hidden">Происхождение имени бренда</h1>
            <div className="about-brand__hero">
              <motion.div
                className="about-brand__column about-brand__column_text"
                variants={textVariantsLeft}
                custom={1}
              >
                <span className="about-brand__sub">Основан в 2017 году</span>
                <div className="about-brand__logo logo">
                  <span className="logo__sub">MARESA</span>
                  <span className="logo__group">GROUP</span>
                </div>
                <span className="about-brand__text">Бренд профессиональной косметики по уходу за кожей</span>
              </motion.div>
              <motion.div
                className="about-brand__product-img"
                initial={{
                  x: "100%",
                  y: "-50%",
                  opacity: 0
                }}
                animate={{
                  x: "-45%",
                  y: "-50%",
                  opacity: 1
                }}
                transition={{
                  delay: 0.6,
                  duration: 1
                }}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/about-min@600.png" />
                  <img className="about-brand__img" src="img/about@1920.png" srcSet="img/about-min@1920.png"
                    alt="Подробнее о бренде" />
                </picture>
              </motion.div>
              <div className="about-brand__column about-brand__column_img"></div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="about-brand__history history"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="history__container container">
            <h2 className="visually-hidden">История развития бренда</h2>

            <motion.p
              className="history__text main-text"
              variants={textScale}
            >
              MARESA SKINCARE СОЗДАЕТ ПРОДУКТЫ, КОТОРЫЕ ЭФФЕКТИВНО УДОВЛЕТВОРЯЮТ ЕЖЕДНЕВНЫЕ ПОТРЕБНОСТИ В УХОДЕ ЗА КОЖЕЙ, СОХРАНЯЯ ЕЕ ЗДОРОВЬЕ И ЕСТЕСТВЕННУЮ КРАСОТУ.
            </motion.p>

            <div className="history__columns columns">
              <motion.div
                className="columns__item"
                variants={textVariantsLeft}
                custom={1}
              >
                <p className="columns__text">Появлению первой линии профессиональных косметологических средств для ухода за кожей MARESA SKINCARE, впервые представленной на глобальной презентации в Венеции, предшествовали годы кропотливых исследований, проводившихся одновременно в нескольких лабораториях на северо-востоке Италии и в Швейцарии.</p>
              </motion.div>
              <motion.div
                className="columns__item columns__item_img"
                variants={textVariantsRight}
                custom={2}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-serum@600.png" />
                  <img className="columns__img" src="img/brand-serum@1920.png" srcSet="img/brand-serum@1920.png"
                    alt="Увлажяющая сыворотка для лица Maresa" />
                </picture>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="about-brand__technology technology"
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="technology__container container">

            <motion.p
              className="technology__text main-text"
              variants={textScale}
            >
              MARESA SKINCARE - УХОД ЗА КОЖЕЙ И БЕРЕЖНАЯ ЕЕ ЗАЩИТА КАЖДЫЙ ДЕНЬ.
            </motion.p>

            <h2 className="visually-hidden">Технология производства продуктов бренда</h2>
            <div className="technology__columns columns columns_reverse">
              <motion.div
                className="columns__item columns__item_img"
                variants={textVariantsLeft}
                custom={1}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-serum-2@600.png" />
                  <img className="columns__img" src="img/brand-serum-2@1920.png" srcSet="img/brand-serum-2@1920.png"
                    alt="Увлажяющая сыворотка для лица Maresa" />
                </picture>
              </motion.div>
              <motion.div
                className="columns__item columns__item_left"
                variants={textVariantsRight}
                custom={2}
              >
                <p className="columns__text">Команда экспертов марки MARESA SKINCARE, использовав накопленный мировой опыт и наиболее совершенные технологии, смогла разработать инновационные продукты, основу которых составили высокоэффективные и экологически чистые компоненты – дары глубин морей и океанов.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="about-brand__gallery gallery"
          whileInView={'visible'}
          initial='hidden'
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="gallery__container container">
            <h2 className="visually-hidden">Галерея изображений ночного крема</h2>

            <motion.p
              className="gallery__text main-text"
              variants={textScale}
            >
              MARESA SKINCARE - ПРЕДУПРЕЖДЕНИЕ ПРИЗНАКОВ ПРЕЖДЕВРЕМЕННОГО СТАРЕНИЯ КОЖИ.
            </motion.p>

            <div className="gallery__inner">
              <motion.div
                className="gallery__column"
                variants={textVariantsLeft}
                custom={1}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-night@600.png" />
                  <img className="gallery__img" src="img/brand-night@1920.png" srcSet="img/brand-night@1920.png"
                    alt="Увлажяющий ночной крем для лица Maresa" />
                </picture>
              </motion.div>
              <motion.div
                className="gallery__column"
                variants={textVariantsRight}
                custom={2}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-night-2@600.png" />
                  <img className="gallery__img" src="img/brand-night-2@1920.png" srcSet="img/brand-night-2@1920.png"
                    alt="Увлажяющий ночной крем для лица Maresa" />
                </picture>
              </motion.div>
            </div>

          </div>
        </motion.section>

        <motion.section
          className="about-brand__testing testing"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="testing__container container">
            <h2 className="visually-hidden">Тестирование продуктов бренда</h2>

            <motion.p
              className="testing__text main-text"
              variants={textScale}
            >
              MARESA SKINCARE - КОРРЕКЦИЯ ВИДИМЫХ ПРИЗНАКОВ СТАРЕНИЯ КОЖИ И ЕЕ НЕСОВЕРШЕНСТВА.
            </motion.p>

            <div className="testing__columns columns">
              <motion.div
                className="columns__item"
                variants={textVariantsLeft}
                custom={1}
              >
                <p className="columns__text">Многочисленные тестирования новых средств в полной мере подтвердили концепцию бренда и оправдали ожидания исследователей: экологическую чистоту доказали международные лаборатории, эффективность формул проверили высококвалифицированные практикующие косметологи, а нежные текстуры, эффективность и удовольствие от использования по достоинству оценили потребители.</p>
              </motion.div>
              <motion.div
                className="columns__item columns__item_img"
                variants={textVariantsRight}
                custom={2}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/brand-day@600.png" />
                  <img className="columns__img columns__img_s" src="img/brand-day@1920.png" srcSet="img/brand-day@1920.png"
                    alt="Увлажняющий дневной крем для лица Maresa" />
                </picture>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="about-brand__in-catalog in-catalog"
          initial="hidden"
          whileInView="visible"
          variants={opacityDown}
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="in-catalog__container container">
            <div className="in-catalog__inner">
              <Link className="in-catalog__button button button_big" to={AppRoute.catalog}>В каталог</Link>
            </div>
          </div>
        </motion.div>

      </main >

      <Footer />

    </>
  )
}

export default AboutPage;