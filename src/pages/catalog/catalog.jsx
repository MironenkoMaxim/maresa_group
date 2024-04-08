

import Header from "../../components/header/header";
import CardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";

function CatalogPage() {
 return (
  <>
   <Header />

   <main>

    <div className="container">

     <CardList products={products} />

    </div>

   </main >

  </>
 )
}

export default CatalogPage;