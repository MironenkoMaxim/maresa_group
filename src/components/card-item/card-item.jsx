import './card-item.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function CardItem(props) {

 const { id, name, url, price } = props.product;

 function handleButtonClick() {
  console.log('нажал кнопку')
 }

 return (
  <li className="catalog__item">

   <div className="catalog__preview-wrapper">
    <img src={url} className="catalog__preview" alt="Карточка товара" />
   </div>

   <h3 className='catalog__title'>{name}</h3>

   <div className="catalog__bottom">
    <Link className="catalog__link" to={`${AppRoute.product}/${id}`}>Подробнее
    </Link>
    <span className="catalog__price">{price} руб</span>
   </div>

  </li>
 )
}

export default CardItem;