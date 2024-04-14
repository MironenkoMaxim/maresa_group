import { useRef, useEffect, useState } from 'react';
import { products } from "../../mock/mock";
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function RelatedProducts({ id }) {

  const navigate = useNavigate();

  const productsRelated = products.filter((product) => product.id !== Number(id));

  function handleCatalogItemClick(id) {
    navigate(`${AppRoute.product}/${id}`);
  }

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      speed: 500,
      navigation: true,
      pagination: true,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16
        },
      },
      injectStyles: [
        `
    .swiper {
     padding-bottom: 3rem;
    }
     .swiper-button-next,
     .swiper-button-prev {
       width: 32px;
       height: 32px;
       border-radius: 50%;
       background-color: var(--light-grey);
       background-repeat: no-repeat;
       background-position: center;
       transform: translateY(-4rem);
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
      background-color: var(--grey);
     }
     .swiper-pagination-bullet-active {
      background-color: var(--special-2);
     }
     .swiper-button-disabled {
      opacity: 0.5;
      pointer-events: none;
     }
  `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="product__related related">
      <h2 className="related__title title">Рекомендуем попробовать</h2>

      <swiper-container ref={swiperRef} init="false">
        {productsRelated.map(({ id, name, url, price, volume }) => (
          <swiper-slide key={id}>
            <div className="catalog__item">
              <div className="catalog__preview-wrapper" onClick={() => handleCatalogItemClick(id)}>
                <img src={url} className="catalog__preview" alt={name} />
              </div>
              <h3 className='catalog__title'>{name}</h3>
              <ul className="catalog__volume catalog-volume">
                {
                  volume.map((value, index) => (
                    <li key={value} className='catalog-volume__item'>
                      {value} мл
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
            </div>
          </swiper-slide>
        ))}
      </swiper-container>

    </div>
  )
}

export default RelatedProducts;