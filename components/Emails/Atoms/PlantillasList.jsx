import { Fragment } from 'react';
import styled from 'styled-components';
import useEmails from '@/hooks/emailsSlice';

export default function PlantillasList() {
  const { _plantillasArray } = useEmails();

  // data
  const title = `Cantidad: ${_plantillasArray?.length}`;

  const plantillas = _plantillasArray?.map(p => (
    <Fragment key={p}>
      <span>{p}</span>
      <br />
    </Fragment>
  ));

  return <S_PlantillasList title={title}>{plantillas}</S_PlantillasList>;
}

const S_PlantillasList = styled.div`
  width: fit-content;
  margin-top: 1rem;
  font-weight: var(--fw_bold);
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: var(--primary-color);
  }
`;
