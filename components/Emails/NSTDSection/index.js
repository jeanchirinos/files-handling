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
        {_currentPlantillas?.map(
          (plantilla, index) =>
            plantilla.NSTDNumber && (
              <Plantilla
                key={index}
                NSTDNumber={plantilla.NSTDNumber}
                size={plantilla.size}
              />
            )
        )}
      </div>
    </StyledNSTDSection>
  );
}

const StyledNSTDSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  ${mediaQueries.md} {
    grid-column-start: 3;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
