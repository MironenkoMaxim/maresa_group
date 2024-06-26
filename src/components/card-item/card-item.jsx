import './card-item.css';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const CardItem = forwardRef((props, ref) => {

 const { id, name, url, price, volume, countUnit } = props.product;

 const navigate = useNavigate();

 function handleCatalogItemClick() {
  navigate(`${AppRoute.product}/${id}`);
 }

 return (
  <li ref={ref} className="catalog__item">
   <div className="catalog__preview-wrapper" onClick={handleCatalogItemClick}>
    <img src={url} className="catalog__preview" alt="Карточка товара" />
   </div>

   <h3 className='catalog__title'>{name}</h3>

   <ul className="catalog__volume catalog-volume">
    {
     volume.map((value, index) => (
      <li key={value} className='catalog-volume__item'>
       {value} {countUnit}
       {index + 1 !== volume.length && <span className='catalog-volume__del'>|</span>}
      </li>
     ))
    }
   </ul>

   <div className="catalog__bottom">
    <Link className="catalog__link link" to={`${AppRoute.product}/${id}`}>Подробнее
    </Link>
    <span className="catalog__price">{price} руб</span>
   </div>

  </li>
 )
});

const MCardItem = motion(CardItem);

export default MCardItem;