import styled from 'styled-components';

export default function Plantilla({ NSTDNumber, size }) {
  return <StyledPlantilla title={size}>{NSTDNumber}</StyledPlantilla>;
}

const StyledPlantilla = styled.p`
  cursor: pointer;
  :hover {
    color: var(--primary-color);
  }
`;
