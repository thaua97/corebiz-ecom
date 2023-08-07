import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 108px;
    height: 24px;
  }

  @media only screen and ${({theme}) => theme.devices.md} {
    img {

    }
  }
`;
