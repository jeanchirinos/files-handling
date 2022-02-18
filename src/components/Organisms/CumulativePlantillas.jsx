import styled, { css } from 'styled-components';
import useSettings from '../../hooks/useSettings';
import usePlantillas from '../../hooks/usePlantillas';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

export default function CumulativePlantillas() {
  const { manualMode } = useSettings();
  const { cumulativePlantillasHasItems } = usePlantillas();

  const nextPageButton = cumulativePlantillasHasItems ? (
    <Link href="/emails">
      <a>
        <StyledNextButton active="true" />
      </a>
    </Link>
  ) : (
    <StyledNextButton active="false" />
  );

  return (
    <StyledCumulativePlantillas active={manualMode}>
      {nextPageButton}
    </StyledCumulativePlantillas>
  );
}

const StyledCumulativePlantillas = styled.div(
  ({ active }) => css`
    width: 100%;
    height: fit-content;
    min-height: 5rem;
    padding: 0.5rem 5.5rem;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--theme_600);
    position: absolute;
    bottom: 0;
    transform: ${active ? 'translateY(0%)' : 'translateY(100%)'};
    transition: transform 0.5s;
  `
);

const StyledNextButton = styled(AiOutlineArrowRight)(
  ({ active }) => css`
    position: absolute;
    bottom: 25px;
    right: 25px;
    font-size: 2rem;
    color: ${active === 'true' ? 'var(--primary-color)' : 'var(--theme_700)'};
    cursor: pointer;
  `
);
