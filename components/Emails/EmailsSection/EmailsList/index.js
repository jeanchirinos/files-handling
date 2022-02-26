import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import EmailBox from './EmailBox';
import { useState } from 'react';

export default function EmailsList() {
  const { _emails } = useEmails();

  return (
    <StyledEmailsList>
      {_emails.map((email, index) => (
        <EmailBox key={index} index={index} email={email} />
      ))}
    </StyledEmailsList>
  );
}

const StyledEmailsList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
