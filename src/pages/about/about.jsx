import HeaderMain from "../../components/header-main/header-main";
import Footer from "../../components/footer/footer";
import "./about.css";

function AboutPage() {
 return (
  <>
   <HeaderMain />

   <main className="page page_about-brand">

    <section className="about-brand">
     <div className="about-brand__container container">
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

     <div className="about-brand__container container">
      <p className="about-brand__main-text">
       MARESA SKINCARE СОЗДАЕТ ПРОДУКТЫ, КОТОРЫЕ ЭФФЕКТИВНО УДОВЛЕТВОРЯЮТ ЕЖЕДНЕВНЫЕ ПОТРЕБНОСТИ В УХОДЕ ЗА КОЖЕЙ, СОХРАНЯЯ ЕЕ ЗДОРОВЬЕ И ЕСТЕСТВЕННУЮ КРАСОТУ.
      </p>
     </div>
    </section>

   </main >

   <Footer />

  </>
 )
}

export default AboutPage;