import styled, { css } from 'styled-components';

export const Button = styled.button(
  ({ inverted }) => css`
    padding: 0.5rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--light);
    border-radius: 2rem;
    border: 0.5px solid var(--primary-color);
    cursor: pointer;
    transition: background-color 0.3s;

    :hover {
      background-color: transparent;
      color: var(--primary-color);
    }

    ${inverted &&
    css`
      background-color: transparent;
      color: var(--primary-color);

      :hover {
        background-color: var(--primary-color);
        color: var(--light);
      }
    `}
  `
);
