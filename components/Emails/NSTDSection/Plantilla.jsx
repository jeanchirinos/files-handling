import styled, { css } from 'styled-components';
import { useState } from 'react';
import { copyElement } from '../functions';

export default function Plantilla({ NSTDNumber }) {
  const [copied, setCopied] = useState(false);

  function markAsCopied(e) {
    setCopied(true);
    copyElement(e);
  }

  return (
    <StyledPlantilla isCopied={copied} onClick={(e) => markAsCopied(e)}>
      {NSTDNumber}
    </StyledPlantilla>
  );
}

const StyledPlantilla = styled.p(
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
