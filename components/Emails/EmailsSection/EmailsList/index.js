import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import EmailBox from './EmailBox';
import { useState } from 'react';

export default function EmailsList() {
  const { _emails } = useEmails();

  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);

  return (
    <StyledEmailsList>
      {_emails.map((email, index) => (
        <EmailBox
          key={index}
          index={index}
          email={email}
          currentEmailIndex={currentEmailIndex}
          setCurrentEmailIndex={setCurrentEmailIndex}
        />
      ))}
    </StyledEmailsList>
  );
}

const StyledEmailsList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  /* padding: 0.5rem; */
  /* overflow: hidden; */
`;
