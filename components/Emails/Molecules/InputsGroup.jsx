import styled from 'styled-components';
import useEmails from '@/hooks/emailsSlice';
import useEmailTemplate from '@/hooks/emailTemplateSlice';
import InputGroup from '../Atoms/InputGroup';

export default function InputsGroup() {
  const { _leader, _employees, _subjectType, _area } = useEmailTemplate();
  const { _plantillasArray } = useEmails();

  const to = (type) => {
    const { fullname, email } = _leader;

    return type === 'copyValue' ? email : fullname;
  };

  const cc = (type) => {
    const employeesList = _employees
      .map(({ fullname, email }) => (type === 'copyValue' ? email : fullname))
      .join('; ');

    return employeesList;
  };

  const plantillasInSubject = new Intl.ListFormat('es').format(
    _plantillasArray
  );

  const subject =
    _area === 'digitacion'
      ? `Plantillas de ${_subjectType.selectedValue} a digitar: ${plantillasInSubject}`
      : _subjectType.selectedValue;

  return (
    <StyledInputsGroup>
      <InputGroup.To value={to()} copyValue={to('copyValue')} />
      <InputGroup.Cc value={cc()} copyValue={cc('copyValue')} />
      <InputGroup.Subject value={subject} />
    </StyledInputsGroup>
  );
}

const StyledInputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
