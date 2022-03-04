import styled from 'styled-components';
import useEmails from '@/hooks/emailsSlice';
import EmailBox from '../Atoms/EmailBox';

export default function EmailBoxes() {
  const { _emails } = useEmails();

  return (
    <StyledEmailBoxes>
      {_emails.map((email, index) => (
        <EmailBox key={index} email={email} emailIndex={index} />
      ))}
    </StyledEmailBoxes>
  );
}

const StyledEmailBoxes = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
