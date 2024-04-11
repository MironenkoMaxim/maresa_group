
import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/footer";

function CatalogPage() {
 return (
  <>
   <HeaderMain />

   <main className="page page_catalog">

    <div className="container">

     <Filter />

     <CardList products={products} />

    </div>

   </main >

   <Footer />

  </>
 )
}

export default CatalogPage;