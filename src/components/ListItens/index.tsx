import React from 'react';
import { ListWrapper, List, ListScroll, ListContent } from './styles';
import { Heading } from '../Heading';

export default function ListItens () {
  return (
    <ListWrapper>
      <Heading>Mais vendidos</Heading>
      <List>
        <ListScroll></ListScroll>
        <ListContent></ListContent>
        <ListScroll></ListScroll>
      </List>
    </ListWrapper>
  )
}