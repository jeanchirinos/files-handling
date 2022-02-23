import { css } from 'styled-components';
import { lineHeight } from '../styleGuide/font';

export const lineHeights = css`
  /* LINE HEIGHTS */
  --lh_1: ${lineHeight._1};
  --lh_2: ${lineHeight._2};
  --lh_3: ${lineHeight._3};
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
    font-weight: 900;
    font-size: var(--fs_1);
  }
  h2 {
    font-weight: 800;
    font-size: var(--fs_2);
  }
  h3,
  h4 {
    font-weight: 700;
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
    font-weight: 700;
  }

  .light {
    font-weight: 300;
  }
`;
