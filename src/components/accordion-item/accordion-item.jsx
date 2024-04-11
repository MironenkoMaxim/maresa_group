import classNames from "classnames";
import { useState } from "react";

function AccordionItem({ item }) {

 const [isActive, setIsActive] = useState(false);

 return (
  <div className="accordion__item">
   <div
    className="accordion__title"
    onClick={() => setIsActive(!isActive)}
   >
    <span className="accordion__name">{item.title}</span>
    <button type="button"
     className={classNames(
      'accordion__button',
      { 'accordion__button_active': isActive }
     )}>
     <svg width={26} height={26} aria-hidden="true">
      <use xlinkHref="#plus" />
     </svg>
    </button>
   </div>
   <div className={classNames(
    "accordion___content",
    { "accordion___content_active": isActive }
   )}
   >
    <ul>
     {item.content.map((value) => (
      <li key={value}>{value}</li>
     ))}
    </ul>
   </div>
  </div>

 )
}

export default AccordionItem;