import styled from 'styled-components';
import { Fragment } from 'react';
import usePlantillas from '@/hooks/usePlantillas';
import Plantilla from './Plantilla';
import mediaQueries from 'src/styleGuide/breakpoints';

export default function NSTDSection() {
  const { _emails, _currentEmailIndex } = usePlantillas();
  return (
    <StyledNSTDSection>
      <p className="big bold">💻 NSTD</p>
      <div>
        {_emails[_currentEmailIndex]?.map((plantilla, index) => (
          <Fragment key={index}>
            {plantilla.NSTDNumber && (
              <Plantilla
                NSTDNumber={plantilla.NSTDNumber}
                size={plantilla.size}
              />
            )}
          </Fragment>
        ))}
      </div>
    </StyledNSTDSection>
  );
}

const StyledNSTDSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* background-color: red; */

  ${mediaQueries.md} {
    grid-column-start: 3;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
