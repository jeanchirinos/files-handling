import { createGlobalStyle, css } from 'styled-components';
import applyToAll from './applyToAll';
import colors from './colors';
import extra from './extra';
import mediaQueries from './mediaQueries';
import themedColors from './themedColors';
import staticCssVars from './staticCssVars';
import '@fontsource/nunito/900.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/300.css';

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    * {
      ${applyToAll}
    }

    :root {
      ${colors}
      ${themedColors(theme)}
      ${staticCssVars}
    }

    html {
      ${mediaQueries}
    }

    ${extra}
  `
);

export default GlobalStyles;
