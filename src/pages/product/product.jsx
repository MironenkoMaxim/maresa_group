import HeaderMain from "../../components/header-main/header-main";
import Footer from "../../components/footer/footer";
import "./product.css";
import Accordion from "../../components/accordion/accordion";
import { productsFull } from "../../mock/mock";
import { useParams } from 'react-router-dom';
import CardList from "../../components/card-list/card-list";
import { productsRelated } from "../../mock/mock";
import { useState } from "react";

function ProductPage() {

  const { id } = useParams();

  const product = productsFull.find((product) => product.id == id);

  const [volume, setVolume] = useState(
    product.volume[0]
  );

  const price = product.price[volume];

  function handleInputChange(value) {
    setVolume(value);
  }

  return (
    <>
      <HeaderMain />

      <main className="page page_product">

        <section className="page__product product">
          <div className="product__container">
            <div className="product__inner">
              <div className="product__column product__column_img">
                <picture>
                  <source type="image/png" media="(max-width: 600px)" srcSet={product.url_600} />
                  <img className="product__img" src={product.url} srcSet={product.url}
                    alt={product.description} />
                </picture>
              </div>

              <div className="product__column product__column_title">
                <span className="product__number">{product.number}</span>
                <h1 className="product__title">{product.name}</h1>
                <p className="product__text">{product.description}</p>
                <div className="product__price">{price} руб</div>
                <div className="product__volume volume">
                  <ul className="volume__list">
                    {product.volume.map((value) => (
                      <li key={value} className="volume__item">
                        <input type="radio" id={`volume${value}`} name="volume" className="volume__input"
                          onChange={() => handleInputChange(value)}
                          checked={value === volume}
                        />
                        <label htmlFor={`volume${value}`} className="volume__label">{value} мл</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="product__column product__column_accordion">
                <ul className="product__list">
                  {product.full_description.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>

                {product.add_info &&
                  <ul className="product__add-info">
                    {product.add_info.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                }

                <Accordion items={product.accordion} />
              </div>
            </div>

            <div className="product__related related">
              <h2 className="related__title title">Рекомендуем попробовать</h2>

              <CardList products={productsRelated} />
            </div>
          </div>
        </section>

      </main >

      <Footer />
    </>
  )
}

export default ProductPage;