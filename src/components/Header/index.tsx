import React from 'react';

import { MdMenu } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <MdMenu />
      </div>
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