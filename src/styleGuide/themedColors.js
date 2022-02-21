const darkColors = {
  _100: '#D6D1D4',
  _200: '#ADA4A8',
  _300: '#83777D',
  _400: '#564E52',
  _500: '#282426',
  _600: '#1E1B1D',
  _700: '#141213',
  _800: '#0A090A',
  _900: '#000000',
};

const lightColors = {
  _100: '#2E292A',
  _200: '#5B5255',
  _300: '#887C7F',
  _400: '#B1A9AB',
  _500: '#DBD7D8',
  _600: '#E4E1E2',
  _700: '#EDEBEB',
  _800: '#F6F5F5',
  _900: '#FFFFFF',
};

export const dark = {
  ...darkColors,
  opposite: {
    ...lightColors,
  },
};

export const light = {
  ...lightColors,
  opposite: {
    ...darkColors,
  },
};
