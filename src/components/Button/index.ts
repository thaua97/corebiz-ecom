import styled from 'styled-components';
interface Props {
  secondary?: boolean
}

export const Button = styled.button<Props>`
  width: 100%;
  margin: 8px 0;
  padding: 8px 18px ;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.secondary ? props.theme.colors.black : props.theme.colors.neutral} ;
  background-color: ${(props) => props.secondary ? props.theme.colors.neutral : props.theme.colors.black} ;
  border-radius: 6px;
  text-transform: uppercase;
  text-align: left;

  svg {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;
