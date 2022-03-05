import useEmailTemplate from '@/hooks/emailTemplateSlice';
import styled from 'styled-components';
import { copyElement } from '../functions';

export default function InputGroup({ label, value, copyValue }) {
  const {
    __changeSubjectType,
    _area,
    _workers_observadas,
    __changeWorkers,
    _leader,
  } = useEmailTemplate();

  const selectedLabel =
    label === 'Asunto' ? (
      <StyledLabel onClick={__changeSubjectType}>{label}</StyledLabel>
    ) : (
      <label>{label}</label>
    );

  const selectedGroup = _workers_observadas.find(
    ({ leader }) => leader.email === _leader.email
  );
  const options = _workers_observadas.filter(
    ({ leader }) => leader.email !== _leader.email
  );

  const selectorButton = () => {
    if (_area === 'observadas' && label === 'Para') {
      return (
        <select onChange={(e) => __changeWorkers(e.target.value)}>
          <option value={selectedGroup.leader.email}>
            {selectedGroup.leader.name} {selectedGroup.leader.lastName}
            {selectedGroup.leader.city && ` - ${selectedGroup.leader.city}`}
          </option>

          {options.map(({ leader }) => (
            <option key={leader.email} value={leader.email}>
              {leader.name} {leader.lastName}
              {leader.city && ` - ${leader.city}`}
            </option>
          ))}
        </select>
      );
    }
  };

  return (
    <StyledInputGroup>
      {selectedLabel}
      <input
        type="text"
        value={value}
        readOnly
        onClick={(e) => copyElement(e, copyValue)}
        title={value}
      />
      {selectorButton()}
    </StyledInputGroup>
  );
}

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 4rem;
    font-weight: var(--fw_bold);
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
