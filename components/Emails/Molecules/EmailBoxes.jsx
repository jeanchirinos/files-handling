import styled from 'styled-components';
import useEmails from '@/hooks/emailsSlice';
import EmailBox from '../Atoms/EmailBox';
import { Flex } from 'components/StyledComponents';

export default function EmailBoxes() {
  const { _emails } = useEmails();

  const emailBoxes = _emails.map((email, index) => (
    <EmailBox key={index} email={email} emailIndex={index} />
  ));

  return (
    <Flex $wrap gap={1}>
      {emailBoxes}
    </Flex>
  );
}
