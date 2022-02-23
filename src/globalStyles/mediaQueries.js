import { css } from 'styled-components';
import mediaQueries from '../styleGuide/breakpoints';
import { fontSize } from '../styleGuide/font';

export default css`
  /* XS */
  ${mediaQueries.xs} {
    --padding: 0.5rem;
    /* FONT SIZE */
    --fs_1: ${fontSize._2};
    --fs_2: ${fontSize._3};
    --fs_3: ${fontSize._4};
    --fs_4: ${fontSize._5};
    --fs_5: ${fontSize._6};
    --fs_6: ${fontSize._7};
    --fs_7: ${fontSize._8};
  }

  /* SM */
  ${mediaQueries.sm} {
    --padding: 1rem;
  }

  /* MD */
  ${mediaQueries.md} {
    --padding: 2rem;
  }

  /* LG */
  ${mediaQueries.lg} {
    --padding: 3rem;
    --fs_1: ${fontSize._1};
    --fs_2: ${fontSize._2};
    --fs_3: ${fontSize._3};
    --fs_4: ${fontSize._4};
    --fs_5: ${fontSize._5};
    --fs_6: ${fontSize._6};
    --fs_7: ${fontSize._7};
  }

  /* XL */
  ${mediaQueries.xl} {
    --padding: 4rem;
  }
`;
