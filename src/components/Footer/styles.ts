import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({theme}) => theme.colors.black};
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 1120px;
  display: flex;
  flex-direction: column;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 16px 0;

  p {
    line-height: 24px;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.neutral};

     @media only screen and ${({theme}) => theme.devices.tablet} {
      width: 100%;
    }
  }

  @media only screen and ${({theme}) => theme.devices.tablet} {
    width: 100%;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;

  @media only screen and ${({theme}) => theme.devices.tablet} {
      width: 100%;
      padding: 0 10%
  }
`;

export const FooterBrands = styled.div`
  margin: 0 auto;
  padding: 16px 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 78px;
  }

  @media only screen and ${({theme}) => theme.devices.tablet} {
    width: 100%;
    padding: 0;
    justify-content: space-evenly;
  }
`;