import styled from 'styled-components';
import mediaQueries from 'src/styleGuide/breakpoints';
import InputsGroup from './InputsGroup';
import Message from './Message';
import { getWorkers } from 'src/features/emailTemplateSlice';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function EmailTemplate() {
  const dispatch = useDispatch();

  const { _leader, _employees } = useEmailTemplate();

  useEffect(() => {
    dispatch(getWorkers());
  }, [dispatch]);

  return (
    <>
      {!_leader || !_employees ? (
        <></>
      ) : (
        <StyledEmailTemplate className="small">
          <InputsGroup />
          <Message />
        </StyledEmailTemplate>
      )}
    </>
  );
}

const StyledEmailTemplate = styled.section`
  height: fit-content;
  max-height: 75vh;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--emailTemplate);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;

  ${mediaQueries.xs} {
    grid-column-start: 1;
    margin: 0 0.3rem;
  }

  ${mediaQueries.md} {
    grid-column-start: 2;
    margin: 0 2.5rem;
  }
`;
