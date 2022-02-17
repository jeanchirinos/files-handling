import { css } from 'styled-components';

export default css`
  body {
    /* padding: 0 var(--padding); */
    font-family: 'Nunito';
    /* apply padding to elements */
    background-color: var(--theme_500);
  }

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

  /* DEFAULT -> Normal - Regular - No colored */

  p {
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: 400;
    color: var(--oppositeTheme_500);
    display: inline-block;
  }

  /* FONT SIZE */

  p.big {
    font-size: var(--fs_5);
    line-height: var(--lh_2);
  }

  p.small {
    font-size: var(--fs_7);
    line-height: var(--lh_3);
  }

  /* FONT WEIGHT */
  p.semibold {
    font-weight: 700;
  }

  p.light {
    font-weight: 300;
  }

  /* FONT COLOR */
  p.colored {
    color: inherit;
  }

  button {
    padding: 0.5rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--light_600);
    border-radius: 2rem;
    border: 0.5px solid var(--primary-color);
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    transition: background-color 0.3s;

    :hover {
      background-color: var(--theme_500);
      color: var(--primary-color);
    }
  }

  ::selection {
    background-color: var(--primary-color);
    color: var(--light_100);
  }
`;
