import { useContext } from "react";
import Context from '../context';

export function useProducts() {
  const context = useContext(Context.ProductsContext);
  return context;
}