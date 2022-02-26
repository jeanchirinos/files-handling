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

  ${mediaQueries.xs} {
    grid-column: 1 / span 2;
  }

  ${mediaQueries.md} {
    grid-column: 1 / span 1;
  }

  > header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
