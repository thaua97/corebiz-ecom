import styled from 'styled-components';
import { darken } from 'polished';

export const NewslaterWrapper = styled.form`
  position: relative;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  
  h1 {
    padding: 24px 0;
    font-weight: 700;
    font-size: 22px;
    color: ${({theme}) => theme.colors.smoke};
  }
`;

export const NewslaterFormGroup = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and ${({theme}) => theme.devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    height: 100%;
    
    button {
      margin: 0;
      height: 48px;
    }
  }

  input {
    width: 100%;
    padding: 0 17px;
    height: 48px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.neutral};
    font-weight: 700;
    font-size: 12px;
    color: ${({theme}) => theme.colors.grey};
    border: none;
    outline-color: ${darken(.1, '#d7d7d7')};
    transition: border-color .2s ease;

    &::placeholder {
      color: ${({theme}) => theme.colors.grey};
      font-weight: 700;
    }

    &:hover {
      border-color: ${darken(.1, '#d7d7d7')};
    }

    & + input {
      margin-top: 1rem;
      
      @media only screen and ${({theme}) => theme.devices.tablet} {
        margin-top:0;
      }
    }

  }
`;
