import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 140px;
  height: 36px;
  padding: 8px 30px ;
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.neutral};
  background-color: ${({theme}) => theme.colors.black} ;
  border-radius: 6px;
`;
