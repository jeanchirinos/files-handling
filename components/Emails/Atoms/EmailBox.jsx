import styled, { css } from 'styled-components';
import useEmails from '@/hooks/useEmails';

export default function EmailBox({ email, emailIndex }) {
  const { _currentEmailIndex, __setCurrentEmailIndex } = useEmails();

  // data
  const isSelected = _currentEmailIndex === emailIndex;
  const emailWeight = email.reduce((acc, curr) => acc + curr.size, 0);
  const title = `Peso: ${emailWeight.toFixed(2)} mb - Cantidad: ${
    email.length
  }`;
  const plantilla = (name) => (
    <p className="small light" key={name}>
      {name}
    </p>
  );
  const plantillas = email.map((p) => plantilla(p.name));

  // functions
  function selectEmailBox() {
    if (isSelected) {
      return;
    } else {
      __setCurrentEmailIndex(emailIndex);
    }
  }

  return (
    <StyledEmailBox
      isSelected={isSelected}
      onClick={() => selectEmailBox()}
      title={title}
    >
      <header>{emailIndex + 1}</header>
      <div>{plantillas}</div>
    </StyledEmailBox>
  );
}
const StyledEmailBox = styled.div(
  ({ isSelected }) => css`
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    display: flex;

    ${isSelected &&
    css`
      border-color: var(--primary-color);
      background-color: var(--primary-color);
      color: var(--light_100);
      cursor: default;
    `}

    ${!isSelected &&
    css`
      border-color: var(--light_700);
      cursor: pointer;
      transition: transform 0.3s;

      :hover {
        transform: scale(1.05);
      }
    `}


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
    }
  `
);
