import styled from 'styled-components';
import InputGroup from '../Atoms/InputGroup';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import useEmails from '@/hooks/useEmails';

export default function InputsGroup() {
  const { _leader, _employees, _subjectType } = useEmailTemplate();
  const { _arrayOfPlantillas } = useEmails();

  const plantillasInSubject = new Intl.ListFormat('es').format(
    _arrayOfPlantillas
  );

  const toValue = `${_leader.name} ${_leader.lastName}`;
  const ccValue = (type) => {
    const employeesList = _employees
      .map((employee) => {
        const { name, lastName, email } = employee;

        if (type === 'copyValue') {
          return `${name} ${lastName} <${email}>`;
        } else {
          return `${name} ${lastName}`;
        }
      })
      .join('; ');

    return employeesList;
  };
  const subjectValue = `Plantillas de ${_subjectType.selectedValue} a digitar: ${plantillasInSubject}`;

  return (
    <StyledInputsGroup>
      <InputGroup label="Para" value={toValue} />
      <InputGroup
        label="CC"
        value={ccValue()}
        copyValue={ccValue('copyValue')}
      />
      <InputGroup label="Asunto" value={subjectValue} />
    </StyledInputsGroup>
  );
}

const StyledInputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
