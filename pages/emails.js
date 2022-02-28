import styled from 'styled-components';
import mediaQueries from '../src/styleGuide/breakpoints';
import { GlobalPage } from '@/General/ComponentWrapper';
// Components
import HomeButton from '@/Emails/Atoms/HomeButton';
import EmailsSection from '@/Emails/Organisms/EmailsSection';
import EmailTemplateSection from '@/Emails/Organisms/EmailTemplateSection';
import NSTDSection from '@/Emails/Organisms/NSTDSection';

export default function Emails() {
  return (
    <StyledEmails>
      <HomeButton />
      <EmailsSection />
      <EmailTemplateSection />
      <NSTDSection />
    </StyledEmails>
  );
}

const StyledEmails = styled(GlobalPage)`
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
