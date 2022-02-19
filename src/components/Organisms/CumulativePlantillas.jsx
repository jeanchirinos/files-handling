import styled, { css } from 'styled-components';
import useSettings from '../../hooks/useSettings';
import usePlantillas from '../../hooks/usePlantillas';
import { AiOutlineArrowRight, AiOutlineDelete } from 'react-icons/ai';

export function closeOptions() {
  const plantillaPreviouslySelected =
    document.querySelector('.selected')?.classList;

  plantillaPreviouslySelected?.remove('selected');
  plantillaPreviouslySelected?.add('hidden');
}

export default function CumulativePlantillas() {
  const { manualMode } = useSettings();
  const { cumulativePlantillas, removeItemFromCumulativePlantillas } =
    usePlantillas();

  function showOptions(e, plantilla) {
    e.preventDefault();

    const plantillaSelected = document.getElementById(plantilla).classList;
    const plantillaPreviouslySelected =
      document.querySelector('.selected')?.classList;

    plantillaPreviouslySelected?.remove('selected');
    plantillaPreviouslySelected?.add('hidden');

    plantillaSelected.toggle('hidden');
    plantillaSelected.add('selected');
  }

  const nextPageButton = cumulativePlantillas.length ? (
    <StyledNextButton
      active="true"
      onClick={() => document.getElementById('activator').click()}
    />
  ) : (
    <StyledNextButton active="false" />
  );

  return (
    <StyledCumulativePlantillas
      active={manualMode}
      onClick={() => closeOptions()}
    >
      {cumulativePlantillas.map((plantilla, index) => (
        <div key={index}>
          <p
            className="small light"
            onContextMenu={(e) => showOptions(e, plantilla.name)}
          >
            {plantilla.name}
          </p>
          <StyledDeleteButton
            id={plantilla.name}
            className="hidden"
            onClick={() => removeItemFromCumulativePlantillas(plantilla)}
          />
        </div>
      ))}
      {nextPageButton}
    </StyledCumulativePlantillas>
  );
}

const StyledCumulativePlantillas = styled.div(
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

    > div {
      position: relative;
    }
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

const StyledDeleteButton = styled(AiOutlineDelete)`
  border-radius: 4px;
  background-color: var(--theme_400);
  color: var(--theme_200);
  font-size: 1.2rem;
  position: absolute;
  bottom: -10px;
  right: -10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.hidden {
    visibility: hidden;
  }

  :hover {
    background-color: var(--red_400);
    color: var(--light_700);
  }
`;
