import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--light);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 0.5px solid var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: transparent;
    color: var(--primary-color);
  }
`;

export const Flex = styled.article(
  ({
    column,
    fullCenter,
    justifyCenter,
    alignCenter,
    justify,
    align,
    $wrap,
    gap,
    c_gap,
    r_gap,
  }) => css`
    display: flex;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${$wrap && 'wrap'};

    gap: ${gap && `${gap}rem`};
    column-gap: ${c_gap && `${c_gap}rem`};
    row-gap: ${r_gap && `${c_gap}rem`};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);
