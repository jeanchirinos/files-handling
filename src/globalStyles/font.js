import { css } from 'styled-components';
import { fontWeight, lineHeight } from '../styleGuide/font';

export const lineHeights = css`
  /* LINE HEIGHTS */
  --lh_1: ${lineHeight._1};
  --lh_2: ${lineHeight._2};
  --lh_3: ${lineHeight._3};
  /* FONT WEIGHTS */
  --fw_black: ${fontWeight.black};
  --fw_extrabold: ${fontWeight.extrabold};
  --fw_bold: ${fontWeight.bold};
  --fw_regular: ${fontWeight.regular};
  --fw_light: ${fontWeight.light};
`;

export default css`
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
