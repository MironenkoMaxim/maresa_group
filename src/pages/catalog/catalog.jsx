
import HeaderMain from "../../components/header-main/header-main";
import MCardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/footer";
import { useCallback, useState } from "react";
import { FilterNames } from "../../const";
import { sortProducts } from "../../util/util";
import { Helmet } from "react-helmet-async";

function CatalogPage() {

  const [state, setState] = useState(1);

  const [activeFilter, setActiveFilter] = useState(FilterNames.all);

  const [activeSort, setActiveSort] = useState('')

  const filteredProducts = products.filter((product) => {
    if (activeFilter === FilterNames.all) {
      return true;
    }
    return product.brand === activeFilter;
  });

  const handleFilterChange = useCallback((value) => {
    setActiveFilter(value);
    setState((prev) => prev + 1);
  }, []);

  const handleSortChange = useCallback((value) => {
    setActiveSort(value);
    setState((prev) => prev + 1);
  }, []);

  const sortedProducts = sortProducts(filteredProducts, activeSort);

  return (
    <>
      <Helmet>
        <title>Maresa Group | Каталог</title>
      </Helmet>

      <HeaderMain />

      <main className="page page_catalog">

        <div className="container">

          <Filter
            activeFilter={activeFilter}
            onChangeActiveFilter={handleFilterChange}
            activeSort={activeSort}
            onChangeActiveSort={handleSortChange}
          />

          <MCardList
            initial="hidden"
            animate="visible"
            products={sortedProducts}
            key={state} />

        </div>

      </main >

      <Footer />

    </>
  )
}

export default CatalogPage;