import MCardItem from "../card-item/card-item";
import './card-list.css';
import { listVariants } from "../../animation/animation";

function CardList({ products }) {
 return (
  <ul className="catalog">
   {products.map((product, index) => (
    <MCardItem
     variants={listVariants}
     custom={index}
     key={product.id}
     product={product}
     className="catalog"
     index={index}
    />
   ))}
  </ul>
 )
}

export default CardList;

