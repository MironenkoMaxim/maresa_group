

import Header from "../../components/header/header";
import CardList from "../../components/card-list/card-list";
import './main.css';
import { productsTop } from "../../mock/mock";

function MainPage() {
 return (
  <>
   <Header />

   <main>

    <div className="container-main">

     <CardList products={productsTop} />

     <div className="about">

      <div className="about__column">
       <p>Бренд MARESA LOVE YOURSELF был основан в 2012 году. Название образовано от словосочетаний SApare del MARE и SApоre de MARE, что в переводе с итальянского означает «знание моря» и «вкус моря».</p>

       <a href="#" className="about__link">Подробнее о бренде</a>
      </div>

      <div className="about__column">
       <img className="about__img" src="./src/assets/about.png" alt="Подробнее о бренде" />
      </div>
     </div>

    </div>

   </main >

  </>
 )
}

export default MainPage;