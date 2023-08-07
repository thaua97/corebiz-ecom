import { createContext, useEffect, useState, ReactNode } from "react";
import api from "../services/api";

import { ProductsInterface } from "../types/interfaces";

interface ProductsContextProviderProps {
  children?: ReactNode;
}

interface ProductsContextData {
  products: ProductsInterface[];
}

export const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data } = await api.get('/products');
      
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
  )
}