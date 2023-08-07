import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    height: 80px;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 108px;
    height: 24px;
  }

  @media only screen and ${({theme}) => theme.devices.tablet} {
    gap: 24px;
    align-items: flex-end;
    img {
      width: 181px;
      height: 41px;
    }
  }
`;

export const HeaderSearch = styled.div`
  display: none;
  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: block;
    width: 100%;
  }
`

export const HeaderAccount = styled.div`
  display: none;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: flex;
    justify-content: center
    align-itens: flex-end;
    width: 20%;
    text-aling: center;

    color: ${({theme}) => theme.colors.gray};
    p {
      margin: 8px 0 0 ;
    }
    svg {
      color: ${({theme}) => theme.colors.gray};
    }
  }
`

export const HeaderSearchMobile = styled.div`
  display: block;
  width: 100%;
  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: none;
  }
`;

export const HeaderHamburger = styled.div`
  display: block;
  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: none;
  }
`;

