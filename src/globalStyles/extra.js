import { css } from 'styled-components';

export default css`
  body {
    background-color: var(--theme_500);
  }

  input,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  input,
  select {
    padding: 0.1rem 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: var(--light_100);
    cursor: pointer;
    overflow: auto;
    outline: none;
  }

  a.button-link {
    color: var(--primary-color);
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    border: 0.5px solid var(--primary-color);
    cursor: pointer;
    transition: background-color 0.3s;

    :hover {
      background-color: var(--primary-color);
      color: var(--light);
    }
  }

  div.toast {
    padding: 0 0.8rem;
    max-width: 650px;
    color: var(--light_100);
    cursor: pointer;
  }

  .toast.success {
    background-color: var(--green);
  }

  .toast.error {
    background-color: var(--red_400);
  }

  ::selection {
    background-color: var(--primary-color);
    color: var(--light_100);
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
