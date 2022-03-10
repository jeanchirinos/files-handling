import { createGlobalStyle, css } from 'styled-components';
import colors from './colors';
import extra from './extra';
import mediaQueries from './mediaQueries';
import themedColors from './themedColors';
import font, { aboutFont } from './font';
import '@fontsource/nunito/900.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/300.css';

export default createGlobalStyle(
  ({ theme }) => css`
    /* RESET */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* CSS VARS */
    :root {
      ${colors}
      ${themedColors(theme)}
      ${aboutFont}
    }

    /* MEDIA QUERIES */
    html {
      ${mediaQueries}
    }

    /* ELEMENTS, CLASSES */
    ${font}
    ${extra}
  `
);
