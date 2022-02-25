import styled from 'styled-components';
import InputGroup from './InputGroup';
import { useState, useEffect } from 'react';
import { db } from '../../../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';
import useEmailTemplate from '@/hooks/useEmailTemplate';

export default function InputsGroup({
  subjectTypeIndex,
  setSubjectTypeIndex,
  arrayOfCurrentPlantillas,
}) {
  const { _to, _subjectType } = useEmailTemplate();
  const [employees, setEmployees] = useState([]);

  const plantillasInSubject = new Intl.ListFormat('es').format(
    arrayOfCurrentPlantillas
  );

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const querySnapshot = await getDocs(collection(db, 'employees'));

    const fbEmployees = querySnapshot.docs.map((doc) => doc.data());

    setEmployees(fbEmployees);
  }

  function changeSubjectType() {
    const index =
      subjectTypeIndex === _subjectType.length - 1 ? 0 : subjectTypeIndex + 1;
    setSubjectTypeIndex(index);
  }

  const toValue = `${_to.name} ${_to.lastName}`;
  const ccValue = employees.map((e) => `${e.name} ${e.lastName}`).join('; ');
  const ccCopyValue = employees
    .map((e) => `${e.name} ${e.lastName} <${e.email}>`)
    .join('; ');
  const subjectValue = `Plantillas de ${_subjectType[subjectTypeIndex]} a digitar: ${plantillasInSubject}`;

  return (
    <StyledInputsGroup>
      <InputGroup label="Para" value={toValue} />
      <InputGroup label="CC" value={ccValue} copyValue={ccCopyValue} />
      <InputGroup
        label="Asunto"
        changeSubjectType={changeSubjectType}
        value={subjectValue}
      />
    </StyledInputsGroup>
  );
}

const StyledInputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
