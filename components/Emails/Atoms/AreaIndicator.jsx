import useEmailTemplate from '@/hooks/emailTemplateSlice';
import styled, { css } from 'styled-components';

export default function AreaIndicator() {
  const { _area, __changeArea } = useEmailTemplate();

  function changeTo(areaSelected) {
    const areaIsAlreadySelected = areaSelected === _area;
    if (areaIsAlreadySelected) return;

    __changeArea(areaSelected);
  }

  const firstArea = 'digitacion';
  const secondArea = 'observadas';

  return (
    <StyledWrapper>
      <StyledAreaIndicator
        active={_area === firstArea}
        onClick={() => changeTo(firstArea)}
      >
        Digitación
      </StyledAreaIndicator>
      <StyledAreaIndicator
        active={_area === secondArea}
        onClick={() => changeTo(secondArea)}
      >
        Observadas
      </StyledAreaIndicator>
    </StyledWrapper>
  );
}

const StyledAreaIndicator = styled.span(
  ({ active }) => css`
    padding: 0.5rem 1rem;
    border-width: 1px;
    border-style: solid;

    ${active &&
    css`
      background-color: var(--primary-color);
      color: var(--light_100);
      border-color: var(--primary-color);
      cursor: default;
    `}

    ${!active &&
    css`
      color: var(--light_700);
      border-color: var(--light_700);
      cursor: pointer;
    `}
  `
);

const StyledWrapper = styled.div`
  display: flex;
  align-self: start;
  user-select: none;

  ${StyledAreaIndicator} {
    :first-child {
      border-bottom-left-radius: 15px;
    }

    :last-child {
      border-bottom-right-radius: 15px;
    }
  }
`;
