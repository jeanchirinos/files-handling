import styled from 'styled-components';
import useEmails from '@/hooks/emailsSlice';
import useEmailTemplate, {
  dataIsBeingFetched,
} from '@/hooks/emailTemplateSlice';
import InputGroup from '../Atoms/InputGroup';

export default function InputsGroup() {
  const { _leader, _employees, _subject, _area } = useEmailTemplate();
  const { _plantillasArray } = useEmails();

  function emailOrFullname(type, email, fullname) {
    return type === 'copyValue' ? email : fullname;
  }

  // TO
  const to = type => {
    const { email, fullname } = _leader;

    return emailOrFullname(type, email, fullname);
  };

  // CC
  const cc = type => {
    const employeesList = _employees.map(e =>
      emailOrFullname(type, e.email, e.fullname)
    );

    const listWithSemicolon = employeesList.join('; ');

    return listWithSemicolon;
  };

  // SUBJECT
  const plantillasInSubject = new Intl.ListFormat('es').format(
    _plantillasArray
  );

  const subject =
    _area === 'digitacion'
      ? `${_subject.value} ${plantillasInSubject}`
      : _subject.value;

  return (
    <S_InputsGroup>
      <InputGroup.To value={to()} copyValue={to('copyValue')} />
      <InputGroup.Cc value={cc()} copyValue={cc('copyValue')} />
      <InputGroup.Subject value={subject} />
    </S_InputsGroup>
  );
}

const S_InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
