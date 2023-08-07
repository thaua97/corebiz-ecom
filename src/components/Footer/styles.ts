import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({theme}) => theme.colors.black};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  
  margin: 0 auto;
  padding: 8px;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
 

  @media only screen and ${({theme}) => theme.devices.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.neutral}
  }

  @media only screen and ${({theme}) => theme.devices.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${({theme}) => theme.devices.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`