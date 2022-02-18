import { css } from 'styled-components';

export default css`
  body {
    font-family: 'Nunito';
    background-color: var(--theme_500);
    overflow-y: hidden;
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
    color: var(--light_900);
  }
`;
