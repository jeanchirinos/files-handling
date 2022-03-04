import useEmails from '@/hooks/emailsSlice';
import { Fragment } from 'react';
import styled from 'styled-components';

export default function PlantillasList() {
  const { _plantillasArray } = useEmails();

  // data
  const title = `Cantidad: ${_plantillasArray?.length}`;

  const plantillas = _plantillasArray?.map((p) => (
    <Fragment key={p}>
      <span>{p}</span>
      <br />
    </Fragment>
  ));

  return (
    <StyledPlantillasList title={title}>{plantillas}</StyledPlantillasList>
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
