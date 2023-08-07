import {useState, useEffect } from 'react';

import logo from '../../assets/logo.svg';
import { HeaderWrapper, HeaderHamburger, HeaderContent, HeaderSearch, HeaderSearchMobile, HeaderAccount } from './styles';
import { getLocalCart } from '../../utils/storage';

import Box from '@mui/material/Box';
import { MdSearch, MdMenu, MdShoppingCart, MdPerson } from 'react-icons/md';
import TextField from '@mui/material/TextField';

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
      <HeaderContent>
      <HeaderHamburger>
        <MdMenu size={30}/>
      </HeaderHamburger>
      <img src={logo} alt="logo" />
      <HeaderSearch>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField id="input" label="O que está procurando?" variant="standard" fullWidth  />
          <MdSearch size={30} />
        </Box>
      </HeaderSearch>
      <HeaderAccount>
        <MdPerson size={30} />
        <p>Minha conta</p>
      </HeaderAccount>
      <div>
        <MdShoppingCart size={30} />
        <button>{cartSize}</button>
      </div>
    
      </HeaderContent>
      <HeaderSearchMobile>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField id="input" label="O que está procurando?" variant="standard" fullWidth  />
          <MdSearch size={30} />
        </Box>
      </HeaderSearchMobile>
    </HeaderWrapper>
    
  )
}