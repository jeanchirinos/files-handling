import styled from 'styled-components';
import useEmailTemplate from 'src/features/emailTemplateSlice';
import { copyElement } from '../functions';
import PlantillasList from '../Atoms/PlantillasList';
import { USER_NAME } from 'src/data/data';

export default function Message() {
  const { _leader, _messageAfterName } = useEmailTemplate();

  return (
    <S_Message onClick={copyElement}>
      <span>{_leader.name},</span>
      <br />
      {_messageAfterName}
      <br />
      <PlantillasList />
      <br />
      <br />
      <span>Saludos,</span>
      <br />
      <span>{USER_NAME}</span>
    </S_Message>
  );
}

const S_Message = styled.div`
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
