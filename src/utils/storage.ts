import { ProductInterface } from "../types/interfaces"

export function SaveLocalCart (item: ProductInterface[])  {
  return localStorage.LOCAL_CART = JSON.stringify(item);
}

export function getLocalCart () {
  return JSON.parse(localStorage.LOCAL_CART);
}