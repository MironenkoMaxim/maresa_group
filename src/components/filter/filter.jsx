import "./filter.css";
import { FilterMap, SortMap } from "../../const";

function Filter({ activeFilter, activeSort, onChangeActiveFilter, onChangeActiveSort }) {
 return (
  <div className="filter filter__container">
   <ul className="filter__list">
    {FilterMap.map((value, index) => (
     <li className="filter__item" key={value}>
      <input
       type="radio"
       id={`filter${index}`}
       name="filter"
       className="filter__input"
       checked={value === activeFilter}
       onChange={() => onChangeActiveFilter(value)}
      />
      <label htmlFor={`filter${index}`} className="filter__label">{value}</label>
     </li>
    ))}
   </ul>

   <ul className="sort">
    <li><span className="sort__title">Сортировать по цене: </span></li>
    {
     SortMap.map((value) => (
      <li key={value}>
       <input
        type="radio"
        id={`sort${value}`}
        name="sort"
        className="sort__input"
        onChange={() => onChangeActiveSort(value)}
        checked={activeSort === value}
       />
       <label htmlFor={`sort${value}`} className="sort__label">
        <svg width={16} height={14} aria-hidden="true">
         <use xlinkHref={`#sort-${value}`} />
        </svg>
       </label>
      </li>
     ))
    }
   </ul>
  </div>
 );
}

export default Filter;