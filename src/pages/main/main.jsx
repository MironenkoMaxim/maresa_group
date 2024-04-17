

import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './main.css';
import { productsTop } from "../../mock/mock";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { textVariantsLeft, textVariantsRight, opacityDown } from "../../animation/animation";

function MainPage() {

  return (
    <div className="wrapper">

      <Helmet>
        <title>Maresa Group</title>
      </Helmet>

      <motion.div
        className="wrapper__header"
        initial={{
          y: "-50%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut'
        }}
      >
        <HeaderMain />
      </motion.div>

      <main className="page page_main">

        <motion.div
          className="page__slider"
          initial={{
            y: "20%",
            opacity: 0.3
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
        >
          <Slider />
        </motion.div>

        <motion.section
          className="page__popular popular"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="popular__container container">
            <h1 className="visually-hidden">Профессиональная косметика по уходу за кожей лица и волосами</h1>

            <motion.span
              className="popular__title title"
              variants={opacityDown}
            >Топ 3 популярных товара для ежедневного ухода</motion.span>

            <CardList products={productsTop} />
          </div>
        </motion.section>

        <motion.section
          className="page__about about"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div className="about__container container">

            <h2 className="visually-hidden">Происхождение имени бренда</h2>

            <div className="about__inner">
              <motion.div
                className="about__column"
                variants={textVariantsLeft}
                custom={1}
              >
                <p className="about__text">
                  Бренд MARESA SKINCARE был основан в 2017 году. Название образовано от словосочетаний <span className="about__mark">SApare del MARE</span> и <span className="about__mark">SApоre de MARE</span>, что в переводе с итальянского означает «знание моря» и «вкус моря».
                </p>
                <Link to={AppRoute.about} className="about__link link">Подробнее о бренде</Link>
              </motion.div>

              <motion.div
                className="about__column"
                variants={textVariantsRight}
                custom={2}
              >
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet="img/about@600.png" />
                  <img className="about__img" src="img/about@1920.png" srcSet="img/about@1920.png"
                    alt="Подробнее о бренде" />
                </picture>
              </motion.div>
            </div>

          </div>
        </motion.section>

      </main >

      <Footer />
    </div>
  )
}

export default MainPage;