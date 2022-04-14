import styled from 'styled-components';
import media from 'src/styleGuide/breakpoints';
import InputsGroup from '../Molecules/InputsGroup';
import Message from '../Molecules/Message';

export default function EmailTemplate() {
  return (
    <StyledEmailTemplate className="small">
      <InputsGroup />
      <Message />
    </StyledEmailTemplate>
  );
}

export const StyledEmailTemplate = styled.section`
  height: fit-content;
  max-height: 75vh;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--emailTemplate);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;

  ${media.xs} {
    grid-column-start: 1;
    margin: 0 0.3rem;
  }

  ${media.md} {
    grid-column-start: 2;
    margin: 0 2.5rem;
  }
`;
