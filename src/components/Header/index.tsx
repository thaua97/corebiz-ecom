import {useState, useEffect } from 'react';

import { MdMenu } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import { HeaderWrapper } from './styles';
import { getLocalCart } from '../../utils/storage';

export default function Header() {
  const [cartSize, setCartSize] = useState<number>(0);
  
  useEffect(() => {
    getCartSize();
  }, []);

  const getCartSize = () => {
    const cartSizing = getLocalCart();
    setCartSize(cartSizing.lenght)
  }
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
        <button>{cartSize}</button>
        <button> cart </button>
      </div>
    </HeaderWrapper>
  )
}