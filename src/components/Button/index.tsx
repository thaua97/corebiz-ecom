import React from 'react';
import { ButtonWrapper } from './styles';


export default function Button({ children }, secondary: boolean) {
  return (
    <ButtonWrapper secondary={secondary}>{children}</ButtonWrapper>
  )
}