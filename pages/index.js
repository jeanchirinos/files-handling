import styled from 'styled-components';
import { GlobalPage } from '@/General/ComponentWrapper';
import { closeContextMenu } from '@/Home/functions';
import UploadFilesButton from '@/Home/UploadFilesButton';
import ModeSwitcher from '@/Home/ModeSwitcher';
import PlantillasStack from '@/Home/PlantillasStack';

export default function Home() {
  return (
    <StyledHome onClick={() => closeContextMenu()}>
      <UploadFilesButton />
      <p className="light">o</p>
      <p className="light">Arrastra y suelta</p>

      <ModeSwitcher />
      <PlantillasStack />
    </StyledHome>
  );
}

const StyledHome = styled(GlobalPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: -webkit-fill-available;
  overflow-y: hidden;
  position: relative;
`;
