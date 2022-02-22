import styled from 'styled-components';
import usePlantillas from '@/hooks/usePlantillas';
import { AiOutlineDelete } from 'react-icons/ai';

export default function DeleteButton({ name }) {
  const { __deleteFromStack } = usePlantillas();

  return (
    <StyledDeleteButton id={name} onClick={() => __deleteFromStack(name)} />
  );
}

const StyledDeleteButton = styled(AiOutlineDelete)`
  border-radius: 4px;
  background-color: var(--theme_400);
  color: var(--theme_200);
  font-size: 1.2rem;
  position: absolute;
  bottom: -10px;
  right: -10px;
  cursor: pointer;
  transition: background-color 0.3s;
  visibility: hidden;

  &.selected {
    visibility: visible;
  }

  :hover {
    background-color: var(--red_400);
    color: var(--light_700);
  }
`;
