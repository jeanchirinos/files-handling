import useEmailTemplate from '@/hooks/useEmailTemplate';
import styled from 'styled-components';
import { copyElement } from '../../functions';
import PlantillasList from './PlantillasList';

export default function Message() {
  const { _to, _subjectType } = useEmailTemplate();

  return (
    <StyledMessage onClick={(e) => copyElement(e)}>
      <span>{_to.name},</span>
      <br />
      <span>
        te reasigno las siguientes plantillas{' '}
        <strong>{_subjectType.selectedValue}</strong> para su digitación:
      </span>
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
