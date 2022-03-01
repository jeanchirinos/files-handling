import styled from 'styled-components';
import mediaQueries from '../src/styleGuide/breakpoints';
// Components
import HomeButton from '@/Emails/Atoms/HomeButton';
import EmailsSection from '@/Emails/Organisms/EmailsSection';
import EmailTemplateSection from '@/Emails/Organisms/EmailTemplateSection';
import NSTDSection from '@/Emails/Organisms/NSTDSection';
import AreaIndicator from '@/Emails/Atoms/AreaIndicator';

export default function Emails() {
  return (
    <StyledEmails>
      <HomeButton />
      <AreaIndicator />
      <EmailsSection />
      <EmailTemplateSection />
      <NSTDSection />
    </StyledEmails>
  );
}

const StyledEmails = styled.main`
  padding: 8rem var(--padding) 0 var(--padding);
  display: grid;

  ${mediaQueries.xs} {
    grid: auto / 75% 25%;
    grid-row-gap: 5rem;
  }

  ${mediaQueries.md} {
    grid: auto / 25% 50% 25%;
    grid-row-gap: 0;
  }
`;
