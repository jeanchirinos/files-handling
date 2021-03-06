import useEmailTemplate from 'src/features/emailTemplateSlice';
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
    <S_Wrapper>
      <S_AreaIndicator
        active={_area === firstArea}
        onClick={() => changeTo(firstArea)}
      >
        Digitación
      </S_AreaIndicator>
      <S_AreaIndicator
        active={_area === secondArea}
        onClick={() => changeTo(secondArea)}
      >
        Observadas
      </S_AreaIndicator>
    </S_Wrapper>
  );
}

const S_AreaIndicator = styled.span(
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

const S_Wrapper = styled.div`
  display: flex;
  align-self: start;
  user-select: none;

  ${S_AreaIndicator} {
    :first-child {
      border-bottom-left-radius: 15px;
    }

    :last-child {
      border-bottom-right-radius: 15px;
    }
  }
`;
