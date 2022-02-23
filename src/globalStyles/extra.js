import { css } from 'styled-components';

export default css`
  body {
    font-family: 'Nunito';
    background-color: var(--theme_500);
    color: var(--oppositeTheme_400);
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: 400;
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
    font-weight: inherit;
    line-height: inherit;
    transition: background-color 0.3s;

    :hover {
      background-color: transparent;
      color: var(--primary-color);
    }
  }

  ::selection {
    background-color: var(--primary-color);
    color: var(--light_900);
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--theme_500);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--scrollBarThumb_color);
  }
`;
