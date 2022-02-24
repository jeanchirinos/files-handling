// const darkColors = {
//   _100: '#808080',
//   _200: '#6A696A',
//   _300: '#545253',
//   _400: '#3E3B3D',
//   _500: '#282426',
//   _600: '#1E1B1D',
//   _700: '#141213',
//   _800: '#0A090A',
//   _900: '#000000',
//   emailTemplate: 'rgba(62, 59, 61, 0.1)',
//   scrollbar_thumb: 'rgba(255, 255, 255, 0.2)',
// };

// const lightColors = {
//   _100: '#808080',
//   _200: '#9C9B9B',
//   _300: '#B8B6B7',
//   _400: '#D3D0D2',
//   _500: '#EFEBED',
//   _600: '#F3F0F2',
//   _700: '#F7F5F6',
//   _800: '#FBFAFB',
//   _900: '#FFFFFF',
//   emailTemplate: 'rgba(211, 208, 210, 0.1)',
//   scrollbar_thumb: 'rgba(0, 0, 0, 0.2)',
// };

const darkColors = {
  _100: '#808080',
  _200: '#6A696A',
  _300: '#545253',
  _400: '#3E3B3D',
  _500: '#282426',
  _600: '#201D1F',
  _700: '#181617',
  _800: '#100F0F',
  _900: '#080708',
  emailTemplate: 'rgba(84, 82, 83, 0.5)',
  // emailTemplate: 'rgba(62, 59, 61, 0.1)',
  scrollbar_thumb: 'rgba(255, 255, 255, 0.2)',
};

const lightColors = {
  _100: '#FCFBFB',
  _200: '#F9F7F8',
  _300: '#F5F3F4',
  _400: '#F2EFF1',
  _500: '#EFEBED',
  _600: '#D3D0D2',
  _700: '#B8B6B7',
  _800: '#9C9B9B',
  _900: '#808080',
  // emailTemplate: 'rgba(211, 208, 210, 0.1)',
  emailTemplate: 'rgba(239, 235, 237, 0.5)',
  scrollbar_thumb: 'rgba(0, 0, 0, 0.2)',
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
