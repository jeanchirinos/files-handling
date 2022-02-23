import { css } from 'styled-components';

const themedColors = (theme) => css`
  --theme_100: ${theme._100};
  --theme_200: ${theme._200};
  --theme_300: ${theme._300};
  --theme_400: ${theme._400};
  --theme_500: ${theme._500};
  --theme_600: ${theme._600};
  --theme_700: ${theme._700};
  --theme_800: ${theme._800};
  --theme_900: ${theme._900};

  --oppositeTheme_100: ${theme.opposite._100};
  --oppositeTheme_200: ${theme.opposite._200};
  --oppositeTheme_300: ${theme.opposite._300};
  --oppositeTheme_400: ${theme.opposite._400};
  --oppositeTheme_500: ${theme.opposite._500};
  --oppositeTheme_600: ${theme.opposite._600};
  --oppositeTheme_700: ${theme.opposite._700};
  --oppositeTheme_800: ${theme.opposite._800};
  --oppositeTheme_900: ${theme.opposite._900};

  --emailTemplate: ${theme.emailTemplate};
  --scrollBarThumb_color: ${theme.scrollbar_thumb};
`;

export default themedColors;
