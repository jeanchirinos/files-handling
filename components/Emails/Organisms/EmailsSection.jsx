import styled from 'styled-components';
import media from 'src/styleGuide/breakpoints';
import useEmails from '@/hooks/emailsSlice';
import EmailsList from '../Molecules/EmailBoxes';
import PriorityIndicator from '../Atoms/PriorityIndicator';

export default function EmailsSection() {
  const { _emails } = useEmails();

  const header = () => {
    const afterNumber = _emails.length === 1 ? 'correo' : 'correos';

    return `✉️ ${_emails.length} ${afterNumber}`;
  };

  return (
    <StyledEmailsSection>
      <header>
        <p className="big bold">{header()}</p>
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

  ${media.xs} {
    grid-column: 1 / span 2;
  }

  ${media.md} {
    grid-column: 1 / span 1;
  }

  > header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
