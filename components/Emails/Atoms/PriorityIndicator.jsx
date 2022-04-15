import useEmails from '@/hooks/emailsSlice';
import styled, { css } from 'styled-components';

export default function PriorityIndicator() {
  const { _priority } = useEmails();

  return (
    <S_Wrapper className="small light">
      <S_PriorityIndicator
        active={_priority === 'order'}
        title="Las plantillas están en orden"
      >
        Orden
      </S_PriorityIndicator>
      <S_PriorityIndicator
        active={_priority === 'quantity'}
        title="Las plantillas están en desorden, pero se ha reducido la cantidad de correos"
      >
        Cantidad
      </S_PriorityIndicator>
    </S_Wrapper>
  );
}

const S_PriorityIndicator = styled.span(
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

const S_Wrapper = styled.div`
  ${S_PriorityIndicator} {
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
