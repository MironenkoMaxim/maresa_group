import MCardItem from "../card-item/card-item";
import './card-list.css';
import { listVariants } from "../../animation/animation";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const CardList = forwardRef(({ products, state }, ref) => {
 return (
  <ul className="catalog" ref={ref}>
   {products.map((product, index) => (
    <MCardItem
     variants={listVariants}
     custom={index}
     key={product.id}
     product={product}
    />
   ))}
  </ul>
 )
});

const MCardList = motion(CardList);

export default MCardList;

