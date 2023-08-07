import React from 'react';
import { ListWrapper, List, ListScroll, ListContent } from './styles';
import { Heading } from '../Heading';
import { useProducts } from '../../hooks/useProducts';
import { Button } from '../Button';

export default function ListItens () {
  const { products } = useProducts();

  console.log(products)
  return (
    <ListWrapper>
      <Heading>Mais vendidos</Heading>
      <List>
        <ListScroll></ListScroll>
        <ListContent>
          {products.map( item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <div></div>
              <span>de {item.price} por</span>
              <h2>{item.price}</h2>
              <span>ou 10x de {item.price / 10}</span>
              <Button>Comprar</Button>
            </li>
          ))}
        </ListContent>
        <ListScroll></ListScroll>
      </List>
    </ListWrapper>
  )
}