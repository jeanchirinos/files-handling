import styled from 'styled-components';
import useEmails from '@/hooks/useEmails';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import InputGroup from '../Atoms/InputGroup';

export default function InputsGroup() {
  const { _leader, _employees, _subjectType, _area } = useEmailTemplate();
  const { _plantillasArray } = useEmails();

  const toValue = (type) => {
    const leaderCity = _leader.city ? ` - ${_leader.city}` : '';

    if (type === 'copyValue') {
      return `${_leader.name} ${_leader.lastName}${leaderCity} <${_leader.email}>`;
    } else {
      return `${_leader.name} ${_leader.lastName}${leaderCity}`;
    }
  };
  const ccValue = (type) => {
    const employeesList = _employees
      .map((employee) => {
        const { name, lastName, email, city } = employee;

        const employeeCity = city ? ` - ${city}` : '';

        if (type === 'copyValue') {
          return `${name} ${lastName}${employeeCity} <${email}>`;
        } else {
          return `${name} ${lastName}${employeeCity}`;
        }
      })
      .join('; ');

    return employeesList;
  };
  const plantillasInSubject = new Intl.ListFormat('es').format(
    _plantillasArray
  );
  const subjectValue =
    _area === 'digitacion'
      ? `Plantillas de ${_subjectType.selectedValue} a digitar: ${plantillasInSubject}`
      : _subjectType.selectedValue;

  return (
    <StyledInputsGroup>
      <InputGroup
        label="Para"
        value={toValue()}
        copyValue={toValue('copyValue')}
      />
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
