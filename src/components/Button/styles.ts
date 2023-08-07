import styled from 'styled-components';
interface Props {
  secondary: boolean
}

export const ButtonWrapper = styled.button<Props>`
  width: 140px;
  height: 36px;
  padding: 8px 30px ;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.secondary ? props.theme.colors.black : props.theme.colors.neutral} ;
  background-color: ${(props) => props.secondary ? props.theme.colors.neutral : props.theme.colors.black} ;
  border-radius: 6px;
  text-transform: uppercase;
`;
