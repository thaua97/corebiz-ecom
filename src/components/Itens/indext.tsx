import React from 'react';
import { Button } from '../Button'

import { ProductInterface } from '../../types/interfaces';

export default function Item (item: ProductInterface) {
  return (
    <>
      <div>
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
        <div></div>
        <span>de {item.price} por</span>
        <h2>{item.price}</h2>
        <span>ou 10x de {item.price / 10}</span>
        <Button>Comprar</Button>
      </div>
    </>
  )
}