import useEmails from '@/hooks/useEmails';
import { Fragment } from 'react';
import styled from 'styled-components';

export default function PlantillasList() {
  const { _arrayOfPlantillas } = useEmails();

  return (
    <StyledPlantillasList title={`Cantidad: ${_arrayOfPlantillas?.length}`}>
      {_arrayOfPlantillas?.map((plantilla, index) => (
        <Fragment key={index}>
          <span>{plantilla}</span>
          <br />
        </Fragment>
      ))}
    </StyledPlantillasList>
  );
}

const StyledPlantillasList = styled.div`
  width: fit-content;
  margin-top: 1rem;
  font-weight: var(--fw_bold);
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: var(--primary-color);
  }
`;
