import React from 'react';
import { NewslaterWrapper } from './styes';
import { Button } from '../Button';

export default function Newslatter() {
  return (
    <NewslaterWrapper>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <input
        placeholder="Digite seu nome" 
      />
      <input
        type="email"
        placeholder="Digite seu email" 
      />
      <Button secondary={false}>Eu quero!</Button>
    </NewslaterWrapper>
  );
}