import styled from 'styled-components';
import media from '../src/styleGuide/breakpoints';
import { getWorkers } from 'src/features/emailTemplateSlice';
import useEmailTemplate from 'src/features/emailTemplateSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SpinnerLoader from 'components/General/SpinnerLoader';
// Components
import HomeButton from 'components/Emails/Atoms/HomeButton';
import EmailsSection from 'components/Emails/Organisms/EmailsSection';
import EmailTemplateSection from 'components/Emails/Organisms/EmailTemplateSection';
import NSTDSection from 'components/Emails/Organisms/NSTDSection';
import AreaIndicator from 'components/Emails/Atoms/AreaIndicator';
import Header from 'components/Emails/Organisms/Header';

export default function Emails() {
  const dispatch = useDispatch();
  const { _leader, _employees } = useEmailTemplate();

  useEffect(() => {
    dispatch(getWorkers());
  }, [dispatch]);

  const dataIsReady = _leader && _employees;

  if (dataIsReady)
    return (
      <S_Emails>
        {/* <HomeButton />
        <AreaIndicator /> */}
        <Header />
        <EmailsSection />
        <EmailTemplateSection />
        <NSTDSection />
      </S_Emails>
    );

  return <SpinnerLoader />;
}

const S_Emails = styled.main`
  /* padding: 8rem var(--padding) 0 var(--padding); */
  padding: 0 var(--padding) 0 var(--padding);
  display: grid;
  row-gap: 4rem;

  ${media.xs} {
    grid: 5rem auto / 75% 25%;
    /* grid-row-gap: 5rem; */
  }

  ${media.md} {
    grid: 5rem auto / 25% 50% 25%;
    /* grid-row-gap: 0; */
  }
`;
