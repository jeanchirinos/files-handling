import styled from 'styled-components';
import mediaQueries from 'src/styleGuide/breakpoints';
import InputGroup from './InputGroup';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import useEmails from '@/hooks/useEmails';

export default function EmailTemplate() {
  const { _to, _cc, _subjectType } = useEmailTemplate();
  const { _currentPlantillas } = useEmails();

  return (
    <StyledEmailTemplate className="small">
      <div>
        <div className="inputsGroup">
          <InputGroup label="Para" value={`${_to.name} ${_to.lastName}`} />
          <InputGroup label="CC" value={_cc} />
          <InputGroup
            label="Asunto"
            value={`Plantillas de ${_subjectType} a digitar: [plantillas]`}
          />
        </div>
        <div className="content">
          <p>{_to.name},</p>
          <p>
            te reasigno las siguientes plantillas{' '}
            <span className="bold">{_subjectType}</span> para su digitación:
          </p>
          <br />
          <div className="plantillasList">
            {_currentPlantillas?.map((plantilla, index) => (
              <p className="light" key={index}>
                {plantilla.name}
              </p>
            ))}
          </div>
          <br />
          <br />
          <br />
          <p>Saludos,</p>
          <p>Alfredo Chirinos</p>
        </div>
      </div>
    </StyledEmailTemplate>
  );
}

const StyledEmailTemplate = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.xs} {
    padding: 0 0.3rem;
  }

  ${mediaQueries.md} {
    padding: 0 2.5rem;
    grid-column-start: 2;
  }

  > div {
    width: 100%;
    height: fit-content;
    max-height: 50vh;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--emailTemplate);
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;
  }

  .inputsGroup {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .content {
    padding: 1rem 0.8rem;
    border-radius: 12px;
    flex-grow: 1;
    background-color: var(--light_100);
    overflow-y: auto;
    color: var(--dark);
  }

  .plantillasList {
    cursor: pointer;
    width: fit-content;
    /* transition: font-size 0.3s; */
    transition: color 0.2s;

    :hover {
      color: var(--primary-color);
      /* font-size: 1.2em; */
    }
  }
`;
