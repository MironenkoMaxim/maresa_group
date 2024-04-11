import "./filter.css";

function Filter() {
 return (
  <div className="filter filter__container">
   <ul className="filter__list">
    <li className="filter__item">
     <input type="radio" id="filterAll" name="filter" className="filter__input" checked />
     <label htmlFor="filterAll" className="filter__label">Все</label>
    </li>
    <li className="filter__item">
     <input type="radio" id="filterMaresa" name="filter" className="filter__input" />
     <label htmlFor="filterMaresa" className="filter__label">Maresa Group</label>
    </li>
    <li className="filter__item">
     <input type="radio" id="filterTrend" name="filter" className="filter__input" />
     <label htmlFor="filterTrend" className="filter__label">Trend Toujour</label>
    </li>
   </ul>

   <ul className="sort">
    <li><span className="sort__title">Сортировать по цене: </span></li>
    <li>
     <input type="radio" id="sortUp" name="sort" className="sort__input"/>
     <label htmlFor="sortUp" className="sort__label">
      <svg width={16} height={14} aria-hidden="true">
       <use xlinkHref="#sort-up" />
      </svg>
     </label>
    </li>
    <li>
     <input type="radio" id="sortDown" name="sort" className="sort__input" checked/>
     <label htmlFor="sortDown" className="sort__label">
      <svg width={16} height={14} aria-hidden="true">
       <use xlinkHref="#sort-down" />
      </svg>
     </label>
    </li>
   </ul>
  </div>
 );
}

export default Filter;