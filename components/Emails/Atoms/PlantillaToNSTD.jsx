import styled, { css } from 'styled-components';
import { useState } from 'react';
import { copyElement } from '../functions';

export default function PlantillaToNSTD({ name }) {
  const [isCopied, setIsCopied] = useState(false);

  function markAsCopied(e) {
    setIsCopied(true);
    copyElement(e);
  }

  return (
    <StyledPlantillaToNSTD isCopied={isCopied} onClick={(e) => markAsCopied(e)}>
      {name}
    </StyledPlantillaToNSTD>
  );
}

const StyledPlantillaToNSTD = styled.p(
  ({ isCopied }) => css`
    cursor: pointer;

    :hover {
      color: var(--primary-color);
      text-decoration: none;
    }

    ${isCopied &&
    css`
      text-decoration: line-through;
      color: var(--primary-color);
    `}
  `
);
