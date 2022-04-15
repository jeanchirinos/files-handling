import styled, { css } from 'styled-components';
import useSettings from '@/hooks/settingsSlice';
import PlantillasList from '../Atoms/PlantillasList';
import NextPageButton from '../Atoms/NextPageButton';

export default function PlantillasStack() {
  const { _manualMode } = useSettings();

  return (
    <S_PlantillasStack active={_manualMode}>
      <PlantillasList />
      <NextPageButton />
    </S_PlantillasStack>
  );
}

const S_PlantillasStack = styled.div(
  ({ active }) => css`
    background-color: var(--theme_400);
    width: 100%;
    height: fit-content;
    min-height: 5rem;
    padding: 0.5rem 5rem 0.5rem 6.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    transform: ${!active && 'translateY(100%)'};
    transition: transform 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  `
);
