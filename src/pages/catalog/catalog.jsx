
import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/footer";
import { useCallback, useState } from "react";
import { FilterNames } from "../../const";
import { sortProducts } from "../../util/util";

function CatalogPage() {

 const [activeFilter, setActiveFilter] = useState(FilterNames.all);

 const [activeSort, setActiveSort] = useState('')

 const filteredProducts = products.filter((product) => {
  if (activeFilter === FilterNames.all) {
   return true;
  }
  return product.brand === activeFilter
 });

 const handleFilterChange = useCallback((value) => {
  setActiveFilter(value);
 }, []);
 
 const handleSortChange = useCallback((value) => {
  setActiveSort(value);
 }, []);

 const sortedProducts = sortProducts(filteredProducts, activeSort);

 return (
  <>
   <HeaderMain />

   <main className="page page_catalog">

    <div className="container">

     <Filter
     activeFilter={activeFilter}
     onChangeActiveFilter={handleFilterChange}
     activeSort={activeSort}
     onChangeActiveSort={handleSortChange}
     />

     <CardList products={sortedProducts} />

    </div>

   </main >

   <Footer />

  </>
 )
}

export default CatalogPage;