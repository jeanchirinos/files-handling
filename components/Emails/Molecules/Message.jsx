import styled from 'styled-components';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { copyElement } from '../functions';
import PlantillasList from '../Atoms/PlantillasList';
import { username } from 'src/data';

export default function Message() {
  const { _leader, _messageAfterName } = useEmailTemplate();

  return (
    <StyledMessage onClick={(e) => copyElement(e)}>
      <span>{_leader.name},</span>
      <br />
      {_messageAfterName}
      <br />
      <PlantillasList />
      <br />
      <br />
      <span>Saludos,</span>
      <br />
      <span>{username}</span>
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

  :hover {
    box-shadow: 0px 0px 5px 2px var(--primary-color);
  }
`;
