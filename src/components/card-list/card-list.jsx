import CardItem from "../card-item/card-item";
import './card-list.css';

const products = [
 {
  id: 1,
  name: 'Товар 1',
  price: 4500,
  rating: 5,
  url: 'src/components/img/card-preview_1.png'
 },
 {
  id: 2,
  name: 'Товар 2',
  price: 10000,
  rating: 2,
  url: 'src/components/img/card-preview_2.png'
 },
 {
  id: 3,
  name: 'Товар 3',
  price: 2,
  rating: 5,
  url: 'src/components/img/card-preview_3.png'
 },
 {
  id: 4,
  name: 'Товар 4',
  price: 50,
  rating: 5,
  url: 'src/components/img/card-preview_4.png'
 },
 {
  id: 5,
  name: 'Товар 5',
  price: 2000,
  rating: 2,
  url: 'src/components/img/card-preview_1.png'
 },
 {
  id: 6,
  name: 'Товар 6',
  price: 6000,
  rating: 3,
  url: 'src/components/img/card-preview_3.png'
 },
]

function CardList() {

 const productsPopular = products.filter((product) => product.rating === 5);

 console.log(productsPopular)

 return (
  <ul className="catalog">
   {productsPopular.map((product) => (
    <CardItem key={product.id} product={product} />
   ))}
  </ul>
 )
}

export default CardList;