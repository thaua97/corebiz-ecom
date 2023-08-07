import styled from 'styled-components';

export const ListWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  max-width: 1120px;
`;

export const List = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  gap: 12px;
  width: 360px;
  height: 100%;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    width: 1120px;
    max-width: 1120px;
  }
`;

export const ListContent = styled.ul`
  display: flex;
  align-itens: center;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 12px;
  

  li {
    width: 142px;
    height: 245px;
    flex: none;

    img {
      width: 132px;
      height: 121px;
      object-fit: cover;
    }
  }
`;

export const ListScroll = styled.button`
`;
