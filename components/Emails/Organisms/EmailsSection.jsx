import styled from 'styled-components';
import media from 'src/styleGuide/breakpoints';
import useEmails from '@/hooks/emailsSlice';
import EmailsList from '../Molecules/EmailBoxes';
import PriorityIndicator from '../Atoms/PriorityIndicator';
import { Flex } from 'components/StyledComponents';

export default function EmailsSection() {
  const { _emails } = useEmails();

  const header = () => {
    const afterNumber = _emails.length === 1 ? 'correo' : 'correos';

    return `✉️ ${_emails.length} ${afterNumber}`;
  };

  return (
    <S_EmailsSection>
      <Flex as="header" $wrap justify="space-between">
        <p className="big bold">{header()}</p>
        <PriorityIndicator />
      </Flex>
      <EmailsList />
    </S_EmailsSection>
  );
}

export const S_EmailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.xs} {
    grid-column: span 2;
  }

  ${media.md} {
    grid-column: span 1;
  }
`;
