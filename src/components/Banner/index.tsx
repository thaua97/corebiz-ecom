import React from 'react';

import Background from '../../assets/carrosel-desktop.png'
import BackgroundMobile from '../../assets/carrosel-mobile.png'
import { BannerBackground, BannerContent, BannerWrapper } from './styles';

export default function Banner () {
  return (
    <BannerWrapper>
      <BannerContent>
         <h3>Olá, o que você está <br /> buscando?</h3>
         <h1>Criar ou migrar seu e-commerce?</h1>
      </BannerContent>
      <BannerBackground src={Background} alt="background" />
      <BannerBackground mobile src={BackgroundMobile} alt="background" />
    </BannerWrapper>
  )
}