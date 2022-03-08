import { css } from 'styled-components';

export default css`
  body {
    font-family: 'Nunito';
    background-color: var(--theme_500);
    color: var(--oppositeTheme_500);
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: var(--fw_regular);
    overflow-x: hidden;
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

  .toast {
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
