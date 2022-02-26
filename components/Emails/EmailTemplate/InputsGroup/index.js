import styled from 'styled-components';
import InputGroup from './InputGroup';
import { useState, useEffect } from 'react';
import { db } from '../../../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';
import useEmailTemplate from '@/hooks/useEmailTemplate';
import useEmails from '@/hooks/useEmails';

export default function InputsGroup() {
  const { _to, _subjectType } = useEmailTemplate();
  const { _arrayOfPlantillas } = useEmails();
  const [employees, setEmployees] = useState([]);

  const plantillasInSubject = new Intl.ListFormat('es').format(
    _arrayOfPlantillas
  );

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const querySnapshot = await getDocs(collection(db, 'employees'));

    const fbEmployees = querySnapshot.docs.map((doc) => doc.data());

    setEmployees(fbEmployees);
  }

  const toValue = `${_to.name} ${_to.lastName}`;
  const getCcValue = (type) => {
    return employees
      .map((e) => {
        const employeeEmail = type === 'copyValue' ? ` <${e.email}>` : '';

        return `${e.name} ${e.lastName}${employeeEmail}`;
      })
      .join('; ');
  };
  const subjectValue = `Plantillas de ${_subjectType.selectedValue} a digitar: ${plantillasInSubject}`;

  return (
    <StyledInputsGroup>
      <InputGroup label="Para" value={toValue} />
      <InputGroup
        label="CC"
        value={getCcValue()}
        copyValue={getCcValue('copyValue')}
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
