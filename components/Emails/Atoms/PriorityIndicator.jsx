import useEmails from '@/hooks/emailsSlice';
import styled, { css } from 'styled-components';

export default function PriorityIndicator() {
  const { _priority } = useEmails();

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
  user-select: none;
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
    border-width: 1px;
    border-style: solid;
    cursor: help;

    ${active &&
    css`
      background-color: var(--green);
      border-color: var(--green);
      color: var(--light_100);
    `}

    ${!active &&
    css`
      border-color: var(--light_700);
      color: var(--light_700);
    `}
  `
);
