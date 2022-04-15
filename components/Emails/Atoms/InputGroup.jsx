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
      onClick={e => copyElement(e, copyValue)}
      title={copyValue || value}
    />
  );
}

// MAIN COMPONENTS
function To({ value, copyValue }) {
  const { _area, _leader, __changeObservadasWorkers } = useEmailTemplate();

  // SELECTOR
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
      <S_Selector>
        <span onClick={e => copyElement(e, copyValue)} />
        <select onChange={e => __changeObservadasWorkers(e.target.value)}>
          {selectedOption()}
          {options}
        </select>
      </S_Selector>
    );
  };

  const inputOrSelector =
    _area === 'digitacion' ? (
      <Input value={value} copyValue={copyValue} />
    ) : (
      selector()
    );

  return (
    <S_InputGroup>
      <label>Para</label>
      {inputOrSelector}
    </S_InputGroup>
  );
}

function Cc({ value, copyValue }) {
  return (
    <S_InputGroup>
      <label>Cc</label>
      <Input value={value} copyValue={copyValue} />
    </S_InputGroup>
  );
}

function Subject({ value }) {
  const { __changeSubject } = useEmailTemplate();

  return (
    <S_InputGroup>
      <S_Label onClick={__changeSubject}>Asunto</S_Label>
      <Input value={value} />
    </S_InputGroup>
  );
}

// STYLED COMPONENTS
const S_Label = styled.label`
  cursor: pointer;
  user-select: none;

  :hover {
    color: var(--primary-color);
  }
`;

const S_InputGroup = styled.div`
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

const S_Selector = styled.div`
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
