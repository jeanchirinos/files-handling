import styled, { css } from 'styled-components';
import { GlobalPage } from '@/General/ComponentWrapper';
import { closeContextMenu } from '@/Home/functions';
import UploadFilesButton from '@/Home/UploadFilesButton';
import ModeSwitcher from '@/Home/ModeSwitcher';
import PlantillasStack from '@/Home/PlantillasStack';
import { useState } from 'react';
import UploadFilesLogic from '@/Home/UploadFilesButton/UploadFilesLogic';

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
      <p className="light">o</p>
      <p className="light">Arrastra y suelta</p>
      <h3> Suelta para subir los archivos</h3>

      <ModeSwitcher />
      <PlantillasStack />
    </StyledHome>
  );
}

const StyledHome = styled(GlobalPage)(
  ({ isDraggingOver }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: -webkit-fill-available;
    overflow-y: hidden;
    position: relative;
    transition: background-color 0.3s;

    ${isDraggingOver &&
    css`
      background-color: var(--primary-color);
      * {
        pointer-events: none;
      }

      *:not(h3) {
        display: none;
      }
    `}

    h3 {
      color: var(--light_100);
      display: ${isDraggingOver ? 'block' : 'none'};
    }
  `
);
