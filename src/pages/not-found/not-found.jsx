import HeaderMain from "../../components/header-main/header-main";
import Footer from "../../components/footer/footer";
import "./not-found.css";
import { Helmet } from "react-helmet-async";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

function NotFoundPage() {
 return (
  <>
   <Helmet>
    <title>Maresa Group | Not found</title>
   </Helmet>

   <HeaderMain />

   <main className="page">

    <section className="page__hero hero">
     <div className="hero__content">
      <h1 className="hero__title"><span className="hero__error">404</span> Страница не найдена </h1>
      <p className="hero__text">Возможно ваша ссылка устарела</p>
      <Link type="button" to={AppRoute.root} className="hero__button border__button border__button_light">Перейти на главную</Link>
     </div>
    </section>

   </main >

   <Footer />
  </>
 )
}

export default NotFoundPage;