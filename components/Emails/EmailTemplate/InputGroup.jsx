import styled from 'styled-components';
import { useState } from 'react';
// import useEmailTemplate from '@/hooks/useEmailTemplate';

export default function InputGroup({ label, value }) {
  const [subjectTypeIndex, setSubjectTypeIndex] = useState(0);

  const selectedLabel =
    label === 'Asunto' ? (
      <StyledLabel className="bold" onClick={() => console.log('Change it')}>
        {label}
      </StyledLabel>
    ) : (
      <label className="bold">{label}</label>
    );

  return (
    <StyledInputGroup>
      {selectedLabel}
      <input type="text" value={value} readOnly />
    </StyledInputGroup>
  );
}

const StyledInputGroup = styled.div`
  display: flex;

  label {
    width: 64px;
  }
  input {
    background-color: var(--light_100);
    flex-grow: 1;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    overflow: auto;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  user-select: none;

  :hover {
    color: var(--primary-color);
  }
`;
