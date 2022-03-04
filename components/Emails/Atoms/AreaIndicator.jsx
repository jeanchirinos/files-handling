import useEmailTemplate from '@/hooks/emailTemplateSlice';
import styled, { css } from 'styled-components';

export default function AreaIndicator() {
  const { _area, __changeArea } = useEmailTemplate();

  function handleChange(area) {
    const areaIsSelected = _area === area;

    if (areaIsSelected) {
      return;
    } else {
      __changeArea(area);
    }
  }

  return (
    <Wrapper>
      <StyledAreaIndicator
        active={_area === 'digitacion'}
        onClick={() => handleChange('digitacion')}
      >
        Digitación
      </StyledAreaIndicator>
      <StyledAreaIndicator
        active={_area === 'observadas'}
        onClick={() => handleChange('observadas')}
      >
        Observadas
      </StyledAreaIndicator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  display: flex;

  > span:first-child {
    border-bottom-left-radius: 15px;
  }

  > span:last-child {
    border-bottom-right-radius: 15px;
  }
`;

const StyledAreaIndicator = styled.span(
  ({ active }) => css`
    padding: 0.6rem 1.4rem;
    border-width: 1px;
    border-style: solid;

    ${active &&
    css`
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      color: var(--light_100);
      cursor: default;
    `}

    ${!active &&
    css`
      border-color: var(--light_700);
      color: var(--light_700);
      cursor: pointer;
    `}
  `
);
