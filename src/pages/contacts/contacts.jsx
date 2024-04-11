
import HeaderMain from "../../components/header-main/header-main";
import './contacts.css';
import Footer from "../../components/footer/footer";

function ContactsPage() {
 return (
  <>
   <HeaderMain />

   <main className="page page_contacts">

    <section className="contacts">
     <div className="contacts__container container">
      <div className="contacts__inner">
       <h1 className="contacts__title title">Контакты</h1>
       <ul className="contacts__list">
        <li>Общество с ограниченной ответственностью «МАРЕСА ГРУПП»</li>
        <li>ОГРН 1 172 375 098 400</li>
        <li>Юридический адрес: 123290, г. Москва, 1-й Магистральный тупик, д. 5а, офис 32</li>
        <li>Мы будем рады ответить на ваши вопросы 7 дней в неделю с 10:00 до 20:00 (по московскому времени): 8 (499) 840 37 77</li>
        <li>Адрес электронной почты: <a href="mailto:maresa@maresabeauty.com" className="contacts__email">maresa@maresabeauty.com</a></li>
       </ul>
      </div>
     </div>
    </section>

   </main >

   <Footer />

  </>
 )
}

export default ContactsPage;