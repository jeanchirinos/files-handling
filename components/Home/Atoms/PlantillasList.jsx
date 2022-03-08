import styled from 'styled-components';
import usePlantillas from '@/hooks/plantillasSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { closeContextMenu } from '@/Home/functions';

export default function PlantillasList() {
  const { _plantillasStack, __deleteFromStack } = usePlantillas();

  function toggleContextMenu(e, name) {
    e.preventDefault();
    closeContextMenu();

    const plantillaSelected = document.getElementById(name);
    plantillaSelected.classList.toggle('selected');
  }

  return (
    <>
      {_plantillasStack.map(({ name }) => (
        <StyledPlantilla key={name}>
          <p
            className="small light"
            onContextMenu={(e) => toggleContextMenu(e, name)}
          >
            {name}
          </p>
          <StyledDeleteButton
            id={name}
            onClick={() => __deleteFromStack(name)}
          />
        </StyledPlantilla>
      ))}
    </>
  );
}

const StyledPlantilla = styled.div`
  position: relative;
`;

const StyledDeleteButton = styled(AiOutlineDelete)`
  border-radius: 4px;
  background-color: var(--light_700);
  color: var(--theme_300);
  font-size: 1.2rem;
  position: absolute;
  bottom: -10px;
  right: -10px;
  cursor: pointer;
  transition: background-color 0.3s;
  visibility: hidden;

  &.selected {
    visibility: visible;
  }

  :hover {
    background-color: var(--red_400);
    color: var(--light_100);
  }
`;