import styled from 'styled-components';

export default function Plantilla({ NSTDNumber }) {
  return <StyledPlantilla>{NSTDNumber}</StyledPlantilla>;
}

const StyledPlantilla = styled.p`
  cursor: pointer;
  :hover {
    color: var(--primary-color);
  }
`;
