import './card-item.css'

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
    <a href="#" className="catalog__link">Подробнее</a>
    <span className="catalog__price">{price} руб</span>
   </div>

  </li>
 )
}

export default CardItem;