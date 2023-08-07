import styled from 'styled-components';
interface Props {
  light?: boolean;
}

export const Heading = styled.h2<Props>`
  position: relative;
  font-size: 18px;
  font-weight: 900;
  color: ${({ light, theme}) => light ? theme.colors.neutral : theme.colors.black};
  margin-bottom: 10px;
  line-height: 42px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 80%;
    background: ${({ light, theme}) => light ? theme.colors.neutral : theme.colors.black};
    height: 2px;
  }
`;
