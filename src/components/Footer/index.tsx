import React from 'react';
import { FooterContainer, FooterContent, FooterButtons, FooterWrapper } from './styles';
import Button from '../Button';


export default function Footer () {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterContent>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </FooterContent>
          <FooterButtons>
            <Button secondary={true}>Entre em contato</Button>
            <Button secondary={true}>FALE COM O NOSSO CONSULTOR ONLINE</Button>
          </FooterButtons>
          <FooterContent></FooterContent>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}