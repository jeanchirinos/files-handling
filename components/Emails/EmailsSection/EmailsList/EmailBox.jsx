import useEmails from '@/hooks/useEmails';
import styled, { css } from 'styled-components';

export default function EmailBox({
  index,
  email,
  currentEmailIndex,
  setCurrentEmailIndex,
}) {
  const { __setCurrentPlantillas } = useEmails();

  const totalWeight = email.reduce((acc, curr) => acc + curr.size, 0);

  function establishPlantillas() {
    if (currentEmailIndex === index) return;

    setCurrentEmailIndex(index);
    __setCurrentPlantillas(index);
  }

  return (
    <StyledEmailBox
      active={currentEmailIndex === index}
      onClick={() => establishPlantillas()}
      title={`Peso: ${totalWeight} mb - Cantidad: ${email.length}`}
    >
      <header>{index + 1}</header>
      <div>
        {email.map((plantilla, index) => (
          <p className="small light" key={index}>
            {plantilla.name}
          </p>
        ))}
      </div>
    </StyledEmailBox>
  );
}
const StyledEmailBox = styled.div(
  ({ active }) => css`
    border: 1px solid ${active ? 'var(--primary-color)' : 'var(--light_700)'};
    border-radius: 5px;
    display: flex;
    background-color: ${active && 'var(--primary-color)'};
    cursor: ${active ? 'default' : 'pointer'};
    /* pointer-events: ${active && 'none'}; */
    transition: transform 0.3s;

    :hover {
      transform: ${!active && 'scale(1.05)'};
    }

    > header {
      height: 100%;
      padding: 0 0.4rem;
      border-radius: 5px 0 0 5px;
      display: flex;
      align-items: center;
      background-color: var(--dark_600);
      color: var(--light_100);
    }

    > div {
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      color: ${active && 'var(--light_100)'};
      /* max-width: fit-content; */
    }
  `
);
