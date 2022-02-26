import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import Plantilla from './Plantilla';
import mediaQueries from 'src/styleGuide/breakpoints';

export default function NSTDSection() {
  const { _currentPlantillas } = useEmails();
  return (
    <StyledNSTDSection>
      <p className="big bold">💻 NSTD</p>
      <div>
        {_currentPlantillas
          ?.filter((plantilla) => plantilla.NSTDNumber)
          .map((plantilla) => (
            <Plantilla key={plantilla.name} NSTDNumber={plantilla.NSTDNumber} />
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

  ${mediaQueries.xs} {
    grid-column-start: 2;
  }

  ${mediaQueries.md} {
    grid-column-start: 3;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
