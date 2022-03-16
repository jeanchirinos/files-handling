import { useState } from 'react';
import styled, { css } from 'styled-components';
import UploadFilesLogic from '@/Home/Atoms/UploadFilesButton/UploadFilesLogic';
// Components
import UploadFilesButton from '@/Home/Atoms/UploadFilesButton';
import ModeSwitcher from '@/Home/Atoms/ModeSwitcher';
import PlantillasStack from '@/Home/Molecules/PlantillasStack';
import { closeContextMenu } from '@/Home/functions';

export default function Home() {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { uploadFiles } = UploadFilesLogic();

  function handleDragOver(e) {
    e.preventDefault();
    !isDraggingOver && setIsDraggingOver(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDraggingOver(false);
    uploadFiles(e);
  }

  return (
    <StyledHome
      isDraggingOver={isDraggingOver}
      onClick={closeContextMenu}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={handleDrop}
    >
      <UploadFilesButton />
      <p>o</p>
      <p>Arrastra y suelta</p>
      <h3>Suelta para subir los archivos</h3>

      <ModeSwitcher />
      <PlantillasStack />
    </StyledHome>
  );
}

const StyledHome = styled.main(
  ({ isDraggingOver }) => css`
    height: 100vh;
    max-height: fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: var(--fw_light);
    overflow-y: hidden;
    transition: background-color 0.3s;

    h3 {
      display: none;
    }

    ${isDraggingOver &&
    css`
      background-color: var(--primary-color);
      * {
        pointer-events: none;
        display: none;
      }

      h3 {
        display: block;
        color: var(--light_100);
      }
    `}
  `
);
