import usePlantillas from '@/hooks/usePlantillas';
import styled, { css } from 'styled-components';

export default function PriorityIndicator() {
  const { _priority } = usePlantillas();

  return (
    <Wrapper>
      <StyledPriorityIndicator
        active={_priority === 'order'}
        title="Las plantillas están en orden"
        className="small light"
      >
        Orden
      </StyledPriorityIndicator>
      <StyledPriorityIndicator
        active={_priority === 'quantity'}
        title="Las plantillas están en desorden, pero se ha reducido la cantidad de correos"
        className="small light"
      >
        Cantidad
      </StyledPriorityIndicator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  > span:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  > span:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

const StyledPriorityIndicator = styled.span(
  ({ active }) => css`
    padding: 0.3rem 0.8rem;
    background-color: ${active && 'var(--green)'};
    border: 1px solid ${active ? 'var(--green)' : 'var(--light_300)'};
    color: ${active ? 'var(--light_900)' : 'var(--light_300)'};
    cursor: help;
  `
);
