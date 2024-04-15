import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { slides } from '../../mock/mock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { motion } from 'framer-motion';
import { textVariantsLeft, textVariantsRight } from '../../animation/animation';

register();

function Slider() {

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      speed: 500,
      navigation: true,
      pagination: true,
      loop: true,
      lazy: true,
      autoplay: {
        delay: 2000
      },
      effect: "fade",
      fade: {
        crossFade: false
      },
      injectStyles: [
        `
     .swiper-button-next,
     .swiper-button-prev {
       width: 2.25rem;
       height: 2.25rem;
       border-radius: 50%;
       background-color: var(--light-grey);
       background-repeat: no-repeat;
       background-position: center;
     }
     .swiper-button-next:hover,
     .swiper-button-prev:hover {
      background-color: var(--special-2-hover);
     }
     .swiper-button-prev {
      background-image: url("img/arrow-left.svg");
    }
    .swiper-button-next {
      background-image: url("img/arrow-right.svg");
    }
    .swiper-button-next svg,
    .swiper-button-prev svg {
      display: none;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: var(--white);
     }
     .swiper-pagination-bullet-active {
      background-color: var(--special-2);
     }
  `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false">
      {slides.map((slide) => (
        <swiper-slide key={slide.id}>
          <motion.div className="slider"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <picture>
              <source type="image/png" media="(max-width: 600px)" srcSet={slide.url_600} />
              <source type="image/png" media="(max-width: 1280px)"
                srcSet={slide.url_1280} />
              <img className="slide__img" src={slide.min_1920} srcSet={slide.url_1920}
                alt={slide.title} />
            </picture>

            <div className="slider__info info">
              <motion.p className="info__text"
                variants={textVariantsLeft}
                custom={1}
              >
                <span className="info__title">
                  <span className="info__logo">{slide.brand_name}</span>
                  {slide.title}
                </span>
                <Link className="button info__button" to={AppRoute.catalog}>В каталог</Link>
              </motion.p>
              <motion.picture
                variants={textVariantsRight}
                custom={2}
              >
                <source type="image/png" media="(max-width: 600px)" srcSet={slide.min_600} />
                <img className="info__img" src={slide.url_1920} srcSet={slide.min_1920}
                  alt="Min 1" />
              </motion.picture>
            </div>
          </motion.div>
        </swiper-slide>
      ))
      }
    </swiper-container>
  )
}

export default Slider;