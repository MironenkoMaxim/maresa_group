import classNames from "classnames";
import './accordion.css';
import AccordionItem from "../accordion-item/accordion-item";

function Accordion({ items }) {

 return (
  <div className="product__accordion accordion">
   {items.map((item) => (
    <AccordionItem key={item.title} item={item} />
   ))}
  </div>
 )
}

export default Accordion;