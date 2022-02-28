import styled from 'styled-components';
import mediaQueries from 'src/styleGuide/breakpoints';
import useEmails from '@/hooks/useEmails';
import EmailsList from '../Molecules/EmailBoxes';
import PriorityIndicator from '../Atoms/PriorityIndicator';

export default function EmailsSection() {
  const { _emails } = useEmails();

  return (
    <StyledEmailsSection>
      <header>
        <p className="big bold">✉️ {_emails.length} correo(s)</p>
        <PriorityIndicator />
      </header>
      <EmailsList />
    </StyledEmailsSection>
  );
}

export const StyledEmailsSection = styled.section`
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
