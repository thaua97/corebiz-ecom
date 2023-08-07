import React from 'react';
import logo from '../../assets/logo.svg';
import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />
      <div>
        <input type="text" />
        <button></button>
      </div>
      <div>
        <button>0</button>
        <button> cart </button>
      </div>
    </HeaderWrapper>
  )
}