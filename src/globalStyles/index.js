import { createGlobalStyle, css } from 'styled-components';
import colors from './colors';
import extra from './extra';
import mediaQueries from './mediaQueries';
import themedColors from './themedColors';
import font, { lineHeights } from './font';
import '@fontsource/nunito/900.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/300.css';

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      ${colors}
      ${themedColors(theme)}
      ${lineHeights}
    }

    html {
      ${mediaQueries}
    }

    ${font}
    ${extra}
  `
);

export default GlobalStyles;
