import CardItem from "../card-item/card-item";
import './card-list.css';

function CardList({products}) {
 return (
  <ul className="catalog">
   {products.map((product) => (
    <CardItem key={product.id} product={product} />
   ))}
  </ul>
 )
}

export default CardList;