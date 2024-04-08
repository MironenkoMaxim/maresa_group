
import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";

function CatalogPage() {
 return (
  <>
   <HeaderMain />

   <main>

    <div className="container">

     <CardList products={products} />

    </div>

   </main >

  </>
 )
}

export default CatalogPage;