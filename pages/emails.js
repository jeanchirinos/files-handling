import styled from 'styled-components';
import { GlobalPage } from '@/General/ComponentWrapper';
import EmailsSection from '@/Emails/EmailsSection';
import NSTDSection from '@/Emails/NSTDSection';
import EmailTemplate from '@/Emails/EmailTemplate';
import mediaQueries from '../src/styleGuide/breakpoints';
import HomeButton from '@/Emails/HomeButton';

export default function Emails() {
  return (
    <StyledEmails>
      <HomeButton />
      <EmailsSection />
      <EmailTemplate />
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
    grid: auto / 25% 55% 20%;
    grid-row-gap: 0;
  }
`;
