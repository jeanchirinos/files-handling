import styled from 'styled-components';
import { copyElement } from '../functions';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import PlantillasList from '../Atoms/PlantillasList';

export default function Message() {
  const { _leader, _subjectType, _area } = useEmailTemplate();

  return (
    <StyledMessage onClick={(e) => copyElement(e)}>
      <span>{_leader.name},</span>
      <br />
      {_area === 'digitacion' ? (
        <span>
          te reasigno las siguientes plantillas{' '}
          <strong>{_subjectType.selectedValue}</strong> para su digitación:
        </span>
      ) : (
        <span>
          te transfiero la(s) siguiente(s) plantilla(s) según lo indicado
        </span>
      )}

      <br />
      <PlantillasList />
      <br />
      <br />
      <span>Saludos,</span>
      <br />
      <span>Alfredo Chirinos</span>
    </StyledMessage>
  );
}

const StyledMessage = styled.div`
  padding: 1rem 0.8rem;
  border-radius: 12px;
  flex-grow: 1;
  background-color: var(--light_100);
  color: var(--dark);
  overflow-y: auto;
  cursor: pointer;
  transition: box-shadow 0.2s;

  span {
    pointer-events: none;
  }

  :hover,
  :focus {
    box-shadow: 0px 0px 5px 2px var(--primary-color);
  }
`;
