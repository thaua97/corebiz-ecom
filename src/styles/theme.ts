
const brakepoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const theme = {
  colors: {
    primary: '#F8475F',
    smoke: '#333333',
    gray: '#585858',
    cloud: '#7A7A7A',
    background: '#F2F2F2',
    black: '#000',
    neutral: '#fff',
  },
  size: {
    tine: '14px',
  },
  devices: {
    mobileS: `(min-width: ${brakepoints.mobileS})`,
    mobileM: `(min-width: ${brakepoints.mobileM})`,
    mobileL: `(min-width: ${brakepoints.mobileL})`,
    tablet: `(min-width: ${brakepoints.tablet})`,
    laptop: `(min-width: ${brakepoints.laptop})`,
    laptopL: `(min-width: ${brakepoints.laptopL})`,
    desktop: `(min-width: ${brakepoints.desktop})`,
    desktopL: `(min-width: ${brakepoints.desktop})`
  },
}