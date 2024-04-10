import HeaderMain from "../../components/header-main/header-main";
import Footer from "../../components/footer/footer";
import "./not-found.css";
import SubscribeForm from "../../components/subscribe/subscribe";

function NotFoundPage() {
 return (
  <>
   <HeaderMain />

   <main className="page">

    <section className="page__hero hero">
     <div className="hero__content">
      <h1 className="hero__title"><span className="hero__error">404</span> Страница не найдена </h1>
      <p className="hero__text">Возможно ваша ссылка устарела</p>
      <button type="button" className="hero__button border__button border__button_light">Перейти на главную</button>
     </div>
    </section>

    <SubscribeForm />
   </main >

   <Footer />
  </>
 )
}

export default NotFoundPage;