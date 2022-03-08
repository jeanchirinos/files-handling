import useEmails from '@/hooks/emailsSlice';
import styled, { css } from 'styled-components';

export default function PriorityIndicator() {
  const { _priority } = useEmails();

  return (
    <Wrapper className="small light">
      <StyledPriorityIndicator
        active={_priority === 'order'}
        title="Las plantillas están en orden"
      >
        Orden
      </StyledPriorityIndicator>
      <StyledPriorityIndicator
        active={_priority === 'quantity'}
        title="Las plantillas están en desorden, pero se ha reducido la cantidad de correos"
      >
        Cantidad
      </StyledPriorityIndicator>
    </Wrapper>
  );
}

const StyledPriorityIndicator = styled.span(
  ({ active }) => css`
    padding: 0.3rem 0.8rem;
    border-width: 1px;
    border-style: solid;
    cursor: help;
    user-select: none;

    ${active &&
    css`
      background-color: var(--green);
      color: var(--light_100);
      border-color: var(--green);
    `}

    ${!active &&
    css`
      color: var(--light_700);
      border-color: var(--light_700);
    `}
  `
);

const Wrapper = styled.div`
  ${StyledPriorityIndicator} {
    :first-child {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    :last-child {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
`;
