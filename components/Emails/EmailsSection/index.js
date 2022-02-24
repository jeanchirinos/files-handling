import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import EmailsList from './EmailsList';
import PriorityIndicator from './PriorityIndicator';
import mediaQueries from 'src/styleGuide/breakpoints';

export default function EmailsSection() {
  const { _emails } = useEmails();

  return (
    <StyledEmailsSection>
      <header>
        <p className="big bold">✉️ {_emails.length} correos</p>
        <PriorityIndicator />
      </header>
      <EmailsList />
    </StyledEmailsSection>
  );
}

const StyledEmailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > header {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  ${mediaQueries.xs} {
    grid-column: span 2;
  }

  ${mediaQueries.md} {
    grid-column-start: 1;
  }
`;
