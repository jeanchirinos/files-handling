import styled, { css } from 'styled-components';
import useEmails from 'src/features/emailsSlice';
import PlantillaToNSTD from '../Atoms/PlantillaToNSTD';
import media from 'src/styleGuide/breakpoints';
import useEmailTemplate from 'src/features/emailTemplateSlice';

export default function NSTDSection() {
  const { _plantillasToNSTDArray } = useEmails();
  const { _area } = useEmailTemplate();

  const plantillas = _plantillasToNSTDArray.map(p => (
    <PlantillaToNSTD key={p} name={p} />
  ));

  return (
    <S_NSTDSection area={_area}>
      <p className="big bold">💻 NSTD</p>
      <div>{plantillas}</div>
    </S_NSTDSection>
  );
}

const S_NSTDSection = styled.section(
  ({ area }) => css`
    display: ${area === 'digitacion' ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    ${media.xs} {
      grid-column-start: 2;
    }

    ${media.md} {
      grid-column-start: 3;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `
);
