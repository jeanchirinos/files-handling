import styled, { css } from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import UploadFilesLogic from '@/Home/Atoms/UploadFilesButton/UploadFilesLogic';
import usePlantillas from '@/hooks/plantillasSlice';

export default function NexPageButton() {
  const { groupEmails } = UploadFilesLogic();
  const { _plantillasStack } = usePlantillas();

  return _plantillasStack.length ? (
    <StyledNextPageButton
      $active
      onClick={() => groupEmails(_plantillasStack)}
    />
  ) : (
    <StyledNextPageButton title="Añade un archivo!" />
  );
}
const StyledNextPageButton = styled(AiOutlineArrowRight)(
  ({ $active }) => css`
    position: absolute;
    bottom: 25px;
    right: 25px;
    font-size: 2rem;

    ${$active &&
    css`
      color: var(--primary-color);
      cursor: pointer;
    `}

    ${!$active &&
    css`
      color: var(--theme_700);
      cursor: not-allowed;
    `}
  `
);
