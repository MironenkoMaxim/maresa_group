import './subscribe.css';
import { textVariantsLeft, textVariantsRight } from "../../animation/animation";
import { motion } from 'framer-motion';

function SubscribeForm() {
  return (
    <motion.section
      className="page__subscribe subscribe"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="subscribe__container container">
        <div className="subscribe__inner">
          <motion.div
            className="subscribe__column"
            variants={textVariantsLeft}
            custom={1}
          >
            <h2 className='subscribe__title title'>Подпишитесь на наши новости</h2>
            <div className="subscribe__input-wrapper">
              <input type="email" placeholder='Ваш E-mail' className='subscribe__input' name="email" autoComplete='email' />
              <button type="button" className='subscribe__button border__button border__button_dark'>Подписаться</button>
            </div>
          </motion.div>
          <motion.div
            className="subscribe__column"
            variants={textVariantsRight}
            custom={2}
          >
            <div className="subscribe__img-wrapper">
              <picture>
                <source type="image/png" media="(max-width: 600px)" srcSet="img/subscribe@600.png" />
                <img className="subscribe__img" src="img/subscribe@1920.png" srcSet="img/subscribe@1920.png"
                  alt="SOURCE OF AQUA HYALURONIC 3 SERUM на фоне капель росы" />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SubscribeForm;