import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import PlantillaToNSTD from '../Atoms/PlantillaToNSTD';
import mediaQueries from 'src/styleGuide/breakpoints';

export default function NSTDSection() {
  const { _plantillasToNSTD } = useEmails();

  const plantillas = _plantillasToNSTD.map((p) => (
    <PlantillaToNSTD key={p} name={p} />
  ));

  return (
    <StyledNSTDSection>
      <p className="big bold">💻 NSTD</p>
      <div>{plantillas}</div>
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
