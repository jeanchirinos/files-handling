import useEmailTemplate from '@/hooks/emailTemplateSlice';
import styled from 'styled-components';
import { copyElement } from '../functions';

// Additional Component
function Input({ value, copyValue }) {
  return (
    <input
      type="text"
      readOnly
      value={value}
      onClick={(e) => copyElement(e, copyValue)}
      title={copyValue || value}
    />
  );
}

// MAIN COMPONENTS
function To({ value, copyValue }) {
  const { _area, _leader, __changeWorkers } = useEmailTemplate();

  const selector = () => {
    const observadasWorkersGroups = JSON.parse(
      localStorage.observadasWorkersGroups
    );

    const selectedOption = () => {
      const selectedGroup = observadasWorkersGroups.find(
        ({ leader }) => leader.email === _leader.email
      );

      const { leader } = selectedGroup;
      const { email, fullname } = leader;

      return <option value={email}>{fullname}</option>;
    };

    const options = observadasWorkersGroups
      .filter(({ leader }) => leader.email !== _leader.email)
      .map(({ leader }) => {
        const { email, fullname } = leader;
        return (
          <option key={email} value={email}>
            {fullname}
          </option>
        );
      });

    return (
      <StyledSelector>
        <span onClick={(e) => copyElement(e, copyValue)} />
        <select onChange={(e) => __changeWorkers(e.target.value)}>
          {selectedOption()}
          {options}
        </select>
      </StyledSelector>
    );
  };

  const inputOrSelector =
    _area === 'digitacion' ? (
      <Input value={value} copyValue={copyValue} />
    ) : (
      selector()
    );

  return (
    <StyledInputGroup>
      <label>Para</label>
      {inputOrSelector}
    </StyledInputGroup>
  );
}

function Cc({ value, copyValue }) {
  return (
    <StyledInputGroup>
      <label>Cc</label>
      <Input value={value} copyValue={copyValue} />
    </StyledInputGroup>
  );
}

function Subject({ value }) {
  const { __changeSubject } = useEmailTemplate();

  return (
    <StyledInputGroup>
      <StyledLabel onClick={__changeSubject}>Asunto</StyledLabel>
      <Input value={value} />
    </StyledInputGroup>
  );
}

// STYLED COMPONENTS
const StyledLabel = styled.label`
  cursor: pointer;
  user-select: none;

  :hover {
    color: var(--primary-color);
  }
`;

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 4rem;
    font-weight: var(--fw_bold);
  }

  input {
    flex-grow: 1;
    transition: box-shadow 0.2s;

    :hover {
      box-shadow: 0px 0px 5px 2px var(--primary-color);
    }
  }
`;

const StyledSelector = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  position: relative;
  transition: box-shadow 0.2s;

  :hover {
    box-shadow: 0px 0px 5px 2px var(--primary-color);
  }

  span {
    width: calc(100% - 24px);
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`;

// EXPORT
const InputGroup = {
  To,
  Cc,
  Subject,
};

export default InputGroup;
