import styled from 'styled-components';
import mediaQueries from '../src/styleGuide/breakpoints';
import { getWorkers } from 'src/features/emailTemplateSlice';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SpinnerLoader from '@/General/SpinnerLoader';
// Components
import HomeButton from '@/Emails/Atoms/HomeButton';
import EmailsSection from '@/Emails/Organisms/EmailsSection';
import EmailTemplateSection from '@/Emails/Organisms/EmailTemplateSection';
import NSTDSection from '@/Emails/Organisms/NSTDSection';
import AreaIndicator from '@/Emails/Atoms/AreaIndicator';

export default function Emails() {
  const dispatch = useDispatch();
  const { _leader, _employees } = useEmailTemplate();

  useEffect(() => {
    dispatch(getWorkers());
  }, [dispatch]);

  const dataIsReady = _leader && _employees;

  if (dataIsReady)
    return (
      <StyledEmails>
        <HomeButton />
        <AreaIndicator />
        <EmailsSection />
        <EmailTemplateSection />
        <NSTDSection />
      </StyledEmails>
    );

  return <SpinnerLoader />;
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
