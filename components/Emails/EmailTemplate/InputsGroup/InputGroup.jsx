import styled from 'styled-components';
import { copyElement } from '../../functions';

export default function InputGroup({
  label,
  value,
  copyValue,
  changeSubjectType,
}) {
  const selectedLabel =
    label === 'Asunto' ? (
      <StyledLabel className="bold" onClick={() => changeSubjectType()}>
        {label}
      </StyledLabel>
    ) : (
      <label className="bold">{label}</label>
    );

  return (
    <StyledInputGroup>
      {selectedLabel}
      <input
        type="text"
        value={value}
        readOnly
        onClick={(e) => copyElement(e, copyValue)}
      />
    </StyledInputGroup>
  );
}

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 64px;
  }

  input {
    padding: 0.1rem 0.5rem;
    flex-grow: 1;
    border-radius: 8px;
    border: none;
    background-color: var(--light_100);
    cursor: pointer;
    overflow: auto;
    outline: none;
    transition: box-shadow 0.2s;

    :hover,
    :focus {
      box-shadow: 0px 0px 5px 2px var(--primary-color);
    }
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  user-select: none;

  :hover {
    color: var(--primary-color);
  }
`;