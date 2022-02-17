import { css } from 'styled-components';
import { dark, light } from '../styleGuide';

export default css`
  --primary-color_100: #f8e2ea;
  --primary-color_200: #f1c6d4;
  --primary-color_300: #eaa9bf;
  --primary-color_400: #e28da9;
  --primary-color: #db7093;
  --primary-color_600: #ce3b6c;
  --primary-color_700: #9f2850;
  --primary-color_800: #6a1b35;
  --primary-color_900: #350d1b;

  --dark_100: ${dark._100};
  --dark_200: ${dark._200};
  --dark_300: ${dark._300};
  --dark_400: ${dark._400};
  --dark: ${dark._500};
  --dark_600: ${dark._600};
  --dark_700: ${dark._700};
  --dark_800: ${dark._800};
  --dark_900: ${dark._900};

  --light_100: ${light._100};
  --light_200: ${light._200};
  --light_300: ${light._300};
  --light_400: ${light._400};
  --light: ${light._500};
  --light_600: ${light._600};
  --light_700: ${light._700};
  --light_800: ${light._800};
  --light_900: ${light._900};
`;
