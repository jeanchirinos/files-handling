import styled, { css } from 'styled-components';
import PlantillasList from './PlantillasList';
import NextPageButton from './NextPageButton';
import useSettings from '@/hooks/useSettings';
import { closeOptions } from '../functions';

export default function PlantillasStack() {
  const { _manualMode } = useSettings();

  return (
    <StyledPlantillasStack active={_manualMode} onClick={() => closeOptions()}>
      <PlantillasList />
      <NextPageButton />
    </StyledPlantillasStack>
  );
}

const StyledPlantillasStack = styled.div(
  ({ active }) => css`
    width: 100%;
    height: fit-content;
    min-height: 5rem;
    padding: 0.5rem 5rem 0.5rem 6.5rem;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--theme_600);
    position: absolute;
    bottom: 0;
    transform: ${active ? 'translateY(0%)' : 'translateY(100%)'};
    transition: transform 0.5s;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
  `
);
