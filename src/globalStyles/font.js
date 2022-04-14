import { css } from 'styled-components';

export const aboutFont = css`
  /* LINE HEIGHTS */
  --lh_1: 130%;
  --lh_2: 150%;
  --lh_3: 170%;
  /* FONT WEIGHTS */
  --fw_black: 900;
  --fw_extrabold: 800;
  --fw_bold: 700;
  --fw_regular: 400;
  --fw_light: 300;
`;

export default css`
  //* DEFAULT  */
  body {
    font-family: 'Nunito';
    color: var(--oppositeTheme_500);
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: var(--fw_regular);
  }

  /* HEADINGS */
  h1,
  h2,
  h3,
  h4 {
    line-height: var(--lh_1);
  }

  h1 {
    font-weight: var(--fw_black);
    font-size: var(--fs_1);
  }
  h2 {
    font-weight: var(--fw_extrabold);
    font-size: var(--fs_2);
  }
  h3,
  h4 {
    font-weight: var(--fw_bold);
  }

  h3 {
    font-size: var(--fs_3);
  }
  h4 {
    font-size: var(--fs_4);
  }

  /* FONT SIZE */

  .big {
    font-size: var(--fs_5);
    line-height: var(--lh_2);
  }
  .small {
    font-size: var(--fs_7);
    line-height: var(--lh_3);
  }

  /* FONT WEIGHT */
  .bold {
    font-weight: var(--fw_bold);
  }

  .light {
    font-weight: var(--fw_light);
  }
`;
