import styled, { css } from 'styled-components';
import { useState } from 'react';
import { closeContextMenu } from '@/Home/functions';
import UploadFilesLogic from '@/Home/Atoms/UploadFilesButton/UploadFilesLogic';
// Components
import UploadFilesButton from '@/Home/Atoms/UploadFilesButton';
import ModeSwitcher from '@/Home/Atoms/ModeSwitcher';
import PlantillasStack from '@/Home/Organisms/PlantillasStack';

export default function Home() {
  const [isDragginOver, setIsDragginOver] = useState(false);
  const { uploadFiles } = UploadFilesLogic();

  function handleDragOver(e) {
    e.preventDefault();
    !isDragginOver && setIsDragginOver(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragginOver(false);
    uploadFiles(e);
  }

  return (
    <StyledHome
      isDraggingOver={isDragginOver}
      onClick={() => closeContextMenu()}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={() => setIsDragginOver(false)}
      onDrop={(e) => handleDrop(e)}
    >
      <UploadFilesButton />
      <p>o</p>
      <p>Arrastra y suelta</p>
      <h3> Suelta para subir los archivos</h3>

      <ModeSwitcher />
      <PlantillasStack />
    </StyledHome>
  );
}

const StyledHome = styled.main(
  ({ isDraggingOver }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: -webkit-fill-available;
    font-weight: var(--fw_light);
    overflow-y: hidden;
    position: relative;
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
