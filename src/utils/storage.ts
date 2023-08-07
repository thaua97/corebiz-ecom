import { ProductsInterface } from "../types/interfaces"

export function SaveLocalCart (item: ProductsInterface[])  {
  return localStorage.LOCAL_CART = JSON.stringify(item);
}

export function getLocalCart () {
  const cart = localStorage.LOCAL_CART;
  return cart ? JSON.parse(localStorage.LOCAL_CART) : [] ;
}