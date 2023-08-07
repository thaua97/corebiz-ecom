import styled from 'styled-components';
interface Props {
  light: boolean | void;
}

export const Heading = styled.h2<Props>`
  position: relative;
  font-size: 18px;
  font-weight: 900;
  color: ${({theme}) => theme.colors.neutral};
  margin-bottom: 10px;
  line-height: 42px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 60%;
    background: ${({theme}) => theme.colors.neutral};
    height: 2px;
  }
`;
