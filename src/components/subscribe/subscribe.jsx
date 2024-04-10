import './subscribe.css'

function SubscribeForm() {
 return (
  <section className="subscribe">
   <div className="subscribe__container container">
    <div className="subscribe__inner">
     <div className="subscribe__column">
      <h3 className='subscribe__title title'>Подпишитесь на наши новости</h3>
      <div className="subscribe__input-wrapper">
       <input type="email" placeholder='Ваш E-mail' className='subscribe__input' />
       <button type="button" className='subscribe__button border__button border__button_dark'>Подписаться</button>
      </div>
     </div>
     <div className="subscribe__column">
      <div className="subscribe__img-wrapper">
       <picture>
        <source type="image/png" media="(max-width: 600px)" srcSet="img/subscribe@600.png" />
        <img className="subscribe__img" src="img/subscribe@1920.png" srcSet="img/subscribe@1920.png"
         alt="SOURCE OF AQUA HYALURONIC 3 SERUM на фоне капель росы" />
       </picture>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default SubscribeForm;