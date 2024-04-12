import { SortNames } from "../const";

export function sortProducts(products, value) {
 switch (value) {
  case SortNames.up:
   return products.toSorted((productA, ProductB) => productA.price - ProductB.price);
  case SortNames.down:
   return products.toSorted((productA, ProductB) => ProductB.price - productA.price);
 }
 return products;
}