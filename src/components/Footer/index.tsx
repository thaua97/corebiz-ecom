import React from 'react';
import { FooterContainer, FooterContent, FooterBrands, FooterButtons, FooterWrapper } from './styles';
import { Button } from '../Button';
import { MdEmail, MdHeadsetMic } from "react-icons/md";
import corebiz from '../../assets/corebiz.svg';
import vetex from '../../assets/vetex.svg';
import { Heading } from '../Heading';

export default function Footer () {
  return (
    <>
      <FooterContainer>
        <FooterWrapper> 
          <FooterContent>
            <Heading>Localização</Heading>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 <br/> Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </FooterContent>
          <FooterButtons>
            <Button secondary><MdEmail size={20}/> ENTRE EM CONTATO</Button>
            <Button secondary><MdHeadsetMic size={20}/> FALE COM O NOSSO CONSULTOR ONLINE</Button>
          </FooterButtons>
          <FooterBrands>
            <img src={corebiz} alt="corebiz" />
            <img src={vetex} alt="vetex" />
          </FooterBrands>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}