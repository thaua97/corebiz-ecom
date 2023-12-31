import styled from 'styled-components';
interface Props {
  mobile?: boolean,
}

export const BannerWrapper = styled.section`
  width: 100%;
  position: relative;
  
`;

export const BannerContent = styled.div`
  z-index: 1;
  position: absolute;
  padding: 30px 20px 20px;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    padding: 5% 20%;
  }

  h1 {
    color: ${({theme}) => theme.colors.neutral};
    font-weight: 900;
    font-size: 30px;

    @media only screen and ${({theme}) => theme.devices.tablet} {
      font-size: 45px;
      text-align: left;
      max-width: 500px;
    }
  }

  h3 { 
    color: ${({theme}) => theme.colors.neutral};
    font-weight: 600;
    font-size: 20px;

    @media only screen and ${({theme}) => theme.devices.tablet} {
      font-size: 30px;
      text-align: left;
    }
  }
`;

export const BannerBackground = styled.img<Props>`
  width: 100%;
  height: 190px;
  display: ${(props) => props.mobile ? 'block' : 'none'};
  position: relative;
  z-index: 0;
  object-fit: cover;

  @media only screen and ${({theme}) => theme.devices.tablet} {
    display: ${(props) => props.mobile ? 'none' : 'block'};
    height: 430px;
  }
`;
