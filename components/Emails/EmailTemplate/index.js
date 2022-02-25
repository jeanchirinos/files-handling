import styled from 'styled-components';
import mediaQueries from 'src/styleGuide/breakpoints';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import useEmails from '@/hooks/useEmails';
import { Fragment, useState } from 'react';
import { copyElement } from '../functions';
import InputsGroup from './InputsGroup';

export default function EmailTemplate() {
  const { _to, _subjectType } = useEmailTemplate();
  const { _currentPlantillas } = useEmails();

  const [subjectTypeIndex, setSubjectTypeIndex] = useState(0);

  const arrayOfCurrentPlantillas = _currentPlantillas?.map(
    (plantilla) => plantilla.name
  );

  return (
    <StyledEmailTemplate className="small">
      <div>
        <InputsGroup
          subjectTypeIndex={subjectTypeIndex}
          setSubjectTypeIndex={setSubjectTypeIndex}
          arrayOfCurrentPlantillas={arrayOfCurrentPlantillas}
        />
        <div
          id="emailTemplateContent"
          className="content"
          onClick={(e) => copyElement(e)}
        >
          <span>{_to.name},</span>
          <br />
          <span>
            te reasigno las siguientes plantillas{' '}
            <span className="bold">{_subjectType[subjectTypeIndex]}</span> para
            su digitación:
          </span>
          <div
            className="plantillasList bold"
            title={`Cantidad: ${arrayOfCurrentPlantillas.length}`}
          >
            {arrayOfCurrentPlantillas?.map((plantilla, index) => (
              <Fragment key={index}>
                <br />
                <span>{plantilla}</span>
              </Fragment>
            ))}
          </div>
          <br />
          <br />
          <br />
          <span>Saludos,</span>
          <br />
          <span>Alfredo Chirinos</span>
        </div>
      </div>
    </StyledEmailTemplate>
  );
}

const StyledEmailTemplate = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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
    max-height: 75vh;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--emailTemplate);
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;
  }

  .content {
    padding: 1rem 0.8rem;
    border-radius: 12px;
    flex-grow: 1;
    background-color: var(--light_100);
    overflow-y: auto;
    color: var(--dark);
    cursor: pointer;
    transition: box-shadow 0.2s;

    span {
      pointer-events: none;
    }

    :hover,
    :focus {
      box-shadow: 0px 0px 5px 2px var(--primary-color);
    }
  }

  .plantillasList {
    cursor: pointer;
    width: fit-content;
    transition: color 0.2s;

    span {
      pointer-events: none;
    }

    :hover {
      color: var(--primary-color);
    }
  }
`;
