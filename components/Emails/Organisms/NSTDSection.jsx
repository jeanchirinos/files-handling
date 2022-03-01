import styled, { css } from 'styled-components';
import useEmails from '@/hooks/useEmails';
import PlantillaToNSTD from '../Atoms/PlantillaToNSTD';
import mediaQueries from 'src/styleGuide/breakpoints';
import useEmailTemplate from '@/hooks/useEmailTemplate';

export default function NSTDSection() {
  const { _plantillasToNSTDArray } = useEmails();
  const { _area } = useEmailTemplate();

  const plantillas = _plantillasToNSTDArray.map((p) => (
    <PlantillaToNSTD key={p} name={p} />
  ));

  return (
    <StyledNSTDSection area={_area}>
      <p className="big bold">💻 NSTD</p>
      <div>{plantillas}</div>
    </StyledNSTDSection>
  );
}

const StyledNSTDSection = styled.section(
  ({ area }) => css`
    display: ${area === 'digitacion' ? 'flex' : 'none'};
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
  `
);