import './card-item.css'

function CardItem(props) {

 const { id, name, url, price } = props.product;

 function handleButtonClick() {
  console.log('нажал кнопку')
 }

 return (
  <li className="catalog__item">

   <img src={url} alt="Карточка товара" width='389' height='381' />

   <h3>{name}</h3>

   <div className="catalog__price">{price}</div>

   <div className="catalog__buttons">

    <button
     type="button"
     className="catalog__button"
     onClick={handleButtonClick}
    >
     Купить
    </button>

    <a href="#" className="catalog__link">Подробнее</a>

   </div>

  </li>
 )
}

export default CardItem;