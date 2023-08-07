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
  overflow-y: hidden;
  scroll-behavior: smooth;
  gap: 12px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    width: 145px;
    height: 100%;
    padding: 8px;
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: space-around;
    text-align: center;

    img {
      width: 132px;
      height: 121px;
      object-fit: cover;
    }

    h4 {
      font-weight: 600;
      font-size: 10px;
      color: ${({theme}) => theme.colors.gray};
    }

    h1 {
      font-weight: 700;
      font-size: 16px;
      color: ${({theme}) => theme.colors.black};
    }

    span {
      font-weight: 400;
      font-size: 11px;
      color: ${({theme}) => theme.colors.cloud};
    }
  }
`;

export const ListScroll = styled.button`
  display: none;
  background: none;
  border: none;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: block ;
  }
`;
