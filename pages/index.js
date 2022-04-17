import { useState } from 'react';
import styled, { css } from 'styled-components';
import UploadFilesLogic from 'components/Home/Atoms/UploadFilesButton/UploadFilesLogic';
// Components
import UploadFilesButton from 'components/Home/Atoms/UploadFilesButton';
import ModeSwitcher from 'components/Home/Atoms/ModeSwitcher';
import PlantillasStack from 'components/Home/Molecules/PlantillasStack';
import { closeContextMenu } from 'components/Home/functions';

export default function Home() {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { uploadFiles } = UploadFilesLogic();

  function handleDragOver(e) {
    e.preventDefault();
    if (e.dataTransfer.types[0] === 'Files') {
      !isDraggingOver && setIsDraggingOver(true);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDraggingOver(false);
    uploadFiles(e);
  }

  return (
    <S_Home
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
    </S_Home>
  );
}

const S_Home = styled.main(
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
      pointer-events: none;
      color: var(--light_100);
    }

    ${isDraggingOver &&
    css`
      background-color: var(--primary-color_700);

      * {
        display: none;
      }

      h3 {
        display: initial;
      }
    `}
  `
);
